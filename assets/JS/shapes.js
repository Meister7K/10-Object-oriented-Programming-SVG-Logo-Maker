// superclass
class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    createText(){
        return `<text font-weight="bold" x="100" y="100" font-size="70" text-anchor="middle" dominant-baseline="central" font-family="monospace" fill="${this.textColor}">${this.text}</text>`
    }
   
};

// Circle
class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor,);
    }
    // extendText = super.createText();
    createShape(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`;
    }
};

// Square
class Square extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor,);
    }
    createShape(){
        return `<rect height="200" width="200" fill="${this.shapeColor}"/>`;
    }
};

// Triangle
class Triangle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor,);
    }
    createShape(){
        return `<polygon height="100%" width="100%" points="0,200 200,200 100,0" fill="${this.shapeColor}"/>`;
    }
};

// Shield
class Shield extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor,);
    }
    createShape(){
        return `<polygon height="100%" width="100%" points="0,0 200,0 200,100 100,200 0,100"  fill="${this.shapeColor}"/>`;
    }
};


// export
module.exports = {Circle, Square, Triangle, Shield};
