class Block{
    constructor(x, y, width, height) {
      this.visiblity=255
     var options={
restitutuion=0.4,
friction=0.0,
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World(world,this.body)
    }
    display(){
      if(this.body.speed<3){
      super.display()
      
      
      }
      else {
      World . remove(world,this.body)
      push();
      this.visiblity=this.visiblity-5
      tint(255,this.visiblity)
      
      pop();
      }
    }
  }