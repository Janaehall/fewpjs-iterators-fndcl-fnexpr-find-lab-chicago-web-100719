const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(array) {
 let result = array.find(r => r.result === "W")
 return !!result? result.year : undefined
}
