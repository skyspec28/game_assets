const canvas=document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width= 1024 
canvas.height =576


c.fillStyle= 'white'
c.fillRect(0,0 ,canvas.width ,canvas.height)

// import and render image 
// The draw image requires 3 args 
// 1. html image 
// x position 
// y position  
const image = new  Image()
image.src = './images/Pellet Town.png'


// let images load before drawing them 

const playerimage = new Image()
playerimage.src = './images/playerDown.png'


// image.onload =() => {  
//     c.drawImage(image ,-800 , -610)
//     // to make player appear on center of the canvas 
//     c.drawImage(
//         playerimage ,
//         // to crop an image we need four argument 
//         0, //x coordinate start
//         0, //y 
//         playerimage.width/4, // crop width is full width of image divide by 4
//         playerimage.height, 

//         // acutaul position 
//         canvas.width / 2 - playerimage.width / 2 , //x position of plater 
//         canvas.height / 2 - playerimage.height / 2 ,
//         playerimage.width/4, 
//         playerimage.height, 
//      )
// }


// like in OOP every every class has an instance 
// so i think java script instances is this instead of self 
// for better code struture we move draw to sprite 
class Sprite {
    constructor({ position ,velocity , image}) {
    this.position = position
    this.image= image 
    }

    draw () {
        c.drawImage(this.image ,-800 , -610)
    }
}
//  check on this later i think it is related to  to the sprite
//  to create a new class it takes an argument of POSITION ,
const background = new Sprite ({
    position:{
    x:0,
    y: 0
    },
    image:image

})
// animation loop 
//  what requestanimationframe doest it it calls a recursive  function named animate 
//  infinte loop 
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    
    // to make player appear on center of the canvas 
    c.drawImage(
        playerimage ,
        // to crop an image we need four argument 
        0, //x coordinate start
        0, //y 
        playerimage.width/4, // crop width is full width of image divide by 4
        playerimage.height, 

        // acutaul position 
        canvas.width / 2 - playerimage.width / 2 , //x position of plater 
        canvas.height / 2 - playerimage.height / 2 ,
        playerimage.width/4, 
        playerimage.height, 
     )

}
animate()

// e is a standard cinsole log to test 
// e.key returns the key you are touching 

window.addEventListener('keydown',(e) =>{
    
    // let keys =['w', 'a' ,'d' ,'z'];
    // if (keys.includes(e.key)) {
    //     console.log( e.key )
    // }

    switch (e.key) {
        case 'w':
            console.log('w is presssd')
            break 

        case 'a':
            console.log('a is pressed');
            break;
        case 's':
            console.log('s is pressed');
            break;
        case 'd':
            console.log('d is pressed');
            break;
    }
});

