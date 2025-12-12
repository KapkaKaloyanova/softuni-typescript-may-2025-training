class Task {
    public title: string;
    public description: string;
    public completed: boolean = false;
    private _createdBy: string;

    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy(): string {
        return this._createdBy
    }

    public toggleStatus(): void {
        this.completed = !this.completed
    }

    public getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`
    }

    public static createSampleTasks(): Task[]{
        return [
            new Task('Buy Milk', 'Project 1', 'me'),
            new Task('Buy bread', 'opisanie 2', 'Kapka'),
        ]
    }
}

// const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
// task1.toggleStatus();
// console.log(task1.getDetails());

const sampleTasks = Task.createSampleTasks();
sampleTasks.forEach(task => console.log(task.getDetails()));