/*function countdown(num){
    console.log(num);
    if(num <= 0)return;

    countdown(num-1);
}


countdown(5);*/


function fact(x){
    if(x === 1) return 1;

    return x * fact(x-1);

 

}

//console.log(fact(3));


function arraySum(x){
    if(x.length < 1) return 0;

 

    return x.pop() + arraySum(x) ;

}


//console.log(arraySum([1,2,3,4]));

function arrayCount(arr){
    if(arr.length < 1) return 0;





    return  1 + arrayCount(arr.slice(1));
}


//console.log(arrayCount([1,2,3,4,7,9,9,9,7,3,4,5,5,5,5,5,5,5,5,5,5,55,5,54]));

function arrayMax(arr){
    if(arr.length === 1) return arr[0];

    var max = arr[0];

   
   return max > arrayMax(arr.slice(1)) ? max : arrayMax(arr.slice(1));

    
   
}

function MaxPos(arr, i , j){
    let maxPos;
    if(i === j) return i;

   maxPos = MaxPos(arr, i + 1, j);

   if(arr[maxPos] < arr[i]){
 maxPos = i;
   }

   
   return maxPos;

    
   
}

//console.log(arrayMax([7,2,8,3,4]));

function sortArray(arr, pos1 , len1){
    let temp;
    let maxPos;
    if(pos1 === len1) return arr;


    maxPos = MaxPos(arr, pos1, len1-1);
   if(maxPos !== pos1){
    temp = arr[pos1];
    arr[pos1] = arr[maxPos];
    arr[maxPos] = temp;
   }

   
  


    
  return sortArray(arr, pos1 + 1 , len1);

}


function searchArray(arr, x, i , j){
    if(arr.length === 1 && arr[0] !== x){
        return i;
    }
        
if(arr.length === 1 && arr[0] === x) return i;



    let mid = Math.floor((i + j)/2);


if(arr[mid] === x){
return mid;
}

    if(arr[mid] < x){
        
        arr = arr.slice(mid);
        i = 0;
        j = arr.length;
        
    }else if(arr[mid] > x){
       
        arr = arr.slice(0, mid-1);
        i = 0;
        j= arr.length;
    }


   return searchArray(arr , x, i , j)
  




}


//console.log(sortArray([45,4,66,7,8], 0, 5));

console.log(searchArray([1,2,3,4,5],5, 0, 5));


