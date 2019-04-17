async function createShip(event) {
  event.preventDefault();

  const name = document.getElementById('name-input').value;
  const speed = +document.getElementById('speed-input').value;
  const weight = +document.getElementById('weight-input').value;
  const description = document.getElementById('description-input').value;

  const ship = {name, speed, weight, description};

  const response = await fetch('http://localhost:8080/spaceships',{
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(ship)
  });

  if (response.status === 201) {
    window.location = '../home/home.html';
  } else {
    console.log('failed to create ship')
  }

}