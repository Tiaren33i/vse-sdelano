let arr = [[2,4,6,8],[1,3,5,7]];

for (let i = 0; i < arr.length; i++){
    let sum = 0
    for (let j = 0; j < arr[i].length; j++){
        sum+=arr[i][j]
    }
    console.log(arr[i].sort());
    console.log(sum/arr[i].length);
};
