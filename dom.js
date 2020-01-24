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

const container = document.querySelector('#container');

employees.forEach((employee) => {
    const div = document.createElement('div')
    div.innerHTML = employee.name;
    container.appendChild(div);
})