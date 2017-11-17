"use strict";

function decoratorValidateArg(){
    return function ValidateArgument(target, key, description){
        console.log("Decorator done here");
    }
}

function AttachLogger(target){
    target.prototype.hasLogger = true;
}

function ValidateNumberArgument(){
    return function(target, funcName, description){
        let oldTarget = description.value;
        description.value = function Wrapper(arg){
            if(!arg || typeof(arg) !== "number")
                throw new Error(`Invalid arg ${arg} - must be number`);
            oldTarget(arg);
        };
        return description;
    }
}

@AttachLogger
class OperClass
{
    /**
     * @param {number} value любое число
     */
    constructor(value){
        this.acc = value || 0;

        // this.Doop = this.Doop.bind(this);
    }

    @ValidateNumberArgument()
    Add(value){
        // if(!value || typeof(value) !== "number")
        //     throw new Error(`Invalid input arg ${value}`);
        this.acc += value;
    }

    Minus(value){
        if(!value || typeof(value) !== "number")
            throw new Error(`Invalid input arg ${value}`);
        this.acc -= value;
    }

    /**
     * производит произвольную операцию над объектом
     * @param {function} operation 
     * @param {number} value 
     */
    Doop(operation, value){
        if(!value || typeof(value) !== "number")
            throw new Error(`Invalid input arg ${value}`);
        if(!operation || typeof(operation) !== "function")
            throw new Error(`Invalid input operation ${operation}`);

        this.acc = operation(this.acc, value);
    }

    toString(){
        return ""+this.acc;
    }
}

module.exports = OperClass;