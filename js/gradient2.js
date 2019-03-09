    function setup() {
      createCanvas(192,157,WEBGL);
      noStroke();
      background(0);    
      }

    function draw() { 
      translate(-192/2,-157/2);       
      gradientRect3(0,0,192,157,color(0,0,255,210), color(0,255,255,210),color(255,0,0,200),color(255,70,0,210));    
      }

   

     function gradientRect3(x, y, w, h, c1, c2,c3,c4) {
       beginShape();
      fill(c1);
      vertex(x+mouseY,y);
      fill(c2);
      vertex(x,y+h+mouseX);
      fill(c3);
      vertex(x+w-mouseX,y+h+mouseY);
      fill(c4);
      vertex(x+w/mouseX,y);
      endShape(); 
     }