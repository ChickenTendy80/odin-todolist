export class Task {
    #id = null;

    constructor(title, description, dueDate, priority, completed, projectID){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.projectID = projectID;
    }

    get id(){
        return this.#id;
    }

    set id(value){
        if(value !== this.#id){
            this.#id = value;
        }
    }

    get title(){
        return this.title;
    }

    set title(value){
        if(value){
            this.title = value;
        }
    }

    get description(){
        return this.description;
    }

    set description(value) {
        if(value) {
            this.description = value;
        }
    }

    get dueDate(){
        return this.dueDate;
    }

    set dueDate(value){
        if(value){
            this.dueDate = value;
        }
    }

    get priority(){
        return this.priority;
    }

    set priority(value){
        if(value){
            this.priority = value;
        }
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }
}
