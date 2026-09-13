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
    const parsed = parseFenceInfo(token.info)

    if (!parsed.langName || !parsed.fileName) {
      return defaultFenceRenderer(tokens, idx, options, env, self)
    }

    const highlighted = options.highlight
      ? options.highlight(token.content, parsed.langName, parsed.langAttrs) ||
        md.utils.escapeHtml(token.content)
      : md.utils.escapeHtml(token.content)

    const safeFileName = md.utils.escapeHtml(parsed.fileName)
    const filenameDiv = `<div class="${FILE_NAME_CLASS}">${safeFileName}</div>`

    // カスタムハイライタが完結した<pre>ブロックを返すケース(markdown-it本体と
    // 同じ判定)は中身の構造を把握できないため、外側divで囲むだけに留める。
    if (highlighted.indexOf('<pre') === 0) {
      return `<div class="${BLOCK_CLASS}">\n${filenameDiv}\n${highlighted}\n</div>\n`
    }

    const classAttrIndex = token.attrIndex('class')
    const tmpAttrs = token.attrs ? token.attrs.slice() : []
    const langClass = options.langPrefix + parsed.langName

    if (classAttrIndex < 0) {
      tmpAttrs.push(['class', langClass])
    } else {
      tmpAttrs[classAttrIndex] = tmpAttrs[classAttrIndex].slice()
      tmpAttrs[classAttrIndex][1] += ` ${langClass}`
    }

    const codeAttrs = self.renderAttrs({ attrs: tmpAttrs })

    return (
      `<pre class="${BLOCK_CLASS}"><code${codeAttrs}>` +
      highlighted +
      `</code>${filenameDiv}</pre>\n`
    )
  }
}