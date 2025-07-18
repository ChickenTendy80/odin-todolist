export class Project{
    #id = null;

    constructor(name){
        this.id = crypto.randomUUID();
        this.name = name;
        this.taskArray = [];
    }

    get id(){
        return this.#id;
    }

    set id(value){
        if(!this.#id){
            this.#id = value;
        }
    }

    get name(){
        return this.name;
    }

    set name(value){
        if(value){
            this.name = value;
        }
    }

    get taskArray(){
        return this.taskArray;
    }

    set taskArray(value){
        if(value){
            this.taskArray.push(value);
        }
    }

    toJSON(){
        return{
            name: (this.name),
            taskArray: (this.taskArray),
            id: (this.id),
        }
    }
}