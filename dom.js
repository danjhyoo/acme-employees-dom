const employees = [
    { id: 1, name: 'moe' },
    { id: 2, name: 'larry' },
    { id: 4, name: 'shep' },
    { id: 3, name: 'curly' },
    { id: 5, name: 'groucho' },
    { id: 6, name: 'harpo' },
    { id: 8, name: 'shep Jr.' },
    { id: 99, name: 'lucy' }
];

const list = document.querySelector('#employees');


// list.addEventListener('click', (ev) => {
//     // console.log(ev.target)
//     if (ev.target.tagName === 'LI' && ev.target.style.backgroundColor === 'lightskyblue') {
//         ev.target.style.backgroundColor = 'salmon'
//     } else {
//         ev.target.style.backgroundColor = 'lightskyblue'
//     }
//     // if(ev.target.style.backgroundColor = 'salmon') {
//     //     ev.target.style.backgroundColor =
//     // }
// })
let count = 0

list.addEventListener('click', (ev) => {
    const target = ev.target;
    if (target.tagName === 'LI') {
        const idx = [...list.children].indexOf(target);
        const numOfFavorites = employees.filter(employee => {
            return employee.favorite;
        }).length

        if (!target.classList.contains('favorite') && numOfFavorites === 3) {
            alert('only 3 favorites!');

        } else {
            employees[idx].favorite = !employees[idx].favorite;
        }

        // if (employees[idx].favorite) {
        //     count--
        //     employees[idx].favorite = !employees[idx].favorite;
        // } else if (count < 3) {
        //     count++
        //     employees[idx].favorite = !employees[idx].favorite;
        // } else {
        //     alert('only 3 favorites');
        // }

    }
    render();
})





const render = () => {
    const html = employees.map(employee => {
        return `<li data-id='${employee.id}' ${employee.favorite ? "class='favorite'" : ''}>${employee.name}</li>`;
    }).join('');

    list.innerHTML = html;
}



render();