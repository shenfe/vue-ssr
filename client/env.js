const env = function () {
  let r
  if (/domain\.com/.test(window.location.hostname)) {
    r = 'pro'
  } else {
    r = 'dev'
  }
  if (arguments.length) return r === arguments[0]
  return r
}

export default env
