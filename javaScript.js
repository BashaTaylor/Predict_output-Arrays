//Predict 1
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

//Answer: 8,6,7,5,3,0,9;

//Predict 2
//position 0 1 2 3 4 2 6, .length is 7
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){   //this line will go around 7 times
    if(arr[i] % 2 == 0){               //if i is a multiple of 2, then we console.log  
        console.log(arr[i]);            //the arr of i
    }                                   //if i is not a multiple of m, then we console.log 
    else{                               //"That is odd!"
        console.log("That is odd!");
    }
}

//Answer: 
// That is odd!
// That is odd!
// 8
// 4
// 2
// 0
// That is odd!

//Predict 3
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

//Answer: 
//console.log -> [-1,-3,-8,5,"Zero",2,-4,1]
//newArr [-5,-2,-1]