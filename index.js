import { Triangle, Circle, Square } from './lib/shapes.js';
import fs from 'fs';
import rd from 'readline';

let string = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">`;

let shape = "triangle";
let shapeColor = "";
let text = "";
let textColor = "";

const readline = rd.createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter a text (up to 3 characters)", name => {

    if(name.length <= 3){
        text = name;
    }

    
    readline.question("Enter a text color (hex, include # at the beginning or color name)", name => {
    
        textColor = name;
        
        readline.question("Pick a shape (1. Triangle, 2. Circle, 3. Square)", name => {

            if(name == 1){
                shape = "triangle"
            }
            else if(name == 2){
                shape = "circle"
            }
            else if(name == 3){
                shape = "square"
            }
            else{
                return;
            }
            
            readline.question("Enter a shape color (hex, include # at the beginning or color name)", async function(name) {
        
                shapeColor = name;
                
                if(shape == "triangle"){
                    let shapeCode =  await  Triangle(shapeColor);
                    string = string + shapeCode;
                }
                else if(shape == "circle"){
                    let shapeCode =  await  Circle(shapeColor);
                    string = string + shapeCode;
                }
                else if(shape == "square"){
                    let shapeCode = await  Square(shapeColor);
                    string = string + shapeCode;
                }
                
                string = string + `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
                
                string = string  +"</svg>";
                
                fs.writeFile('logo.svg', string, function (err) {
                  if (err) throw err;
                });
                
            });
            
        });
        
    });
});






