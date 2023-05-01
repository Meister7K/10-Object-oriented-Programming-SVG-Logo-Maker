const {Circle,Square,Triangle,Shield} = require('./shapes');

describe('Shape validator', () => {
    describe('Circle',
    () =>{
        it('should create a svg file of a circle', () =>{
            const shape = new Circle();
            let color = 'blue';
            shape.shapeColor = color;
            expect(shape.createShape()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`)
        })
    })
    describe('Square',
    () =>{
        it('should create a svg file of a square', () =>{
            const shape = new Square();
            let color = 'green';
            shape.shapeColor = color;
            expect(shape.createShape()).toEqual(`<rect height="200" width="200" fill="${color}"/>`)
        })
    })
    describe('Triangle',
    () =>{
        it('should create a svg file of a triangle', () =>{
            const shape = new Triangle();
            let color = 'red';
            shape.shapeColor = color;
            expect(shape.createShape()).toEqual(`<polygon height="100%" width="100%" points="0,200 200,200 100,0" fill="${color}"/>`)
        })
    })
    describe('Shield',
    () =>{
        it('should create a svg file of a shield', () =>{
            const shape = new Shield();
            let color = 'orange';
            shape.shapeColor = color;
            expect(shape.createShape()).toEqual(`<polygon height="100%" width="100%" points="0,0 200,0 200,100 100,200 0,100"  fill="${color}"/>`)
        })
    })
});  