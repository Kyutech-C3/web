import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'
import 'katex/dist/katex.min.css'

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

  md.use(mk)

  inject('md', md)
}
