export class Project{
    #id = null;
    constructor(name){
        this.id = crypto.randomUUID();
        this.name = name;
        this.taskArray = [];
    }

    get id(){
        return this.id;
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
        //value must be an Task
        if(value){
            this.taskArray.push(value);
        }
    }
}