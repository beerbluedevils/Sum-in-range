# Sum-in-range
//Write the function to return the sum of 2 numbers in the array
//Learning from algorithm lesson and write code to sum 2 numbers in the array.

function sumAll(arr){
	let min = Math.min.apply(null , arr);
	let max = Math.max.apply(null , arr);
	let sum = 0;
	for(let i = min; i <= max; i++){
		sum += i;
		}
	return sum;
	}
console.log(sumAll([1,100]));
