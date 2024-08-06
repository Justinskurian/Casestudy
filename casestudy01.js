console.log("-----------------------------------------------------------------");
// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
var arr1=[9, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('The first term is '+arr1[0]);
var n=arr1[0];
function prime(n){
  if (n<=1){
    console.log('Not Prime');
  }
  else if (n===2) {
    console.log('Prime');
  } else {
    for (var x=2; x<n; x++){
      if (n%x==0){
        console.log('Not Prime');
        return;
      }
    }
    console.log('Prime'); 
  }
}
prime(n);
console.log("-----------------------------------------------------------------");


// Write a JavaScript program to find the most frequent item of an array
var arr= [3,2,6,2,2,3,9,3,0,2,4,9,3,2,1,5,2,7];
var nmax = 1;
var n = 0;
var item;
for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
        if (arr[i] == arr[j])
            n++;
        if (nmax < n) {
            nmax = n;
            item = arr[i];
        }
    }
    n = 0;
}
console.log( " Most frequent term is " +item);
console.log("-----------------------------------------------------------------");



//Write a JavaScript program to find the sum of squares of the elements of an array.
var arr3=[5,6,3,4];
var square=0;
for (var k=0; k<arr3.length; k++){
  square+=(arr3[k]*arr3[k]);
}
console.log(square);
console.log("-----------------------------------------------------------------");



//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//check if the current number is odd or even, and display the message to the screen as odd or even.
for (i=0; i<16; i++){
    if(i%2==0){
        console.log(i +'  Even');
    }else{
        console.log(i +'  Odd');
    }
}
