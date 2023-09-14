function newImage()
{
    fabric.image.fromURL('aniversario.jpg', function(img){
    blockImageObject = img;
    blockImageObject.scaletowidth(700);
    blockImageObject.scaletoheight(510);
    blockImageObject.set({
        top:0,
        left:0
    });
    Canvas.add(blockImageObject);
    });
}
function playSound(){
    x.play();
}