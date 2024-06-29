document.addEventListener('DOMContentLoaded',()=>{
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");
    let gravity = 0.9;
    let isJumping = false;

    function control(e){
        if(e.keyCode === 32){
            
            if(!isJumping){
                console.log("jump");
                jump();
            }
           
        }

        // if(e.code === "Space"){
        //     console.log("jump");
        //     jump();
        // }
    }
    let position = 0;
    function jump(){
        isJumping = true;
        let count = 0;
        let timerId = setInterval(function(){
        //move down
        if(count === 15){
            clearInterval(timerId);
            let downTimerId = setInterval(function(){
                // console.log("going down")
                if(count == 0){
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 5;
                count--;
                position = position * gravity;
                dino.style.bottom = position +"px";
            },20)
        }
        //move up
        position +=30;
        count++;
        position = position * gravity;
        dino.style.bottom = position + "px";
     },20)
    }
    function generateObstacles(){
        let obstaclePosition = 1000;
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        grid.appendChild(obstacle);
        obstacle.style.left = obstaclePosition+"px";

<<<<<<< HEAD
=======
        let delayTimer = setInterval(function(){
            obstaclePosition -=10;
            obstacle.style.left = obstaclePosition + "px";
        },20)

>>>>>>> obstaclefeature
    }
    generateObstacles();

    document.addEventListener('keydown',control);
})