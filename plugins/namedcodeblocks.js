const BLOCK_CLASS = 'named-fence-block'
const FILE_NAME_CLASS = 'named-fence-filename'

/**
 * markdown-it-named-code-blocksを削除して互換実装を提供
 * 入力例:
 *   js:app.js
 *   js:app.js additional-attribute
 */
function parseFenceInfo(info) {
  const normalized = info ? String(info).trim() : ''

  if (!normalized) {
    return {
      langName: '',
      fileName: '',
      langAttrs: '',
    }
  }

  // 元プラグインと同様、最初の空白までを「言語:ファイル名」とする。
  const parts = normalized.split(/(\s+)/g)
  const match = parts[0].match(/^([^:\n]+)?(:([^:\n]*))?([^:\n]*)?$/)
  const langAttrs = parts.slice(2).join('')

  if (!match) {
    return {
      langName: '',
      fileName: '',
      langAttrs: '',
    }
  }

  return {
    langName: match[1] || '',
    fileName: match[3] || '',
    langAttrs,
  }
}

/**
 * 名前付きコードブロックを安全にレンダリングする。
 *
 * ファイル名はmd.utils.escapeHtml()で必ずテキスト化する。
 * ファイル名をHTMLパーサーへ渡してはならない。
 */
export default function namedCodeBlocks(md) {
  const defaultFenceRenderer = md.renderer.rules.fence

  if (typeof defaultFenceRenderer !== 'function') {
    throw new TypeError('markdown-it fence renderer is not available')
  }

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const originalInfo = token.info
    const parsed = parseFenceInfo(originalInfo)

    if (!parsed.langName || !parsed.fileName) {
      return defaultFenceRenderer(tokens, idx, options, env, self)
    }

    // デフォルトレンダラーへ渡す情報からファイル名部分を除去する。
    token.info = parsed.langAttrs
      ? `${parsed.langName} ${parsed.langAttrs}`
      : parsed.langName

    try {
      const codeBlockHtml = defaultFenceRenderer(
        tokens,
        idx,
        options,
        env,
        self
      )

      const safeFileName = md.utils.escapeHtml(parsed.fileName)

      return [
        `<div class="${BLOCK_CLASS}">`,
        `<div class="${FILE_NAME_CLASS}">${safeFileName}</div>`,
        codeBlockHtml,
        '</div>',
        '',
      ].join('\n')
    } finally {
      token.info = originalInfo
    }
  }
}