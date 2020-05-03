setupRooms(document.querySelector('.rooms'));

function setupRooms (roomsSection) {
  const rooms = roomsSection.querySelectorAll('.room');
  const buttons = roomsSection.querySelectorAll('.rooms__selection-button');

  function showRoom (index) {
    rooms.forEach((room) => {
      room.classList.remove('room--visible');
    });
    rooms[index].classList.add('room--visible');
  }

  showRoom(0);

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => showRoom(index));
  });
}
