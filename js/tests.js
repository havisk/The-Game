import Player1 from './Bears';
import Player2 from './Greenbay';


(function() {
  'use strict';
  beforeEach(function (){
      window.b = new Player1;
      window.g = new Player2;
    });

  describe ('About Players', function(){



  	describe('Creating Player 1', function(){
  		it('should create an instance of Player 1', function(){
  			expect(b instanceof Player1).to.equal(true);
  		});
  	});
      
  	describe('Creating Player 2', function(){
  		it('should create an instance of Player 2', function(){
  			expect(g instanceof Player2).to.equal(true);
  		});
  	});

    describe('Player 1 Health', function(){
      it('Player 1 should have full health at start', function(){
        expect(b.health).to.equal(2000);
      });
    });
    describe('Player 2 Health', function(){
      it('Player 2 should have full health at start', function(){
        expect(g.health).to.equal(2000);
      });
    });
    describe('Player 1 Health Damaged', function(){
      it('Player1 Health Bar should lower when Hit', function(){
        b.hitAttack();
        expect(b.health).to.be.below(2000);
    });
    });
    describe('Player 2 Health Damaged', function(){
        it('Player2 Health Bar should lower when Hit', function(){
          g.hitAttack();
          expect(g.health).to.be.below(2000);
      });
  });
 });

  

}());