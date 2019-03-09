//1. Dibuixem els elements.linea, punt, quad,... formes primitives.
//2. formes primitives les passem a un for/translate
//3. Construim l'objecte. class/function
//4. Passem variables a l'objecte display(variables);
//5. Array d'objectes.

let simbols=[];
let col;
let inc;


function setup(){
	createCanvas(192,157);
	background(255);
}

function draw (){
		
		from=color(240,10,230);
		to=color(240,230,10);
		background (255)
		fill(0,255,0);
		textSize(40);
		textAlign(CENTER);

	
		
		textSize(20);
		fill(255,255,10);
	
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',random(10,130),20);
		fill(255,245,20);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',random(10,130),mouseY);
		fill(255,235,40);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+10,30);
		fill(255,225,50);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+20,35);
		fill(255,215,60);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+30,40);
		fill(255,205,70);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+40,45);
		fill(255,195,80);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+50,50);
		fill(255,185,90);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+60,55);
		fill(255,175,100);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+70,60);
		fill(255,165,110);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',mouseX+mouseY+80,65);
		fill(255,155,120);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',100,70);
		fill(255,145,130);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',100,75);
		fill(255,135,140);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',100,80);
		fill(255,125,150);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',100,85);
		fill(255,115,160);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',100,90);
		fill(255,105,170);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',100,100);
		fill(255,95,180);
		text('t̴̢͠ͅr̴̻͛a̵̝̼̒͘n̶̻̔ͅs̵̖͉̊̏m̶̨̭̽͝ẻ̶͓̝d̴͇̋͜ï̶͍á̸̱̩͆',100,105);	




		
}