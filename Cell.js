function Cell(x, y, size, alive){
	this.x = x;
	this.y = y;
	this.size = size;
	this.alive = alive;

	this.update = function(aliveNeighbors){
		if(this.alive && (aliveNeighbors < 2 || aliveNeighbors > 3)){
			this.alive = false;
		}
		else if(!this.alive && (aliveNeighbors == 3)){
			this.alive = true;
		}
	}

	this.draw = function(){
		graphics.beginPath();
		graphics.rect(this.x, this.y, this.size, this.size);
		if(this.alive){
			graphics.fillStyle = "#FFFFFF";
		}
		else{
			graphics.fillStyle = "#000000";
		}
		graphics.lineWidth = this.size / 10;
		graphics.fill();
		graphics.stroke();
		graphics.closePath();
	}
}