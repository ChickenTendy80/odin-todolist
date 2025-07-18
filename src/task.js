export class Task {
    constructor(title, description, dueDate, priority, completed, projectID){
        this._id = crypto.randomUUID();
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._completed = completed;
        this._projectID = projectID;
    }

    get id(){
        return this._id;
    }

    set id(value){
        if(value !== this._id){
            this._id = value;
        }
    }

    get title(){
        return this._title;
    }

    set title(value){
        if(value){
            this._title = value;
        }
    }

    get description(){
        return this._description;
    }

    set description(value) {
        if(value) {
            this._description = value;
        }
    }

    get dueDate(){
        return this._dueDate;
    }

    set dueDate(value){
        if(value){
            this._dueDate = value;
        }
    }

    get priority(){
        return this._priority;
    }

    set priority(value){
        if(value){
            this._priority = value;
        }
    }

    toggleCompleted(){
        this._completed = !this._completed;
    }
}
