import MarkdownIt from 'markdown-it'
import 'katex/dist/katex.min.css'
import katex from 'katex'
import tm from 'markdown-it-texmath'

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    // Your Basic Settings
    preset: 'default',
    linkify: true,
    html: true,
    breaks: true,
    typographer: true,
    injected: true,
  })

  const defaultRender =
    md.renderer.rules.image ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(['loading', 'lazy'])
    return defaultRender(tokens, idx, options, env, self)
  }

  md.use(tm, {
    engine: katex,
    delimiters: 'dollars',
    katexOptions: { macros: { '\\RR': '\\mathbb{R}' } },
  })

  inject('md', md)
}
