const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle, Shield} = require('./assets/JS/shapes.js');
const validateColor = require("validate-color").default;

// create SVG class
// function svgMaker() {
//         this.text = text;
//         this.textColor = textColor;
//         this.shape = shape;
//         this.shapeColor = shapeColor;
//         this.textEl = '';
//         this.shapeEl = '';
//     // createSVG(){
//     //     return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 200 200" width="200" height="200">${this.textEl} ${this.shapeEl}</svg>`
//     // }
//     // setText(text, textColor){
//     //     this.textEl = `<text font-weight="bold" x="100" y="100" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text>`

//     // }
//     // setShape(shape, shapeColor){
//     //     this.shapeEl =  new shape.createShape(shapeColor);
//     // }
// }
// Terminal prompt section
getLogoInfo = () =>{inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your logo acronym in 3 characters or less:',
        validate: confirmTextLength
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter your desired text color via color keyword or in hexadecimal:',
        default: 'white',
        validate: validateColor
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please enter your desired logo shape',
        choices: ['Circle','Square','Triangle','Shield'],
        default: [0]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your desired shape color via color keyword or in hexadecimal:',
        default: 'red',
        validate: validateColor
    },

]).then((data) =>{

    console.log(data);
    let shape;
    switch (data.shape){
        case 'Circle':
            shape = new Circle(data.text, data.textColor, data.shapeColor);
            break;
        case 'Square':
            shape = new Square(data.text, data.textColor, data.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(data.text, data.textColor, data.shapeColor);
            break;
        case 'Shield':
            shape = new Shield(data.text, data.textColor, data.shapeColor);
            break;
        default: 
        console.log('switch case err');
    };
    function setSVG(shape){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 200 200" width="200" height="200">${shape.createShape()} ${shape.createText()}</svg>`;
    }
    setSVG(shape);
    fs.writeFile('logo.svg', setSVG(shape), function (err){
        if (err){
            return console.log(err);
        }
        console.log('Logo.svg file created!')
    })
})
};

// Q1 validator
function confirmTextLength(input){
    if((input.trim() != "") && (input.trim().length <= 3)){
        return true;
    }
    return "Please enter an input of 1 to 3 characters"
};

// Q2 validator
// function colorVerify(){

// };
// text(limit char), text color(list), shapes(list),shape color(list), output'logo generated', creates ''.svg file, 200x200 pixel image
getLogoInfo();


