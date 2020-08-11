class Paper{
    constructor(x,y,radius) {
        var options = {
            'restitution' : 0.5,
            'friction' : 0.3,
			'density' : 1.2
			
		}
		
		
        
        this.x = x;
        this.y = y;
		this.radius = radius;
		this.image = loadImage('pictures/paper.png');

        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2, options);
        World.add(world, this.body);
            
    }

    display(){
      var pos = this.body.position;
	 
	 
      push();
     translate(pos.x, pos.y);
     rectMode(CENTER);
     strokeWeight(3);
     stroke("Green");
	 fill(25);
	 imageMode(CENTER);
     image(this.image,0,0,this.radius,this.radius);
     pop();
      }
    }