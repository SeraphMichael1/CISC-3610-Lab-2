document.addEventListener('DOMContentLoaded', init);
let canvas, ctx, img, start, frames, count;
function init()
{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    img = new Image();
    img.src = 'assets/images/spritesheet.png';
    frames = numbers.frames;
    drawNumber([0]);
    start = document.getElementById('start');
    start.addEventListener('click', startAnim);
}
function startAnim()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    count = 0;
    start.disabled = true;
    let timer = setInterval(() =>
    {
        if(count >= frames.length)
        {
            clearInterval(timer);
            start.disabled = false;
        }
        drawNumber(count.toString().split('').map(Number));
        count++;
    }, 500);
}
function drawNumber(numbers = [])
{
    numbers.reverse().forEach((number, index) =>
    {
        let frameNumber = frames[number];
        ctx.drawImage(
            img,
            frameNumber.frame.x,
            frameNumber.frame.y,
            frameNumber.frame.w,
            frameNumber.frame.h,
            numbers.length > 1 ? canvas.width / 2 - (frameNumber.frame.w * index) : canvas.width / 4,
            0,
            frameNumber.sourceSize.w,
            frameNumber.sourceSize.h);
    }
    );
}