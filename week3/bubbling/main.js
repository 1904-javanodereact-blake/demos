
const divs = document.getElementsByTagName('div');
for(const div of divs) {
  div.addEventListener('click', (event) => {
    console.log(`clicked on element with id: ${div.id}`);
    event.stopPropagation(); // prevent propagation if you wish
  }
  // ,true // this line would toggle it to do capturing
  );
}