#include <iostream>;
using namespace std;    

/**
 * FATTEN NUMBERS
 * 1. Paso base: Si x es menor que 10
 * 2. Paso inductivo:
 * 
 */
int maximo(int a, int b){
  return a > b ? a : b;
}
int fatten(int x)
{
  /* paso base */
  if (x < 10) return x;
  else {
    /* paso inductivo */
    int n = x % 10;
    int fn = fatten(x/10) % 10;
    int valor = maximo(n, fn);
    return 10 * fatten(x/10) + valor;
  }
  
}

int main()
{
  int x;
  while(cin >> x)
    cout << fatten(x) << endl;
}