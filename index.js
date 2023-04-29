const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const shapes = require('./assets/JS/shapes.js')

// constructor for test
function Index() {};
// Terminal prompt section
const getLogoInfo = () =>{inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your logo acronym in 3 characters or less'
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Please enter your desired text color',
        choices: ['','','',''],
        default: choices[0],
        when: (responses) => responses.text.length > 0 && responses.text.length <= 3
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please enter your desired logo shape',
        choices: ['circle','square','triangle','shield'],
        default: choices[0],
        when: (responses) => responses.textColor 
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Please enter your desired shape color',
        choices: ['','','',''],
        default: choices[0]
    },

]).then((responses) =>{
    return;
})
};
// text(limit char), text color(list), shapes(list),shape color(list), output'logo generated', creates ''.svg file, 300x200 pixel image
getLogoInfo();
// backend creation section

// export
module.exports = Index;