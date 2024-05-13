class Task {
    constructor(id, task, done = false) {
        this.id = id
        this.task = task
        this.done = done
    }
}

class TodoList {
    constructor() {
        this.entry = []
    }

    add = (id, task) => {
        if (this.entry.some((item) => item.id === id)) {
            console.log('in if')
            throw new Error("There is already a todo item with this id.")
        }

        this.entry.push({ id, task, done: false });
    }
}

const todoList = new TodoList();

todoList.add("groceries", "Buy groceries");

todoList.add("groceries", "Buy groceries2");