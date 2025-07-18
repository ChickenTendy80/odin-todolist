export class Task {
    constructor(title, description, dueDate, priority){
        //somesort of ID
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get id(){
        return this._id;
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
}
