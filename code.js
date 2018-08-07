var frame = document.getElementById("frame");
var graphics = frame.getContext("2d");

var scale = 5;
var cols = frame.width / scale;
var rows = frame.height / scale;
var cells = [];

onCreate()

function onCreate(){
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
	graphics.clearRect(0, 0, frame.width, frame.height);
	for(var i = 0; i < cells.length; i++){
		for(var j = 0; j < cells[0].length; j++){
			cells[i][j].draw();
		}
	}
}

setInterval(update, 1000);