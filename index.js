// add solution here
function theBeatlesPlay(musicians, instruments){
  var answer = []
  for(var x=0;x< musicians.length;x++){
    answer.push(`${musicians[x]} plays ${instruments[x]}`)
  }
  return answer
}

function johnLennonFacts(facts){
  var count = 0
  var answer = []
  while(count>facts.length){
    answer.push(`${facts[count]}!!!`)
    count++
  }
  return answer
}