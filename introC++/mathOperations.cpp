#include <iostream>;
using namespace std;

int main()
{
  // impongo la condición de usar decimales y no enteros asi:
  cout.setf(ios::fixed);
  // impongo la condición de usar estrictamente dos decimales asi:
  cout.precision(2);

  cout << "Bienvenido a Math operations: " << endl;
  string operacion = "";
  double numA, numB;

  while (operacion != "parar")
  {
    cout << "Indique tipo de operacion(suma|resta|cambio|parar):\n";
    cin >> operacion;

    if (operacion == "suma")
    {
      cout << "Indique primer digito a sumar\n";
      cin >> numA;
      cout << "Indique segundo digito a sumar\n";
      cin >> numB;
      cout << "suma: " << numA + numB;
     }
    else if (operacion == "resta")
    {
      cout << "Indique primer digito a restar\n";
      cin >> numA;
      cout << "Indique segundo digito a restar\n";
      cin >> numB;
      cout << "resta: " << numA - numB;
    }

    else if (operacion == "cambio")
    {
      cout << "Inserte numero a cambiar valor absoluto\n";
      /* fijate que multiplicar por -1 también me vale para la inversa aditiva */
      cin >> numA;
      if(numA > 0) cout << 0 - numA;
      if(numA < 0) cout << 0 + (-numA);
    }
    cout << endl;

  }
  return 0;
}