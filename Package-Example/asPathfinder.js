

//g how far from start
//h how far from finish

function pathFinder(cols, rows){

    let openRoute = [];
let closedRoute = [];
let startingPoint;
let deliveryPoint;
let w;
let h;
var pathRoute = [];
 //break out of loop
var noSolution = false;

let grid = new Array(cols);

function removeFromOpenRoute(arr, x) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === x) {
            arr.splice(i, 1);
        }
    }
}

//euclidian distance
function heuristic2(a, b) {

    let y = b.i - a.i;
    let x = b.j - a.j;

   let result = Math.ceil(Math.sqrt(x * x + y * y));

   return result;
}


function heuristic(a, b) {

    //euclidian distance

    let d = dist(a.i, a.j, b.i, b.j);

    //manhattan distance , better with diagonal

   // var m = Math.abs(a.i - b.i) + Math.abs(a.j - b.j)


    return d;
}

class Spot {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbours = [];
        this.previous = undefined;
        this.wall = false; 

       

        

        if(Math.random(1) < 0.2){
            this.wall = true
        }


        this.addNeighbours = function (grid) {
            let i = this.i;
            let j = this.j;

            if (i < cols - 1) {
                this.neighbours.push(grid[i + 1][j]);
            }
            if (i > 0) {
                this.neighbours.push(grid[i - 1][j]);
            }
            if (j < rows - 1) {
                this.neighbours.push(grid[i][j + 1]);
            }
            if (j > 0) {
                this.neighbours.push(grid[i][j - 1]);
            }

            //diagonal neighbours
            if(i > 0 && j > 0){
                this.neighbours.push(grid[i-1][j - 1]);
            }
            if(i < cols -1 && j > 0){
                this.neighbours.push(grid[i+1][j - 1]);
            }
            if(i > 0 && j < rows -1){
                this.neighbours.push(grid[i-1][j + 1]);
            }
            if(i < cols -1 && j < rows -1){
                this.neighbours.push(grid[i+1][j + 1]);
            }

            //diagonals neighbours

        };


    }
}


    console.log('A*');



    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j);
        }
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].addNeighbours(grid);
        }
    }

    startingPoint = grid[0][0];
deliveryPoint = grid[rows - 1][cols - 1];
startingPoint.wall =false;
deliveryPoint.wall = false;

openRoute.push(startingPoint);

// draw can be replaced by loop


    while (openRoute.length > 0) {
        let winner = 0;
        for (let i = 0; i < openRoute.length; i++) {
    
            //get shorter node 
            if (openRoute[i].f < openRoute[winner].f) {
                winner = i;
            }
        }
    
        var current = openRoute[winner];
    
        if (current === deliveryPoint) {

            pathRoute=[];
            var temp = current;
                    pathRoute.push(temp);
                    while(temp.previous) {
                        pathRoute.push(temp.previous);
                        temp = temp.previous;
                    }
        
            

                    

            console.log("done");
           
            break;
    
    
        }else if(openRoute.length < 1 && current !== deliveryPoint) {

            console.log('no solution');
    
           // noLoop();

           
            break;
            return null;
        
        }
    
    
        removeFromOpenRoute(openRoute, current);
        closedRoute.push(current);
    
        let neighbours = current.neighbours;
    
        for (let i = 0; i < neighbours.length; i++) {
            var neighbour = neighbours[i];
    
            if (!closedRoute.includes(neighbour) && !neighbour.wall) {
                //increment one step
                var tempG = current.g + 1;
                var newPath = false;
    
                if (openRoute.includes(neighbour)) {
    
    
                    //get neighbour with smallest g
                    if (tempG < neighbour.g) {
                        neighbour.g = tempG;
                        newPath = true;
                    }
                } else {
                    neighbour.g = tempG;
                    newPath = true;
                    openRoute.push(neighbour);
                }

                //only calculate heuristic if it is a new path

                if(newPath){
                    neighbour.h = heuristic(neighbour, deliveryPoint);
                    neighbour.f = neighbour.g + neighbour.h;
                    neighbour.previous = current;
                }
    
        
            }
    
        }

        

}

console.log(pathRoute);
return pathRoute;
}

pathFinder(25, 25);



//task : refuse diagonal if there are 2 obstacles


//using A* algorithm referenced on wikipedia

// A* is essentially is a loop







