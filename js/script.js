
const form = document.querySelector('.reservation-form form');
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const checkInDate = new Date(checkInInput.value); // Initialize checkInDate
  const checkOutDate = new Date(checkOutInput.value); // Initialize checkOutDate

  // Validate that check-out date is after check-in date
  if (checkInDate >= checkOutDate) {
    alert('Check-out date must be after check-in date.');
    return;
  }
});
