// Менеджер задач

const tasks = [
    {
        _id: "task_1",
        title: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        completed: true
    },
    {
        _id: "task_2",
        title: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        completed: true
    },
    {
        _id: "task_3",
        title: "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        completed: true
    },
    {
        _id: "task_4",
        title: "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        completed: true
    }
];

(function (arrOfTasks) {
    const objectOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
    }, {});


    // UI
    const listContainer = document.querySelector('.task-list-section .list-group');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];

    // Events
    form.addEventListener('submit', onFormSubmitHandler);

    renderAllTask(arrOfTasks);

    function renderAllTask(tasksList) {
        if(!tasksList) {
            console.error('Нет задач!');
            return;
        }

        const fragment = document.createDocumentFragment();
        Object.values(tasksList).forEach(task => {
            const li = listItemTemplate(task);
            listContainer.appendChild(li);
        });

    }

    function listItemTemplate({_id, title, body}) {
        const li = document.createElement('li');
        li.classList.add(
            'list-group-item',
            'd-flex',
            'align-items-center',
            'flex-wrap'
        );

        const span = document.createElement('span');
        span.textContent = title;
        span.style.fontWeight = 'bold';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto');

        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('w-100', 'mt-2');

        li.appendChild(span);
        li.appendChild(deleteBtn);
        li.appendChild(article);

        return li;

    }

    function onFormSubmitHandler(e) {
        e.preventDefault();
        const titleValue = inputTitle.value;
        const bodyValue = inputBody.value;
        if(!titleValue || !bodyValue) {
            alert('Ну ты и придумал!');
            return;
        }
        const task = createeNewTask(titleValue, bodyValue);
        const listItem = listItemTemplate(task);
        listContainer.insertAdjacentElement('afterbegin', listItem);
                form.reset();
    }

    function createeNewTask(title, body) {
        const newTask = {
            title,
            body,
            completed: false,
            _id: `task_${Math.random()}`
        };
        objectOfTasks[newTask._id] = newTask;
        return {...newTask};
    }




})(tasks);

