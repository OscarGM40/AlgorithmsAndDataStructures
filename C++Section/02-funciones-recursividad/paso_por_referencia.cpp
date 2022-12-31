#include <iostream>;
using namespace std;

/* paso por referencia(&) */

void swap2(int& a, int& b)
{
  int temp = a;
  a = b;
  b = temp;
}

int main(){
  cout << "Ingrese dos numeros: \n";
  int a, b;
  cin >> a >> b;
  cout << "Antes de intercambiar: " << a << " " << b << endl;
  swap2(a, b);
  cout << "Despues de intercambiar: " << a << " " << b << endl;
  return 0;
}

