require('date-utils');

const fs = require('fs');
const Canvas = require('canvas')
const Image = Canvas.Image;
const width = 640
const height = 1000
const marginLeft = 5
const marginTop = 50
const size = width - 10

// NOTE: This is easy way to get image file
const data = fs.readFileSync('./qr.png')
const canvas = new Canvas(width, height);
const ctx = canvas.getContext('2d');

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// NOTE: Draw current datetime
const date = new Date();
const dateStr = date.toFormat("YYYY/MM/DD HH24:MI:SS");
ctx.fillStyle = "black";
ctx.font = "30px Lato"
ctx.fillText(dateStr, 50, height - 50);

const img = new Image;
// NOTE: Add onload function otherwise canvas cannot write
img.onload = function() {
  ctx.drawImage(img, marginLeft, marginTop, size, size);
  canvas.toBuffer((err, buf) => {
    fs.writeFile("output.jpg", buf, function() {
      console.log("complete");
    });
  })
}
img.src = data;
