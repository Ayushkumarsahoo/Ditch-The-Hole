
const userId = document.getElementById('userId');
const name = document.getElementById('name');
const loc = document.getElementById('location');
const pqi = document.getElementById('pqi');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn'); 

const database=firebase.database();
const rootRef=database.ref('users');

addBtn.addEventListener('click',(e)=> {
	e.preventDefault();
	rootRef.child(userId.value).set({
		Name: name.value,
		Location: loc.value,
		PQI:pqi.value

			});
});


removeBtn.addEventListener('click', e => {
    e.preventDefault();
    rootRef.child(userId.value).remove()
    .then(()=> { console.log('User Deleted !'); })
    .catch(error => { console.error(error); });
});