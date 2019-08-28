/* eslint-disable */

const scripts = [
  {
    type: 'code',
    body: '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);',
  },
]

const loadingScripts = scripts.reduce((loaded, script) => loaded.then(() => {
  const scriptEl = document.createElement('script')
  scriptEl.type = 'text/javascript'
  let loading

  if (script.type == 'src') {
    scriptEl.src = script.body

    loading = new Promise((resolve, reject) => {
      scriptEl.onload = resolve
      scriptEl.onerror = reject
    })
  }
  else {
    scriptEl.innerHTML = script.body

    loading = Promise.resolve()
  }

  document.head.appendChild(scriptEl)

  return loading
}), Promise.resolve())

export default loadingScripts

/* eslint-enable */