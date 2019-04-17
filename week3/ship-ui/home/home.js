
async function loadShips() {
  const currentUserString = localStorage.getItem('currentUser');
  const currentUser = JSON.parse(currentUserString);

  const response = await fetch('http://localhost:8080/spaceships/owner/' + currentUser.userId, {
    credentials: 'include'
  });
  if (response.status === 200) {
    const ships = await response.json();
    console.log(ships);
    populatePageShips(ships);
  }
}

function populatePageShips(ships) {

  const shipElements = ships.map(ship => {
    const card = document.createElement('div');
    
    card.classList = 'card col-md-4 col-sm-6 col-xs-12';

    const img = document.createElement('img');
    img.src = 'https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg';
    img.classList = 'img-fluid'
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList = 'card-title';
    cardTitle.innerText = ship.name;
    cardBody.appendChild(cardTitle);


    const cardData = document.createElement('ul');
    cardData.classList = 'list-group list-group-flush';
    card.appendChild(cardData);

    const speed = document.createElement('li');
    speed.classList = 'list-group-item';
    speed.innerText = 'Speed: ' + ship.speed;
    cardData.appendChild(speed);

    const weight = document.createElement('li');
    weight.classList = 'list-group-item';
    weight.innerText = 'Weight: ' + ship.weight;
    cardData.appendChild(weight);

    const description = document.createElement('li');
    description.classList = 'list-group-item';
    description.innerText = 'Description: ' + ship.description;
    cardData.appendChild(description);

    const deleteItem = document.createElement('li');
    deleteItem.classList = 'list-group-item';
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'btn btn-dark';
    deleteButton.addEventListener('click', () => deleteShip(ship.shipId, card));
    deleteButton.innerText = 'Delete';
    deleteItem.appendChild(deleteButton);
    cardData.appendChild(deleteItem);
    
    return card;
  });

  const shipContainer = document.getElementById('ship-container');
  shipContainer.append(...shipElements);

  // <div class="card col-md-4 col-sm-6 col-xs-12">
  //   <img src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg" class="card-img-top"
  //     alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">Ship Name</h5>
  //     </div>
  //     <ul class="list-group list-group-flush">
  //       <li class="list-group-item">Speed: 32412</li>
  //       <li class="list-group-item">Weight: 3124312</li>
  //       <li class="list-group-item">Description: dlsa;jf;asdlkfjsda lksdalkfjsdlkfj</li>
  //       <li class="list-group-item">
  //         <button class="btn btn-danger">Delete</button>
  //       </li>
  //     </ul>
  //     </div>
}

loadShips();

async function deleteShip(id, shipCard) {
  const response = await fetch('http://localhost:8080/spaceships/' + id, {
    credentials: 'include',
    method: 'DELETE'
  });
  if(response.status === 200) {
    shipCard.parentNode.removeChild(shipCard)
  }
}