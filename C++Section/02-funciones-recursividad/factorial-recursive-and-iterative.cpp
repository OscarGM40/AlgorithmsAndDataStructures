#include <iostream>;
using namespace std;

/* escribir una funcion que calcule el factorial.Fijate como la única dificultad es que la función se llama a si misma */

int factorialRecursivo(int n)
{
  if (n == 0)
    return 1;
  else if (n > 12)
  {
    cout << "El factorial Recursivo de " << n << " es muy grande" << endl;
    return 0;
  }
  else
    return n * factorialRecursivo(n - 1);
}

long factorialIterativo(long n)
{
  long factorial = 1;
  for (int i = 1; i <= n; ++i)
  {
    factorial *= i;
  }
  return factorial;
}

long factorialIndeterminado(long n){
  long fact = 1;
  int x = 1;
  
  while(x <= n){
    fact *= x;
    x++;
  } 

  return fact;
}

int main()
{
  cout << "Ingrese un numero: ";
  int n;
  cin >> n;
  cout << "El factorial Recursivo de " << n << " es " << factorialRecursivo(n) << endl;
  cout << "El factorial Iterativo de " << n << " es " << factorialIterativo(n) << endl;
  cout << "El factorial Indeterminado de " << n << " es " << factorialIndeterminado(n) << endl;
  
  return 0;
}