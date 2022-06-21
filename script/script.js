let lists = JSON.parse(localStorage.getItem('records')) ?
    JSON.parse(localStorage.getItem('records')) : [{
        name: 'Philani',
        rgb: '',

    }];

function addData() {
    // e.preventDefault();
    lists.push({
        name: document.getElementById('name').value,
        rgb: document.getElementById('color').value,

    });
    // Save data to a localstorage
    localStorage.setItem('records', JSON.stringify(lists));
}
document.querySelector('#addRecord').addEventListener('click', addData);
// Displaying data
(function loadData() {
    console.table(lists);
})();