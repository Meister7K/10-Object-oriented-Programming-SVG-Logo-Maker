const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./assets/JS/shapes.js')

// create SVG class
class SVGMaker {
    constructor(){
        this.text = text;
        this.shape = shape;
    }
    createSVG(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 200 200" width="200" height="200">${this.textEl} ${this.shapeEl}</svg>`
    }
    setText(text, textColor){
        this.textEl = `<text font-weight="bold" x="100" y="100" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text>`

    }
    setShape(shape, shapeColor){
        this.shapeEl = shape.createShape();
    }
}
// Terminal prompt section
const getLogoInfo = () =>{inquirer.prompt([
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
        choices: ['','','',''],
        default: choices[0],
        validate: colorVerify
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please enter your desired logo shape',
        choices: ['Circle','Square','Triangle','Shield'],
        default: choices[0]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your desired shape color',
        choices: ['','','',''],
        validate: colorVerify
    },

]).then((responses) =>{
    return;
})
};

// Q1 validator
function confirmTextLength(){
    if((input.trim() != "") && (input.trim().length <= 3)){
        return true;
    }
    return "Please enter an input of 1 to 3 characters"
};

// Q2 validator
function colorVerify(){

};
// text(limit char), text color(list), shapes(list),shape color(list), output'logo generated', creates ''.svg file, 300x200 pixel image
getLogoInfo();
// backend creation section

