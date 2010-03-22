exports.strip = function () {
  return this.replace(/\s+/g, " ").replace(/(^\s|\s$)/g, '')
}
