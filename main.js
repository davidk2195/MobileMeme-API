//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('.meme').addEventListener('click', getFetch)
document.querySelector('.left').addEventListener('click', goLeft)
document.querySelector('.right').addEventListener('click', goRight)
let i =0;
function getFetch(){
  const url = `https://api.imgflip.com/get_memes`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       i=0
       document.querySelector('h2').innerText=data.data.memes[i].name
       document.querySelector('img').src=data.data.memes[i].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
      
    
}

function goLeft(){
  const url = `https://api.imgflip.com/get_memes`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       if (i==0){
        alert('cant go left please go forward or get meme')
       }
       i=i-1
       document.querySelector('h2').innerText=data.data.memes[i].name
       document.querySelector('img').src=data.data.memes[i].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
      
    
}
function goRight(){
  const url = `https://api.imgflip.com/get_memes`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        i= i+1
       document.querySelector('h2').innerText=data.data.memes[i].name
       document.querySelector('img').src=data.data.memes[i].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
      
    
}
