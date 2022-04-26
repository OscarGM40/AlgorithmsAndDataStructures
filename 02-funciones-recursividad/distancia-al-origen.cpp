#include <iostream>
#include <cmath>
using namespace std;

//origen(x,y) = (0,0)
double dist_or(double x, double y){
  // calcular la raiz cuadrada de x al cuadrado más y al cuadrado
  // necesitaré un vector director,en este caso siempre es al origen
  return sqrt((x*x) + (y*y));
}

int main() {
  cout << "Inserte dos numeros reales para calcular la distancia al origen: " << endl;
  double a, b;
  while(cin >> a >> b){
    cout << "La distancia es: " << dist_or(a,b) << endl;
  }
  return 0;

}