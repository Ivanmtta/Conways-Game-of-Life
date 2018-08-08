var frame = document.getElementById("frame");
var graphics = frame.getContext("2d");

var scale = 10;
var cols = frame.width / scale + 2;
var rows = frame.height / scale + 2;
var cells = [];

onCreate()

function onCreate(){
	graphics.translate(-scale, -scale);
	for(var i = 0; i < cols; i++){
		cells.push([]);
	}

	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			cells[i][j] = new Cell(i * scale, j * scale, scale, Math.floor(Math.random() * 2) == 1);
		}
	}

	update();
}

function update(){
	draw();
	var tempArray = getStaticArray();
	for(var i = 1; i < cells.length - 1; i++){
		for(var j = 1; j < cells[0].length - 1; j++){
			var aliveNeighbors = 0;
			for(var k = i - 1; k < i + 2; k++){
				for(var l = j - 1; l < j + 2; l++){
					if(tempArray[k][l].alive && !(k === i && j === l)){
						aliveNeighbors ++;
					}
				}
			}
			cells[i][j].update(aliveNeighbors);
		}
	}
}

function draw(){
	graphics.clearRect(0, 0, frame.width, frame.height);
	for(var i = 1; i < cells.length - 1; i++){
		for(var j = 1; j < cells[0].length - 1; j++){
			cells[i][j].draw();
		}
	}
}

function getStaticArray(){
	var array = [];
	for(var i = 0; i < cols; i++){
		array.push([]);
	}

	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
			array[i][j] = cells[i][j];
		}
	}
	return array;
}

setInterval(update, 2000);