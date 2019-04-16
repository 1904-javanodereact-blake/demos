const ships = [
  {
    shipId: 1,
    owner: 1,
    name: '<img src="https://pics.me.me/spoiler-alert-darth-vader-isilukes-father-11428289.png" >',
    weight: 234,
    speed: 312623,
    description: 'ship'
  },
  {
    shipId: 2,
    owner: 1,
    name: 'The Black Pearl',
    weight: 345345,
    speed: 97695,
    description: 'ship'
  },
  {
    shipId: 3,
    owner: 1,
    name: 'Jack Daw',
    weight: 456,
    speed: 7868,
    description: 'ship'
  },
]

const tableBody = document.getElementById('ship-table-body');

function populateTableUnsafe() {
  const htmlShips = ships.map(ship => `
  <tr>
    <td>${ship.name}</td>
    <td>${ship.speed}</td>
    <td>${ship.description}</td>
  </tr>
  `);
  tableBody.innerHTML += htmlShips;
}
// populateTableUnsafe();

function populateTableSafe() {
  const shipElements = ships.map(ship => {
    const shipRow = document.createElement('tr');
    shipRow.id = 'ship-' + ship.shipId;
    
    shipRow.addEventListener('click', () => {
      if (shipRow.style.color !== 'red') {
        shipRow.style.color = 'red';
        shipRow.style.backgroundColor = 'blue';
      } else {
        shipRow.style.color = 'blue';
        shipRow.style.backgroundColor = 'red';
      }

      // or if you just want to remove the row you can do this
      // tableBody.removeChild(shipRow);
    })
    
    const shipName = document.createElement('td');
    shipName.innerText = ship.name;
    shipRow.appendChild(shipName);

    const shipSpeed = document.createElement('td');
    shipSpeed.innerText = ship.speed;
    shipRow.appendChild(shipSpeed);

    const shipDescription = document.createElement('td');
    shipDescription.innerText = ship.description;
    shipRow.appendChild(shipDescription);
    return shipRow;
  })
  tableBody.append(...shipElements);
}
populateTableSafe();


function myClick() {
  console.log('clicked!!!!!', event);
}