   var huabi = cv.getContext("2d"); //获取画笔
    huabi.fillStyle = "white"; //给画笔填充白色
    huabi.fillRect(0,0,600,400); //填充画布的区域
    var flag = false;
    cv.onmousedown = function (e) {
    flag = true;
    huabi.moveTo(e.pageX,e.pageY); //获取鼠标在浏览器页面的x和y坐标，绘画的起点
}
    cv.onmousemove = function (e) {
    if(flag){
    huabi.lineTo(e.pageX,e.pageY); //绘画的终点
    huabi.stroke(); //开始绘画
}
}
    cv.onmouseup = function (e) {
    flag = false;
}
    //下载签名
    function adown(object) { //此处需要把a标签传入
    object.href = cv.toDataURL("image/png"); //把画笔转成图片，在把图片信息给a标签
    object.download = new Date().getTime() + ".png"; //给图片重命名
}
    //重置签名
    function areset() {
    huabi.closePath(); //画笔结束当前的路径
    huabi.fillStyle = "white"; //给画笔填充白色
    huabi.fillRect(0,0,600,400); //填充画布的区域
    huabi.beginPath(); //重启一条路径
}