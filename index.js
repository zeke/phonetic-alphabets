var alphabets = module.exports = {}
var data = require("./data/alphabets.json")

alphabets.spell = function(query) {
  return data.map(function(alphabet){
    alphabet.spelling = query.split("").map(function(letter) {
      return alphabet.mapping[letter]
    })
    return alphabet
  })
}

alphabets.data = data
