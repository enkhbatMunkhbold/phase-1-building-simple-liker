// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like')
const errorWarning = document.querySelector('div#modal')
for(let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', () => {
    const heartEmoji = hearts[i].querySelector('.like-glyph')
    if(heartEmoji.textContent === EMPTY_HEART) {
      mimicServerCall().then(() => {        
        heartEmoji.classList.add('activated-heart')
        heartEmoji.textContent = FULL_HEART
      })
      .catch(e => {
        const p = document.querySelector('p#modal-message') 
        p.textContent = e
        errorWarning.classList.remove('hidden')
        setTimeout(() => errorWarning.classList.add('hidden'), 3000)
      })
    } else {
      heartEmoji.textContent = EMPTY_HEART
      heartEmoji.classList.remove('activated-heart')
    }
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
