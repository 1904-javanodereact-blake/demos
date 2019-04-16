async function getJokeById(event) {
  event.preventDefault(); // prevent default form submission functionality
  const id = document.getElementById('joke-id').value;

  const resp = await fetch('http://api.icndb.com/jokes/' + id);
  console.log(resp);

  const respBody = await resp.json();
  console.log(respBody);

  const jokeElement = document.getElementById('current-joke');
  jokeElement.innerText = respBody.value.joke;
}

// ES8 async await version
async function getJoke() {
  const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
  console.log(resp);

  const respBody = await resp.json();
  console.log(respBody);

  const jokeElement = document.getElementById('current-joke');
  jokeElement.innerText = respBody.value.joke;
}

// ES6 .then .catch version
function getJokePromises() {
  fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    .then(resp => {
      console.log(resp);
      return resp.json();
    })
    .then(respBody => {
      console.log(respBody);

      const jokeElement = document.getElementById('current-joke');
      jokeElement.innerText = respBody.value.joke;
    })
    .catch(err => {
      console.log(err);
    })
}