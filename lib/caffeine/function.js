exports.params = function () { 
  return this.toString().match(/\((.*?)\)/)[1].match(/\w+/g) || [] 
}

exports.contents = function () { 
  return this.toString().match(/^[^\{]*{((.*\n*)*)}/m)[1]
}