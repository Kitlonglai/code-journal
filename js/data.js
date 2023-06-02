/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

const storedData = localStorage.getItem('local-storage');
if (storedData !== null) {
  data = JSON.parse(storedData);
}

window.addEventListener('beforeunload', function () {
  const dataString = JSON.stringify(data);
  localStorage.setItem('local-storage', dataString);
});
