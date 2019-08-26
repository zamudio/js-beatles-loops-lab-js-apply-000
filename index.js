// add solution here
function theBeatlesPlay(musicians, instruments) {
  var musiciansInfo = []
  
  for(let i = 0; i < musicians.length; i++) {
   var bandMember = `${musicians[i]} plays ${instruments[i]}`
   musiciansInfo += bandMember
  }
  return musiciansInfo
}