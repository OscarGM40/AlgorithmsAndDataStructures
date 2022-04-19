#include <iostream>
#include <string>

using namespace std;

int main(){
  int a;
  int b;
  cout << "Inserte dos enteros a sumar:" << endl;
  cin >> a >> b;
  cout << "El resultado es: " << a + b << endl;

  double x;
  double y;
  cout << "Inserte dos decimales a multiplicar:" << endl;
  cin >> x >> y;
  cout << "La multiplicación es: " << x * y << endl;

  double numerador;
  double denominador;
  cout << "Inserte dos numeros a dividir:" << endl;
  cin >> numerador >> denominador;
  cout << "La division es: " << numerador/denominador << endl;
  
  int n;
  cout << "Inserte un entero para comprobar si es par" << endl;
  cin >> n; //cin va para n
  bool isEven = n %2 == 0 ;
  cout << "El numero: " << n << " es par?(1-si/0-no):" << isEven << endl;
}

