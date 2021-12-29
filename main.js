var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var last_position_x, last_position_y;

color="black";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);

function  mymousedown(e){

    mouseEvent="mousedown"
    color=document.getElementById("colour").value;
    width_of_line=document.getElementById("width").value;
    radius=document.getElementById("radius").value;

}

canvas.addEventListener("mouseup",mymouseup);
function  mymouseup(e){

    mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave",mymouseleave);
function  mymouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",mymousemove);
function  mymousemove(e){

    current_position_x=e.clientX - canvas.offsetLeft;
current_position_y=e.clientY - canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("Last position of X = "+last_position_x+"and last position of y = "+last_position_y);
    ctx.moveTo(last_position_x, last_position_y);
   
    console.log("Current position of X = "+last_position_x+"and current position of y = "+current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();

}
last_position_x=current_position_x;
last_position_y=current_position_y;

    
}

var width=screen.width;
    var new_width=width - 50;

    var height=screen.height;
    var new_height=height - 300;

    if(width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";


        canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){

    console.log("my_touchstart");
    last_position_of_tx=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_ty=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){

    console.log("my_touchmove");
    current_position_of_tx=e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_ty=e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last_position_of_X="+last_position_of_tx+" , and Y="+last_position_of_ty);
    ctx.moveTo(last_position_of_tx,last_position_of_ty);
    ctx.lineTo(last_position_of_tx,last_position_of_ty);

    console.log("current_position_of_X="+current_position_of_tx+" , and Y="+current_position_of_ty);
    ctx.moveTo(current_position_of_tx,current_position_of_ty);
    ctx.lineTo(current_position_of_tx,current_position_of_ty);
    ctx.stroke();
}





}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


