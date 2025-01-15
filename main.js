const mainTomato = document.getElementById('main-tomato')
const counterDisplay = document.getElementById('counter-display')
const tomatoSong = document.getElementById('tomato-song')
// set the splash sound
const tomatoSplash = new Audio('assets/tomatoe.mp3')

// set doktor krapula song
const romanticSong = new Audio('assets/track.mp3')

let counter = 0

counterDisplay.innerText = Math.floor(counter)

mainTomato.addEventListener('click', function (e) {
  counter++

  if (counter === 95) {
    tomatoSong.volume = 0.1;
    tomatoSong.play();
  }

  if ( counter === 100 ) playRomanticSong()
  if (counter > 100) counter *= 1.1
  if (counter > 300) counter *= 1.2
  if (counter > 10000) counter *= 1.3
  if (counter > 1000000) counter *= 2.0
  // Lines to control the splash sound
  tomatoSplash.play()
  setTimeout(() => {
    tomatoSplash.pause()
    tomatoSplash.currentTime = 0
  }, 300)

  counterDisplay.innerText = Math.floor(counter)
  createDrop()
  removeDrop()
});

const createDrop = () => {
  const tomaDrop = document.createElement('figure')
  tomaDrop.className = 'toma-drop'
  tomaDrop.style.left = `${getRandomBetween(100, -10)}%`

  const dropImg = document.createElement('img')
  dropImg.setAttribute('src', `assets/slice${getRandomBetween(5,1)}.png`)
  dropImg.setAttribute('onerror', `onerror="this.src='assets/default.png';this.onerror='';"`)
  dropImg.setAttribute('draggable', 'false')

  tomaDrop.appendChild(dropImg)
  document.body.appendChild(tomaDrop)
}

const removeDrop = () => {
  const drop = document.getElementsByClassName('toma-drop')
  if (drop.length !== 0) {
    setTimeout(() => drop[0].remove(), 3000)
  }
}

const getRandomBetween = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const playRomanticSong = () => {
  romanticSong.play()
}
