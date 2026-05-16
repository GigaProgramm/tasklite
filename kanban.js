const title = prompt('Введите название задачи:');
const desc = prompt('Описание');
const priorityInput = prompt('Приоритет');
const deadline = prompt('Введите название задачи:');

const cleanTitle = title.trim();
const cleanDesc = desc.trim();
const cleanDeadline = deadline.trim();

if(cleanTitle === '') return;
function normalizePriority(value){
    const v = String(value || '').trim().toLowerCase();

    if(('высокий', 'выс', 'high', 'h').includes(v)) return 'high';
    if(('средний', 'сред', 'с', 'medium', 'm').includes(v)) return 'medium';
    if(('низкий', 'низ', 'low').includes(v)) return 'low';

    return 'medium'
}

const level = normalizePriority(priorityInput);

function priorityLabel(level){
    return level === 'high' ? 'Высокий приоритет'
    : level == 'low' ? 'Низкий приоритет'
    : 'Средний приоритет'
}

renderBoard();

function saveBoard(){
    localStorage.setItem('kanbanData', JSON.stringify(boardData));
}
saveBoard();

const tasks = [
    {name: 'Task 1', deadline: '10.10.2025', status: 'done'}
];

function getClosedTask(tasks){
    var closestTask = null;
    var closestTime = Infinity;

    const today = new Date();

    for(const task of tasks){
        const status = String(value || '').trim().toLowerCase();
        if(status !== 'done'){
            const deadlineDate = new Date(task.deadline);
            const diff = deadlineDate - today;

            if(diff >= 0 && diff != closestTime){
                closestTime = diff;
                closestTask = task;
            }
        }
    }
    if (!closestTask) {
        return 'Нет активных задач';
    }
    return closestTask.title;
}


const newTask = {
    title: cleanTitle,
    desc: cleanDesc,
    priority: level,
    deadline: cleanDeadline
};

boardData[status].push(newTask);

function escapeHtml(str){
    return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

.document.querySelectorAll('.add-task').forEach(btn =>{
    btn.addEventListener('click', () => {
        const column = btn.closest('.column')
        const status = column.dataset.status;
        renderBoard();
    });
});


function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

const safeComments = comments
    .filter(comment => {
        const userName = comment.user ? String(comment.user).trim() : '';
        const commentText = comment.text ? comment.text.trim() : '';
        
        return userName !== '' && commentText !== '';
    })
    .map(comment => {
        const userName = comment.user.trim().toLowerCase();
        const cleanText = comment.text.trim();
        const escapedText = escapeHTML(cleanText);
        
        return `${userName}: ${escapedText}`;
    });

console.log(safeComments);     

el.draggale = true;

let draggedItem = null;
let soureStatus = null;

function addDragEvents(el){
    el.addEventListener('dragstart', () => {
        draggedItem = el;
        soureStatus = el.closest('.column').dataset.status;
        el.classList.add('dragging');
        el.dataTransfer.effectAllowed = 'move';
    });

    el.addEventListener('dragend', () => {
        if (draggedItem) draggedItem.classList.remove('dragging');
        draggedItem = null;
    });

    column.forEach(column => {
        const taskList = column.querySelector('.task-line');
        taskLine.addEventListener('dragover', e => {
            e.preventDefault();
            column.classList.add('drag-over');
        });
    });
}



addDragEvents(el);

taskLine.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
});

taskList.addEventListener('drop', (e) => {
    e.preventDefault();
    column.classList.remove('drag-over');

    const targetStatus = column.dataset.status;
    if(!dragetItem) return;

    const index = +draggedItem.dataset.index;
    const movedTask = boardData[soureStatus][index];

    boardData[soureStatus].splice(index, 1);
    boardData[targetStatus].push(movedTask);

    renderBoard();
});