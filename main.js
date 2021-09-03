var canvas = new fabric.Canvas('My_Canvas');
 var x= document.getElementById("myAudio");

 function new_Image() {
    fabric.Image.fromURL("BirthdayImage.jpg", function (img) {
        block_image_object = img;
        block_image_object.scaleToWidth(450);
        block_image_object.scaleToHeight(450);
        block_image_object.set({
            top: 45,
            left: 10
        });
        canvas.add(block_image_object)
    })
};

function playSound(){
	x.play()
}
