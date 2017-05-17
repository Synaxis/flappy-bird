var bird;
var pipes = [];

function setup(){
  createCanvas(400,600);
  bird = new Bird;
  pipes.push(new Pipe());
}

function draw(){
  background(0);
  bird.update();
  bird.show();

  if (frameCount % 150 == 0){
    pipes.push(new Pipe());
  }

  for (var i = 0; i < pipes.length; i ++){
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)){
      console.log("HIT");
    }

    if (pipes[i].x < -width){  //goes off screen
      pipes.splice(i,1); //deletes element from array
    }
  }
}

function keyPressed(){
  if (key == ' '){
    bird.up();
  }
}
