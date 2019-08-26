// add solution here
function theBeatlesPlay(musicians, instruments) {
  var musiciansInfo = []
  
  for(let i = 0; i < musicians.length; i++) {
    musiciansInfo += musiciansInfo + `${musicians[i]} plays ${instruments[i]}`
  }
  return musiciansInfo
}