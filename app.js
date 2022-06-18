

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbUsers')) ?? [];
const setLocalStorage = (dbUsers) => localStorage.setItem('dbUsers', JSON.stringify(dbUsers));


const deleteUser = (index) => {
    const dbUsers = readUser();
    dbUsers.splice(index, 1);
    setLocalStorage(dbUsers);
}

const updateUser = (index, user) => {
    const dbUsers = readUser();
    dbUsers[index] = user;
    setLocalStorage(dbUsers);

}

const readUser = () => getLocalStorage();

const createUser = (user) => {
    const dbUsers = getLocalStorage();
    dbUsers.push(user);
    setLocalStorage(dbUsers);
}


const isFieldsValid = () => {
    return document.querySelector('#form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.space');
    fields.forEach(field => field.value = '')
}

const saveUser = () => {
    if (isFieldsValid()) {
        const user = {
            name: document.querySelector('.name').value,
            email: document.querySelector('.email').value,
            phone: document.querySelector('.phone').value,
            city: document.querySelector('.city').value
        }
        const index = document.querySelector('.name').dataset.index;
        if(index == 'new') {
            createUser(user);
            updateTable();
            clearFields();
        }else{
            updateUser(index, user);
            updateTable();
            clearFields();
        }
        
    }
}


const createRow = (user, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.city}</td>
                    <td>
                        <button type="button" id="edit-${index}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button type="button" id="delete-${index}" class="btn btn-danger">Delete</button>
                    </td>
    `
    document.querySelector('#tableUser').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableUser>tr');
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    clearTable()
    const dbUsers = readUser();
    dbUsers.forEach(createRow)
}


const fillFields = (user) => {
    document.querySelector('.name').value = user.name
    document.querySelector('.email').value = user.email
    document.querySelector('.phone').value = user.phone
    document.querySelector('.city').value = user.city
    document.querySelector('.name').dataset.index = user.index
}

const editUser = (index) => {
    const user = readUser()[index];
    user.index = index
    fillFields(user)
}

const editDelete = (e) => {
    if (e.target.type == 'button') {

        const [option, index] = e.target.id.split('-');

        if (option == 'edit') {
            editUser(index)
        }else {
            const user = readUser()[index]
            const response = confirm (`Are you sure you want to delete ${user.name}?`)
            if (response){
                deleteUser(index);
                updateTable();
            }
            
        }
        
    }
}

const findUser = (name) => {
    const tabela = document.querySelector('#tableUser')
    let usuario = Array.from(tabela.children)
    let nomeUns = usuario.filter(nome => !nome.innerHTML.toLowerCase().includes(name))
    let nomeSea = usuario.filter(nome => nome.innerHTML.toLowerCase().includes(name))
    nomeUns.forEach(nome => {
        nome.setAttribute('class', 'hidden')
    });
    nomeSea.forEach(nome => {
        nome.removeAttribute('class', 'hidden')
    });
    
}
const searchUser = (e) => {
    let name = e.target.value.toLowerCase();
    findUser(name);
}

const setNew = () => {
    document.querySelector('.name').dataset.index = 'new'
}

updateTable();

document.querySelector('#addNewUser').addEventListener('click', setNew);
document.querySelector('#Save').addEventListener('click', saveUser);
document.querySelector('#Cancel').addEventListener('click', clearFields);
document.querySelector('.xmodal').addEventListener('click', clearFields);
document.querySelector('#tableUser').addEventListener('click', editDelete);
document.querySelector('#searchInput').addEventListener('input', searchUser);