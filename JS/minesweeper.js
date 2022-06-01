document.addEventListener('DOMContentLoaded', () => {
    // Returns HTML element with the class "grid".
    const grid = document.querySelector('.grid');
    let width = 10;
    let bombCount = 20;
    let flags = 0;
    let squares = [];
    let isGameOver = false;

    // Creating Board
    function createBoard(){

        // Creates bombs, Arrays are created with a size and then each cell is filled with a value, 'bomb' or 'valid'.
        const bombsArray = Array(bombCount).fill('bomb');
        const emptyArray = Array(width*width - bombCount).fill('valid');

        const gamesArray = emptyArray.concat(bombsArray);

        const shuffledArray = gamesArray.sort(() => Math.random() -0.5);

        // Loop width*width times creating a div each time, each grid is given an attribute id equivalent to the number in the loop which made that grid.
        for(let i = 0; i < width*width; i++){
            const square = document.createElement("div");
            square.setAttribute("id", i);
            // .classList.add takes the value at shuffledArray[i] and gives the square a class associated with that value.
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);

            square.addEventListener('click', function(e){
                click(square);
            });

            square.oncontextmenu = function(e) {
                e.preventDefault();
                addFlag(square);
            };
        }

        // Add numbers
        for(let i = 0; i < squares.length; i++){
            let total = 0;
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width - 1);
            if (squares[i].classList.contains('valid')){
                if(i > 0 && !isLeftEdge && squares[i-1].classList.contains('bomb')){total++}
                if(i > width - 1 && !isRightEdge && squares[i+1-width].classList.contains('bomb')){total++}
                if(i > 10 && squares[i-width].classList.contains('bomb')){total++}
                if(i > 11 & !isLeftEdge && squares[i-1-width].classList.contains('bomb')){total++}
                if(i < width*width-2 && !isRightEdge && squares[i+1].classList.contains('bomb')){total++}
                if(i < width*width-width && !isLeftEdge && squares[i-1+width].classList.contains('bomb')){total++}
                if(i < width*width-width-2 && !isRightEdge && squares[i+1+width].classList.contains('bomb')){total++}
                if(i < width*width-width-1 && squares[i+width].classList.contains('bomb')){total++} 
                squares[i].setAttribute('data', total);
                console.log(squares[i]);
            }
        }
        
    }

    createBoard();

    function addFlag(square){
        if(isGameOver){return;}
        console.log(flags +":"+bombCount)
        if(!square.classList.contains('checked')){
            if(!square.classList.contains('flag')){
                square.classList.add('flag');
                square.innerHTML = '🏳️‍🌈';
                flags++;
                console.log(flags);
                gameWon();
                return;
            }else{
                square.classList.remove('flag');
                square.innerHTML = '';
                flags--;
                console.log(flags);
                gameWon();
                return;
            }
        }

        // if(!square.classList.contains('checked') && (flags < bombCount)){
        //     if(!square.classList.contains('flag')){
        //         square.classList.add('flag');
        //         square.innerHTML = '🏳️‍🌈';
        //         flags++;
        //         console.log(flags);
        //         gameWon();
        //         return;
        //     }else{
        //         square.classList.remove('flag');
        //         square.innerHTML = '';
        //         flags--;
        //         console.log(flags);
        //         return;
        //     }
        // }
        // console.log(square.classList.contains('flags') +":" + flags + ":");
        // if(square.classList.contains('flags')){
        //     square.classList.remove('flag');
        //     square.innerHTML = '';
        //     flags--; 
        // }
        
        console.log('the problem is here');
        return;
    }

    function click(square){
        let currentId = square.id;
        if(isGameOver){return;}
        if(square.classList.contains('checked') || square.classList.contains('flag')){console.log(square.classList.contains('checked') + ":" + square.classList.contains('flag'));return;}
        if(square.classList.contains('bomb')){
            gameOver(square);
            return;
        }else{
            let total = square.getAttribute('data');
            if(total != 0){
                square.classList.add('checked');
                square.innerHTML = total;
                return;
            }
            checkSquare(square, currentId);
        }
        square.classList.add('checked');
    }

    function checkSquare(square, currentId){
        const isLeftEdge = (currentId % width === 0);
        const isRightEdge = (currentId % width === width - 1);

        setTimeout(() => {
            if(currentId > 0 && !isLeftEdge){
                const newId = squares[parseInt(currentId) -1].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId > width-1 && !isRightEdge){
                const newId = squares[parseInt(currentId) +1 -width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId > width){ //
                const newId = squares[parseInt(currentId) -width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId > 11 && !isLeftEdge){ //
                const newId = squares[parseInt(currentId) -1 -width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId < width*width-2 && !isRightEdge){ //
                const newId = squares[parseInt(currentId) +1].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId < width*width-width && !isLeftEdge){
                const newId = squares[parseInt(currentId) -1 +width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId < width*width-width-2 && !isRightEdge){ //
                const newId = squares[parseInt(currentId) +1 +width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId < width*width-width-1){
                const newId = squares[parseInt(currentId) + width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
        }, 10)
    }

    function gameOver(square){
        console.log("Game Over");
        isGameOver = true;

        squares.forEach(square => {
            if(square.classList.contains('bomb')){
                square.innerHTML = '💣';
            }
        });
    }

    function gameWon(){
        let cond = 0;
        for(let i = 0; i < squares.length; i++){
            if(squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')){cond++;}
        }
        if(cond === bombCount && cond === flags){
            console.log('Winner');
            isGameOver = true;
        }
    }

})