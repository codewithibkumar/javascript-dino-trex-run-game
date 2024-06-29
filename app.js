document.addEventListener('DOMContentLoaded',()=>{
    let randomeTime = Math.random() * 4000;
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");
    const alert = document.getElementById("alert"); 
    let gravity = 0.9;
    let isJumping = false;
    let isGameOver = false;

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

        let timerId = setInterval(function(){
            if(obstaclePosition > 0 && obstaclePosition < 60 && position < 60){
                clearInterval(timerId);
                isGameOver = true;
                alert.innerHTML = 'Game Over';

                //remove all children
                while(grid.firstChild){
                    grid.removeChild(grid.lastChild);
                }
            }
            obstaclePosition -=10;
            obstacle.style.left = obstaclePosition + "px";
           
        },20)
        if(!isGameOver) setTimeout(generateObstacles,randomeTime);
    }
    generateObstacles();

    document.addEventListener('keydown',control);
})