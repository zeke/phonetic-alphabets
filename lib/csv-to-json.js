"use strict";

var csv = require("basic-csv")
var fs = require("fs")

csv.readCSV(__dirname + "/../data/alphabets.csv", function (error, rows) {
  var alphabets = rows.map(function(row){
    var alphabet = {
      name: row[0].trim(),
      language: row[1].trim(),
      description: row[2].trim(),
      year: row[3].trim()
    }

    if (!alphabet.description) delete(alphabet.description)
    if (!alphabet.year) delete(alphabet.year)

    alphabet.mapping = {}

    row[4].trim().split(" ").forEach(function(word) {
      alphabet.mapping[word.slice(0,1)] = word
    })

    return alphabet
  })

  fs.writeFileSync(__dirname + "/../data/alphabets.json", JSON.stringify(alphabets, null, 2))

})
