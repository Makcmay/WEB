// main();

// определение кнопки номер и запрос информации

const paginationButtonsEls = document.querySelectorAll('.pagination');
for (let i = 0; i < paginationButtonsEls.length; i++){
    paginationButtonsEls[i].addEventListener('click', async function (event) {
        // console.log(event.target.dataset.page);
        const users = await getUsers(event.target.dataset.page);
        randerUsers(users); 
    });
}
// обработка контента, аватр, имя, фамилия

function randerUsers(users) {
    let content = '';
    for (let i = 0; i< users.length; i++) {
        // console.log(users[i]);
        // console.log(users[i].first_name);
        content = content + `
        <div>
            <img src="${users[i].avatar}" alt="${users[i].first_name} ${users[i].last_name}">
            <p>${users[i].first_name} ${users[i].last_name}</p>
        </div> 
        `;
    }
    document.querySelector('#app').innerHTML = content; 
}

// Получение информации и обработка 

async function getUsers(page) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await response.json();
    return json.data;
}