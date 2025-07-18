export class Project{
    constructor(name){
        this._id = crypto.randomUUID();
        this._name = name;
        this._taskArray = [];
    }

    get id(){
        return this._id;
    }

    set id(value){
        if(!this._id){
            this._id = value;
        }
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value && value !== this_.name){
            this._name = value;
        }
    }

    get taskArray(){
        return this._taskArray;
    }

    set taskArray(value){
        if(value){
            this._taskArray.push(value);
        }
    }

    toJSON(){
        return{
            name: (this._name),
            taskArray: (this._taskArray),
            id: (this._id),
        }
    }
}