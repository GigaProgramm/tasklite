/*let a = 10;
let b = 5;

let sum = a + b;
let dif = a - b;

console.log(sum);
console.log(dif);*/

/*===== БАЗА: контейнеры, типографика =====*/

function print(input){
    console.log(input);
}

function HelloWorld(input){
    if(input == "print"){
        print("Hello, World!");
    }
}

function sum(a, b){
    return a + b;
}

console.log(sum(7, 3));
console.log(sum(10, 5));

function isTaskDone(status){
    return status === "выполнена";
}

console.log(isTaskDone("выполнена"));
console.log(isTaskDone(""));

function taskSummar(total, done){
    let active = total - done;
    return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummar(5, 3));
console.log(10, 4);


// =======Урок: операторы и условия======= //


let litle = "";
if(title === ""){
    console.log("Название задачи не указано");
} else {
    console.log("Задача:", title);
}

//let tasks = 5;
if(tasks == 0) {
    console.log("Список пуст");
} else if(tasks <= 3) {
    console.log("Немного задач");
} else {
    console.log("Много задач")
}

function filterByStatus(tasks, status){
    return tasks.filter(function(task){
        return task.status === status;
    })

}

let task1 = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 1, title: "Позвонить врачу", status: "выполнена"},
    {id: 1, title: "Сделать уроки", status: "активна"}
];

console.log(filterByStatus(task1, "активна"));

function sortByTitleAsc(task){
    tasks.sort(function(a, b){
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
    });
    return tasks;
}

let task2 = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 1, title: "Позвонить врачу", status: "активна"},
    {id: 1, title: "Сделать уроки", status: "активна"}
];


console.log(sortByTitleAsc(task2));

function searchByTitle(task, query){
    const q = query.toLowerCase();
    return task.filter(function (task){
        return task.title.toLowerCase().indexOf(q) != -1;
    });
}


task3 = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 1, title: "Позвонить врачу", status: "активна"},
    {id: 1, title: "Сделать уроки", status: "активна"}
];

console.log(searchByTitle(task3, "куп"));

function removeTaskById(tasks, id){
    return task.filter(function (task){
        return task.id !== id;
    });
}

task4 = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 1, title: "Позвонить врачу", status: "активна"},
    {id: 1, title: "Сделать уроки", status: "активна"}
];


console.log(removeTaskById(task4, 2));

function toggleTaskStatus(tasks, id){
    return tasks.map(function (task){
        if(task.id){
            const newStatus = task.staus === "выполнена" ? "активна" : "выполнена";

            return{
                id: task.id,
                title: task.title,
                status: newStatus,
            };
        }
        return task;
    });
}

task5 = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 1, title: "Позвонить врачу", status: "выполнена"}
];


console.log(toggleTaskStatus(task5, 1));


/*let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 1, title: "Сходить в спортзал", status: "активна"},
    {id: 1, title: "Позвонить другу", status: "активна"},
    {id: 1, title: "Прочитать книгу", status: "активна"},
    {id: 1, title: "Сделать проект", status: "активна"}
];*/

let i = 0;
let done = 0;
let total = 0;
let active = 0;

while (i < tasks.length){
    total++;
    if(tasks.status === "выполненна"){
        done++;
    } else {
        active++;
    }
    i++;
}

console.log("Всего", total, "| Выплнено: ", done, "| Активных: ", active);

for (let task of tasks){
    if(task.status === "активна"){
        console.log("Активная задача:", task.title);
    }
}

task.forEach(element => {
    console.log("#" + task.id + " " + task.title + " (" + task.status + ") ");
});

let searchTitle = "Купить молоко";
let found = 0;

for(let task of tasks){
    if(task.title === searchTitle){
        found = task;
        break;
    }
}
if(found){
    console.log("Найдена задача:", found);
} else {
    console.log("Задача найдена");
}

let activeTasks = [];
for(let task of tasks){
    if(task.status === "активна"){
        activeTasks.push(task);
    }
}

console.log("Активные задачи:", activeTasks);

function renderTask(){
    container.innerHTML = '';



    if (task.done) item.classList.add('task--done');
    .task--done .task.title{
        text-decoration: line-through;
        color: #8a8398;
        opacity: 0.7;

        return task;
    }

    const editBtn = document.createElement('button')
    editBtn.addEventListener('click' () => {
        const newTask1 = prompt('', task.text);
        if (newText && newText.trim !== ''){
            task.text = newText.trim();
            renderTask();
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', () => {
        const index = task.indexOf(task);
        task.splice(index, 1);
        renderTask();
    });

    item.addEventListener('click', () => {
        task.done = !task.done;
        renderTask();
    });

    
    const input = document.querySelector('.form-add_input');
    const addButton = document.querySelector('.form-add_button');
    const container = document.querySelector('.task');

    //создаём обёртку карточки 
    const task = document.createElement('div');
    task.classList.add('task');

    /* добавить в карточку внутренний контейнер div.task__content, который будет хранить заголовок и метаинформацию.*/
    const content = document.createElement('div');
    content.classList.add('task_content');
    task.append(content);

    /*внутри контейнера task__content создать элементы div.task__title и div.task__meta, затем вставить их внутрь контейнера.*/ 
    const title = document.createElement('div');
    const meta = document.createElement('div');
    title.classList.add('task_title');
    title.textContent = taskData.text;

    meta.classList.add('task_meta');
    content.append(title, meta);
    meta.textContent = taskData.text;

    /* добавить в карточку правую часть — div.task__actions, предназначенную для кнопок управления задачей.*/
    const actions = document.createElement('div');
    actions.classList.add('task_actions');
    task.append(actions);

    //создание кнопок действий 
    const editBtn = document.createElement('button');
    editBtn.classList.add('task_actions', 'task_action--edit');
    editBtn.title = 'Редактировать';
    editBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" fill="none" stroke="#6f64a3" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>`;

    const deleteBtn1 = document.createElement('button');
    deleteBtn1.classList.add('task_actions', 'task_action--delete');
    deleteBtn1.title = 'Удалить';
    deleteBtn1.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" fill="none" stroke="#cb6e6e" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>`
        ;
    actions.append(editBtn, deleteBtn);
    task.append(content, actions);

    return task;
}

const task5 = renderTask({
    text: 'Сходить на прогулку',
    date: ' Сегодня, 18.00'
});
const task6 = renderTask({
    text: 'Позвонит врачу',
    date: ' Сегодня, 19.30'
});
container.append(task5, task6);

const searchInput = document.querySelector('.toolbar_search');
const footer = document.querySelector('.footer_controls');
const sortSelect = document.querySelector('.toolbar_sort');

const tasks = [
    {text: 'Купить прдукты', done: false, date: 'Сегодня 12.00'},
    {text: 'Сделать домашку', done: false, date: 'Сегодня 18.00'}
]

item.addEventListener('click', (e) => {
    //если клик по кнопке действий (или её иконке) ничего не делаем
    if(e.target.closest('.task_action')) return;
    // иначе переключаем статус (выполнено/невыполнено)
    task.done = !task.done;
    saveTask();
    renderTask();
})

function renderAll(){
    //Здесь будет очистка и добавление карточек
    document.querySelector('.task').forEach(t => t.remove());
        //вставка будет на следующем шаге
    task.forEach(task => {
        const card = renderTask(task);
        footer.before(card);
    });
    renderAll();
}


const form = document.querySelector('.form-add')
let task_new = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = InputDeviceInfo.value.trim();
    if (text === '') return;
});

const newTask = {
    id: task_new.length + 1,
    text: text,
    done: false,
    date: "11.11.2026"
};
task.push(newTask);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
});

function addTask(){
    const text = input.value.trim();
    //проверка на пустое поле
    if (text === '' || text.length() < 3) {
        input.classList.add('input--error');
        return;
    }
    // ошибка елсли текст некоректный 
    input.classList.remove('input--error');
    // создание новой задачи
    const newTask = {
        id: task.length() + 1,
        text,
        done: false,
        date: 'создано сейчас'
    };
    saveTask();
    task.push(newTask);
    input.value = '';
    renderAll();
}

let sortOrder = 'new';

const sortSelect1 = document.querySelector('.toolbar_sort');

sortSelect1.addEventListener('change', () => {
    const val = sortSelect1.value();
    if(val.includes('новые'))sortOrder = 'new';
    else if(val.includes('старые')) sortOrder = 'old';
    else if(val.includes('A-Z')) sortOreder = 'az'
    else if(val.includes('Z-A')) sortOrder = 'za';
    renderAll();
});

const sortedTask = [task].sort((a, b) => {
    if(sortOrder === 'new') return b.id - a.id;
    if(sortOrder === 'old') return a.id - b.id;
    if(sortOrder === 'az') return a.text > b.text ? 1 : -1;
    if(sortOrder === 'za') return a.text < b.text ? 1 : -1;
    return a.id - b.id;
});

sortedTask.forEach(task => footer.before(renderTask(task)));

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateCounters(){
    const total = tasks.length;
    const active = tasks.filter(t => !t.done).length;
    const done = task.filter(t => done).length;

    clearButton.disabled = task.every(task => task.done);
    const counters = docuents.querySelector('footer-control_counters');
    if(counters){
        counter.innerHTML = `
        <span>"Всего: "${total}</span>
        <span>"Активных: "${active}</span>
        <span>"Выполенных: "${done}</span>
        `;
    }
    filtered.forEach(task => footer.before(renderTask(task)));
    updateCounters();
}

