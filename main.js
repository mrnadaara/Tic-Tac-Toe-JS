const gameController = (function(){
    let startGame = function(p1, p2){
        const player1 = Player(p1);
        const player2 = Player(p2);
        const newGame = Game();

        while(){

        }
    };
    let endGame;
    let checkCondition = function(){
        
    };
    let displayBoard;
    let displayMessage;
    let makeMove;
    return {
        startGame
    };
});

function Game(player1, player2){
    const board = [['1','2','3'], ['4', '5', '6'], ['7', '8', '9']];
    
}

function Player(name){
    let name = name;
    return name;
}



function winConditions(board){
    const rowCondition = function(board){
        board.map((b) => {
            if(b[0] === b[1] && b[1] === b[2]){
                return true;
            }
        });
    }

    const columnCondtion = function(board){
        board.map((b) => {
            
        });
    }
}