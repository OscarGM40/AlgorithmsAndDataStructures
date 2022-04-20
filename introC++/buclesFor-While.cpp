#include <iostream>;

using namespace std;

int main()
{
  /* variables comunes en bucles son i j y k */
  for (int i = 0; i < 5; ++i)
  {
    cout << "iteracion " << i << endl;
  }
  /* cout << "Escriba el numero de veces: " << endl;
  int veces;
  cin >> veces;
  for (int i = 0; i <= veces; ++i)
  {
    cout << "Dynamic for" << i << endl;
  } */

  int numeroveces;
  cout << "inserta numero de veces a multiplicar" << endl;
  cin >> numeroveces;
  cout << "inserta dos numeros enteros a multiplicar" << endl;
  int a, b;
  cin >> a >> b;

  while (numeroveces >= 0)
  {
    cout << a * b << endl;
    --numeroveces;
  }

  return 0;
}
