//Creating a multiplication table with all the elements in the array. So
//if your array is [2, 3, 7, 8, 10], you first multiply every element by 2,
//then multiply every element by 3, then by 7, and so on. 
//var array = [];

var newArr = [];
function multiplyItem(array, multiple, index) {


  if (array.length === index) return newArr;


  let item = array[index] * multiple;
  newArr.push(item);







  return multiplyItem(array, multiple, index + 1);
}


var mainArray = [];



function multiplyArr(arr, multiple) {
 

 // miniArray.length = 0;

  if (multiple === 7) return mainArray;

  console.log("ghgh");


  /* for(let multiple = 2; multiple < 8; multiple++)
   {
     for(let i = 0; i < arr.length; i++)
 {
   var result =  arr[i] * multiple;
 
   miniArray.push(result);
 
 }
 mainArray.push(miniArray);
 miniArray= [];
   }*/






  let miniArray = multiplyItem(arr, multiple, 0).slice();
  
  mainArray.push(miniArray);


  miniArray = [];







  return multiplyArr(arr, multiple + 1);
}

//console.log([([1,2,3,4,5]), [6,7,8,9,10]]);

console.log(multiplyArr([1, 2, 3, 4, 5], 2));





//console.log(multiplyItem([1,2,3,4,5], 2 , 0));