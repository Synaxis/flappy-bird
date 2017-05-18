var bird;
var pipes = [];
var count = 0;
var flag = true;
var pipe_flag = true;

function setup(){
  createCanvas(500,600);
  bird = new Bird;
  pipes.push(new Pipe());
}

function draw(){
  background(176,224,230);
  //resetSketch();
  bird.update();
  bird.show();
  fill(0);
  textSize(32);
  str = "Streak: " + count;
  text(str, width/3, height/5);

  if (frameCount % 150 == 0){
    pipes.push(new Pipe());
  }
  for (var i = 0; i < pipes.length; i ++){
    pipes[i].show();
    if (pipe_flag == true){
      pipes[i].update();
    }
    if (flag == true && pipes[i].x < (-width + 200)){
      flag = false;
      count += 1;
      str = "Streak: " + count;
    }

    if (pipes[i].hits(bird)){
      //console.log("HIT");
      str = "Streak: " + count;
      startOver();
      pipe_flag = false;
    }

    if (pipes[i].x < -width){  //goes off screen
      pipes.splice(i,1); //deletes element from array
      flag = true;
    }
  }
}

function startOver(){
  var button = createButton("Play Again?");
  button.position(width/2, height/2);
  button.mousePressed(reset);
}

function reset(){
  window.location.reload()
}

function touchStarted(){
  bird.up();
  return false;
}

function keyPressed(){
  if (key == ' ' && pipe_flag == true){
    bird.up();
  }
}
