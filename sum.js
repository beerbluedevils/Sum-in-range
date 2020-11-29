//basic algorithm lesson

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
