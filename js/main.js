const photoInput = document.querySelector('#photourl');
const form = document.querySelector('form');
const imageDisplay = document.querySelector('.display');
const img = document.querySelector('img');
photoInput.addEventListener('input', () => {
  imageDisplay.setAttribute('src', photoInput.value);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formInput = {
    title: event.target.value,
    photoUrl: event.target.value,
    notes: event.target.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(formInput);
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
});
