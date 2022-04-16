canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_img=["mars.jpg","mars2.jpg","mars3.jpg"];
rn=Math.floor(Math.random()*3);
r_w=200;
r_h=100;
r_x=20;
r_y=20;
bg=mars_img[rn];
rv="rover.png";


function add() {
bgimg=new Image();
bgimg.onload=uploadbg;
bgimg.src=bg;

rvimg=new Image();
rvimg.onload=uploadrv;
rvimg.src=rv; 
}

function uploadbg() {
ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);    
}

function uploadrv() {
    ctx.drawImage(rvimg,r_x,r_y,r_w,r_h);    
    }

    window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
 asc=e.keyCode;
 if (asc=="37") {
 left();    
 }  
 
 if (asc=="38") {
    up();    
    }   

    if (asc=="39") {
        right();    
        }   

        if (asc=="40") {
            down();    
            }   
}

function up() {
  if (r_y>=0) {
      r_y=r_y-10;
      console.log("when up arrow is pressed, x= "+r_x+" y= "+r_y);
      uploadbg();
      uploadrv()
  }  
}

function down() {
    if (r_y<=500) {
        r_y=r_y+10;
        console.log("when down arrow is pressed, x= "+r_x+" y= "+r_y);
        uploadbg();
        uploadrv()
    }  
  }

  function left() {
    if (r_x>=0) {
        r_x=r_x-10;
        console.log("when left arrow is pressed, x= "+r_x+" y= "+r_y);
        uploadbg();
        uploadrv()
    }  
  }

  function right() {
    if (r_x<=700) {
        r_x=r_x+10;
        console.log("when right arrow is pressed, x= "+r_x+" y= "+r_y);
        uploadbg();
        uploadrv()
    }  
  }