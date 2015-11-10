let Player1 = function(options){
	options = options || [];

	this.hitAttack = function(sack){
		let hitSac = sack || 10;
		return this.health = this.health - hitSac;
	};

	Player1.prototype.health = 2000;

};

export default Player1;