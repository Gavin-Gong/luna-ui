/*
  http://justclear.gitlab.io/throttle-and-debounce/
  https://github.com/hanzichi/underscore-analysis/issues/20
  https://www.talkingcoder.com/article/6427434037544091919
  TODO: add more options etc. immediate, cancel
*/

export default (fn, interval = 300) => {
  let shouldRun = true
  return () => {
    if (!shouldRun) return
    shouldRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      shouldRun = true
    }, interval)
  }
}
