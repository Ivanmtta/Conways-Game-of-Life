function Cell(x, y, size, alive){
	this.x = x;
	this.y = y;
	this.size = size;
	this.alive = alive;

	this.draw = function(){
		if(this.alive){
			graphics.fillStyle = "#FFFFFF";
		}
		else{
			graphics.fillStyle = "#000000";
		}
		graphics.fillRect(this.x, this.y, this.size, this.size);
	}
}