"use strict";
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }
    static createSampleTasks() {
        return [
            new Task('Buy Milk', 'Project 1', 'me'),
            new Task('Buy bread', 'opisanie 2', 'Kapka'),
        ];
    }
}
// const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
// task1.toggleStatus();
// console.log(task1.getDetails());
const sampleTasks = Task.createSampleTasks();
sampleTasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=12-simple-task-tracker-access-control.js.map