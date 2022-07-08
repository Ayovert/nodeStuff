function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    if (ts.length < 1) {
        return 0;
    }

    try {
        var result = ts[0];

        for (let i = 0; i < ts.length; i++) {


            if (Math.abs(ts[i]) < Math.abs(result) || (ts[i] > 0 && Math.abs(ts[i]) === Math.abs(result))) {
                result = ts[i];
            }

        }

        return result;
    } catch (error) {
        console.log(error);
        return -1;
    }

}


var result = computeClosestToZero([-2, 4, 5, 6, 2, 3]);

var test = [1, 3, 4, 5, 6];

test[2] = 9;

console.log(test);

function array_queries(N, M, A, B, Q, queries) {
    // Write your code here

    try{
        if(A.length < 1 || B.length < 1){
            if(M > Math.pow(10,5)){
                if(Q > Math.pow(10,5)){
                     return [];
                }

            } 
    }


    var sum1 = 0;

    for(let i =0; i < N; i++){
        for(let j = 0; j < M; j++){
         sum1 +=   (A[i]*B[j]) * ((i+1)+(j+1));
        
        }
    }

    var result = [sum1];

    var sum2 = 0;

    for(let q = 0; q < Q; q++){
        
        var cQ = queries[q];
        var ai, aj, bi, bj;
    

        var tp = cQ[0];
        if(A[cQ[1]-1] !== undefined || A[cQ[2]-1] !== undefined ){
              ai = A[cQ[1]-1];
            
        }
        if(A[cQ[2]-1] !== undefined ){
        aj = A[cQ[2]-1];
            
        }

        if(B[cQ[1]-1] !== undefined ){
            bi = B[cQ[1]-1];
           
        }

        if(B[cQ[2]-1] !== undefined){
        
        bj = B[cQ[2]-1];
           
        }
       

        


        if(tp === 1){
            A[cQ[1]-1] = bj;
            B[cQ[2]-1] = ai;
           
        }else if(tp === 2)
        {
            A[cQ[1]-1] = aj;
            A[cQ[2]-1] = ai;
            
        }
        else if(tp === 3)
        {
            B[cQ[1]-1] = bj;
            B[cQ[2]-1] = bi;
        
        }
        for(let i =0; i < N; i++){
        for(let j = 0; j < M; j++){
            
          sum2 +=   ((A[i]*B[j]) * (i+j+2)) % 998244353;
          
        }

    }
    result.push(sum2);
    sum2=0;
    }
    

return result;
    }catch(error){
        console.log(error);
        return [];
    }
}


