#include <iostream>;
using namespace std;

int main()
{
  cout << "Bienvenido a Sum of Squares.Por favor,introduzca un entero" << endl;
  int numb;
  int total=0;
  cin >> numb;

  for (int i = 1; i <= numb; ++i)
  {
    total += i * i;
  }
  cout << "el sumatorio es: " << total << endl;
  return 0;
}