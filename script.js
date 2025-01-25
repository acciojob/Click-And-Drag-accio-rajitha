// Your code here.
// Select all the items (cubes)
const items = document.querySelectorAll('.item');

// Variable to keep track of the selected cube and its initial position
let selectedItem = null;
let offsetX = 0;
let offsetY = 0;

// Function to handle the mouse down event (when the user clicks on a cube)
items.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    selectedItem = item;
    offsetX = e.clientX - item.getBoundingClientRect().left;
    offsetY = e.clientY - item.getBoundingClientRect().top;

    // Add event listeners for mousemove and mouseup
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});

// Function to handle the mouse move event (when the user moves the mouse while holding the cube)
function onMouseMove(e) {
  if (selectedItem) {
    // Calculate the new position of the cube based on mouse movement
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Set the new position while keeping the cube within the defined area
    selectedItem.style.position = 'absolute';
    selectedItem.style.left = `${Math.max(0, Math.min(newX, document.body.offsetWidth - selectedItem.offsetWidth))}px`;
    selectedItem.style.top = `${Math.max(0, Math.min(newY, document.body.offsetHeight - selectedItem.offsetHeight))}px`;
  }
}

// Function to handle the mouse up event (when the user releases the mouse button)
function onMouseUp() {
  // Remove the event listeners for mousemove and mouseup
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);

  // Reset the selected item
  selectedItem = null;
}
