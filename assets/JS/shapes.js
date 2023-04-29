// superclass
class Shape {
    constructor(color){
        this.color = color;
    }
   
};

// Circle
class Circle extends Shape{
    createShape(){
        return `< circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}/>`;
    }
};

// Square
class Square extends Shape{
    createShape(){
        return `< rect x="50" height="200" width="200" fill="${this.color}/>`;
    }
};

// Triangle
class Triangle extends Shape{
    createShape(){
        return `< polygon height="100%" width="100%" points="0,200 200,200 100,0" fill="${this.color}/>`;
    }
};

// Shield
class Shield extends Shape{
    createShape(){
        return `<polygon height="100%" width="100%" points="0,0 200,0 200,100 100,200 0,100"  fill="${this.color}"/>`;
    }
};


// export
module.exports = {Circle, Square, Triangle, Shield};
