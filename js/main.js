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
  toggleNoEntries();
});

function renderEntry(entry) {
  const li = document.createElement('li');
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  h1.textContent = entry.title;
  p1.textContent = entry.notes;
  p2.textContent = entry.entryId;
  li.appendChild(h1);
  li.appendChild(p1);
  li.appendChild(p2);
  return li;
}

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');
  const noEntries = document.querySelector('#no-entries');
  for (let i = 0; i < data.entries.length; i++) {
    const domEntry = renderEntry(data.entries[i]);
    ul.appendChild(domEntry);
  }
  if (data.entries.length === 0) {
    noEntries.classList.remove('hidden');
  } else if (noEntries) {
    noEntries.classList.add('hidden');
  }
});

function toggleNoEntries() {
  const noEntries = document.querySelector('#no-entries');
  if (noEntries.classList.contains('hidden')) {
    noEntries.classList.remove('hidden');
  } else {
    noEntries.classList.add('hidden');
  }
}
