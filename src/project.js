export class Project{
    constructor(name){
        //some sort of unqiue ID
        this.name = name;
        this.taskArray = [];
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