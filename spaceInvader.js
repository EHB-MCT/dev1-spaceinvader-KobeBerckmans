"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


context.beginPath();
 context.rect(50, 50, 300, 300);
 context.fill();
 context.stroke();
 

 context.beginPath();
 context.rect(100, 125, 200, 40);
 context.fillStyle = 'lightgreen';
 context.strokeStyle = 'lightgreen';
 context.fill();
 context.stroke();
 

 context.beginPath();
 context.rect(185, 100, 40, 200);
 context.strokeStyle = 'lightgreen';
 context.fillStyle = 'lightgreen';
 context.fill();
 context.stroke();

 
 context.beginPath();
 context.rect(150, 190, 110, 40);
 context.strokeStyle = 'lightgreen';
 context.fillStyle = 'lightgreen';
 context.fill();
 context.stroke();
 

