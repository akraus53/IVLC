(function() {
// get all Video links 
let ls = document.links
let linklist = [...ls].filter((a) => a.offsetWidth == 170)

// loop over all video links
for(let link of linklist){
  open(link);
  document.getElementsByClassName("vjs-poster")[0].click();
  console.log(document.getElementsByClassName("vjs-tech")[0].src);

}


})();
