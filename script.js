const makeChange = (c) => {
  // your name here
	let ans = {
		"q":0,
		"d":0,
		"n":0,
		"p":0
	}
	ans["q"]=Math.floor(c/25);
	c=c%25;
	ans["d"]=Math.floor(c/10);
	c=c%10;
	ans["n"]=Math.floor(c/5);
	c=c%5;
	ans["p"]=Math.floor(c);
	
	return ans;
	
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
