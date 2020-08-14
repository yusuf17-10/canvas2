var drawing=[];
var beginShape;
var Canvas;
var database;
var currentPath=[];

var isDrawing=false;
function setup() {
Canvas=createCanvas(400, 400);
  Canvas.mousePressed(startPath);
 // Canvas.mouseReleased(endPath);

  var saveButton = select ('#saveButton');
  saveButton.mousePressed(saveDrawing);

  var clearButton = select ('#saveButton');
  clearButton.mousePressed(clearDrawing);
}

function startPath(){
  isDrawing=true;
  currentPath=[];
  drawing.push(currentPath);
  

}

/*function endPath(){
  isDrawing=false;
}*/


function draw() {
  background(0);
  
  if(isDrawing){
      var point ={
        x: mouseX,
        y: mouseY
  }
}
      
      stroke(255);
      strokeWeight(4);
      noFill();
      for (var i = 0; i<drawing.length;i++){
        var path =drawing[i];
        beginShape();
        for (var j = 0; j<path.length;j++){
        vertex(path[j].x,path[j].y)
      }
      endShape();
    }
      

}


function saveDrawing(){
  var ref = database.ref('drawings');
  var data={
    name:"yusuf",
    drawing:drawing
  }
  ref.push(data);
}

function clearDrawing(){
  drawing=[];
}
