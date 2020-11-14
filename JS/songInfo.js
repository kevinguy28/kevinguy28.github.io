console.log("4")
document.addEventListener('DOMContentLoaded', ()=>{
  let url ="http://199.195.194.92:2199/rpc/meyima03/streaminfo.get?x=1";
  fetch(url)
  .then(response=>response.text())
  .then(data=>{
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    artistName(xml);
  })
})

function artistName(x){
  let artistSpan = document.getElementById('artistName');
  let artistName = x.getElementsByTagName('track')[0];
  let imageInfo = x.getElementsByTagName('imageurl')[0];
  document.getElementById('artistName').innerHTML = artistName.getElementsByTagName('artist')[0].firstChild.nodeValue;
  document.getElementById('songName').innerHTML = artistName.getElementsByTagName('title')[0].firstChild.nodeValue;
  document.getElementById('songPicture').src = artistName.getElementsByTagName('imageurl')[0].firstChild.nodeValue;
}
