//Общие переменные
double y=0;
int i=Convert.ToInt32(Console.ReadLine());
double h=Convert.ToDouble(Console.ReadLine());


////Локальный минимум 5/3x-x^2-3
double max=0;
for (double x = i; x < i+100; x=x+h){
    y = 5/(3*x-x*x-3);
 if (max>y){
  max=y;
 }
}
Console.WriteLine(max);