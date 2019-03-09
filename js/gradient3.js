let c=0;
let inc=0.002; 


    function setup() {
      createCanvas(192,157,WEBGL);
      noStroke();
     
      background(0,255,0);
    }
    

    function draw() {
    
     
     translate(-192/2,-157/2);
      gradientRect2(0, 0,255,157,color(40,110,255), color(255,0,0),color(255,0,0),color(90,180,255));
      
         gradientRect1(0, 0,192,157, color(255,0,0,157), color(0,0,255,157),color(255,255,0,157),color(0,0,255,157));
      
    }
    

    function gradientRect1(x, y, w, h, c1, c2,c3,c4) {
       c=c+inc;
      if(c<0){
        inc=0.002;
      }
      if(c>1){
        inc=-0.002;
      }
      cfi=lerpColor(color(0,0,255,180),color(255,0,0,180),c);      
      beginShape();
      fill(c1);
      vertex(x-mouseX,y);
      fill(cfi);
      vertex(x+mouseX,y+h-mouseY);
      fill(c3);
      vertex(x+w+mouseX,y+h);
      fill(c4);
      vertex(x+w*mouseX,y/h-mouseY);
      endShape(); 
    }
    
      function gradientRect2(x, y, w, h, c1, c2,c3,c4) {
         c=c+inc;
      if(c<0){
        inc=0.002;
      }
      if(c>1){
        inc=-0.002;
      }
      cfi=lerpColor(color(0,0,255),color(255,0,0),c);
      cf2=lerpColor(color(255,0,0),color(0,255,255),c);
       
   
      beginShape();
      fill(c1);
      vertex(x,y);
      fill(cf2);
      vertex(x,y+h);
      fill(c3);
      vertex(x+w,y+h);
      fill(cfi);
      vertex(x+w,y);
      endShape();    

    }