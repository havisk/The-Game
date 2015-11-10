import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import Player1 from "./Bears";
import Player2 from "./Greenbay";



//players

let bear = new Player1();
let green = new Player2();

let p1health = $('.p1health');
let p2health = $('.p2health');

let p1attack = $('#attack1');
let p2attack = $('#attack2');

let gameOver1 = $('.gameover1');
let gameOver2 = $('.gameover2')


p1health.text(bear.health);
p2health.text(green.health);


p1attack.on('click', function(){

  let num = _.random(0, 1000);
  green.hitAttack(num);

  if(green.health <= 0) {
    p2health.text('Bears Crush the Packers').addClass('downpacker');
  }else{
    p2health.text(green.health);
  }

});

p2attack.on('click', function(){

  let num = _.random(0, 1000);
  bear.hitAttack(num);

  if(bear.health <= 0) {
    p1health.text('Packers got lucky').addClass('downbear');
    p1health.text(bear.health);
  }
});



// var canvas;
// var ctx;  // the "context" of the canvas that will be used (2D or 3D)
// var dx = 50; // the rate of change (speed) horizontal object
// var x = 30; // horizontal position
// var y = 0; // vertical position
// var WIDTH = 1000; //width of the rectangular area
// var HEIGHT = 340;// height of the rectangular area
// var tile1 = new Image (); // Image to be loaded
// var posicao = 0; // display the current position 
// var NUM_POSICOES = 6; // Number of images