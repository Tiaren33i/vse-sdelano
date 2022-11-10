  let arr={	
"D":[["O1",6],["O2",56],["M",6]],
"O1":[["D",0],["O2",6],["R",1]],
"O2":[["D",7],["O1",7],["M",1],["E",15]],
"M":[["D",70],["O2",5],["E",0]],
"E":[["O2",-6],["M",3],["R",0]],
"R":[]
};
let start="O2";
let end='R';

let stack=[{
	location:start,
	km:0,
	history:[]
}];
let result=[];
while (stack.length!=0){
	let cursor=stack.pop();
	let {location,km,history}=cursor;
	

	if (location!=end){
			
		let points=arr[location];
		
		points.forEach((point)=>{
			 let kuda=point[0];
			 let km_dist=point[1];
			 if (!history.includes(kuda)){
        			stack.push({
        			location:kuda,
	        		km:km+km_dist,
        			history:history.concat(location)
				}); 
			}	
		});
	} else {
		result.push(cursor);
		// console.log(cursor);
	}
}
console.log(result);

