// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let m=3,x = 0, y = 0, dx = 5, dy = 5, r = 15, color = "red";
let m2=10,x2 = canvas.width, y2 = 0, dx2 = -5, dy2 = 5, r2 = 30, color2 = "blue";
//可用陣列：let m=[5,10,15] , x=[0,150,300] , y=[0,150,300] , dx=[5,-5,5] , dy=[5,5,-5], r=[15,30,5], coler=["red","blue","green"]
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x + dx;
    y = y + dy;
    x2 = x2 + dx2;
    y2 = y2 + dy2;
    if (x + r > canvas.width || x - r < 0)
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
  if(x<0 || x >canvas.width){
    dx = -dx;
  }
  if(y<0 || y >canvas.height){
    dy = -dy;
  }
  if(x2<0 || x2 >canvas.width){
    dx2 = -dx2;
  }
  if(y2<0 || y2 >canvas.height){
    dy2 = -dy2;
  }
  if((x-x2)*(x-x2) + (y-y2)*(y-y2) < (r+r2)*(r+r2)){
    [dx,dy,dx2,dy2]=[((m-m2)*dx+2*m2*dx2)/(m+m2),((m-m2)*dy+2*m2*dy2)/(m+m2),((m2-m)*dx2+2*m*dx)/(m+m2),((m2-m)*dy2+2*m*dy)/(m+m2)]
    //[dx,dy,dx2,dy2]=[dx2,dy2,dx,dy]
  }
    drawBall(x, y, r, color);
    drawBall(x2, y2, r2, color2);
  
    requestAnimationFrame(draw);
}

draw();