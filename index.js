// add solution here
function theBeatlesPlay(musicians, instruments) {
  var bandInfo = []
  
  for(let i = 0; i < musicians.length; i++) {
   var bandMember = `${musicians[i]} plays ${instruments[i]}`
   bandInfo.push(bandMember)
  }
  return bandInfo
}