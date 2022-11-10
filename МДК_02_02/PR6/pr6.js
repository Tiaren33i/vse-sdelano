let i = -100;
let y = 0;
let h = 0.1;
let arr=[];

//Локальный минимум 5/3x-x^2-3

for (let x = i; x<100; x = x+h){
    y = 5/(3*x-x*x-3);
    arr.push(y);


}
let max = Math.min(...arr);
console.log(max);

//Точка (точки), в которой функция x*x-e^x равна -10

for (let x = i; x<100; x = x+h){
    y = (x*x-Math.exp(x));
    if ((y>-11)&&(y<-9)){
        console.log(`x=${x}`);
    }
}
