let Player2 = function(options){
	options = options || [];

	this.hitAttack = function(sack){
		let hitSac = sack || 10;

		return this.health = this.health - hitSac;
	};

	Player2.prototype.health = 2000;
};

export default Player2;
