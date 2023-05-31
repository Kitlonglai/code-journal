const photoInput = document.querySelector('#photourl');
const form = document.querySelector('form');
const imageDisplay = document.querySelector('.display');

photoInput.addEventListener('input', () => {
  imageDisplay.setAttribute('src', photoInput.value);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formInput = {};
  formInput.title = document.querySelector('#title').value;
  formInput.photoUrl = document.querySelector('#photourl').value;
  formInput.notes = document.querySelector('#notes').value;
  formInput.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(formInput);
  photoInput.setAttribute('src', 'default');
  form.reset();
});
