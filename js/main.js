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
  const newEntryObject = renderEntry(formInput);
  const ul = document.querySelector('ul');
  ul.prepend(newEntryObject);
  viewSwap('entries');
  if (data.entries.length > 0) {
    toggleNoEntries();
  }
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
  viewSwap(data.view);
  for (let i = 0; i < data.entries.length; i++) {
    const domEntry = renderEntry(data.entries[i]);
    ul.appendChild(domEntry);
  }
  if (data.entries.length === 0) {
    toggleNoEntries();
  }
});

function toggleNoEntries() {
  const noEntries = document.getElementbyId('no-entries');
  if (noEntries.classList.contains('hidden')) {
    noEntries.classList.remove('hidden');
  } else {
    noEntries.classList.add('hidden');
  }
}

function viewSwap(viewName) {
  viewName = data.view;
  const entryFormView = document.getElementById('entry-form');
  const entriesView = document.getElementById('entries');
  if (viewName === 'entry-form') {
    entriesView.classList.add('hidden');
    entryFormView.classList.remove('hidden');
  } else if (viewName === 'entries') {
    entryFormView.classList.add('hidden');
    entriesView.classList.remove('hidden');
  }
}

const viewEntries = document.getElementbyId('view-entries');
viewEntries.addEventListener('click', function (event) {
  event.preventDefault();
  viewSwap('entries');
});

const newEntry = document.getElementbyId('new-entry');
newEntry.addEventListener('click', function (event) {
  event.preventDefault();
  viewSwap('entry-form');
});
