#include <iostream>;
using namespace std;

/* funciones: retornan un valor */
/* procedimientos: no retornan nada.Se declaran con la keyword void */

void bienvenida()
{
  cout << "Bienvenido al programa" << endl;
  cout << "Preparese para comenzar" << endl;
};

void edad()
{
  cout.setf(ios::fixed);
  cout.precision(2);
  float a;
  cout << "Ingrese su edad: \n";
  cin >> a;
  cout << "Su edad es: " << a << endl;
}

float getMax(float a, float b)
{
  if (a > b)
    return a;
  else if (a == b)
    return a;
  else
    return b;
}

int main()
{
  bienvenida();
  edad();
  cout << "Inserte dos numeros: \n";
  float a, b;
  cin >> a >> b;
  cout << "El mayor es: " << getMax(a, b) << endl;
  return 0;
}