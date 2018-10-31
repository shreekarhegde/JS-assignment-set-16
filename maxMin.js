function maxMinOfArray(a){
	let i;
	for(i = 0; i < a.length; i++){
		if(a[i+1] < a[i]){
            console.log(a[i],a[i+1]);
				let x = a[i];
				a[i] = a[i+1];
                a[i+1] = x;
                maxMinOfArray(a);
    }
    
}	
	return [a[0],a[a.length-1]];
}

console.log(maxMinOfArray([10, -2147483648, -2]));
console.log(maxMinOfArray([-20, 34, 21, -87, 92, 2147483647]));