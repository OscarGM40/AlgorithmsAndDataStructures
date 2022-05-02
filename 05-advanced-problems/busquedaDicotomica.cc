#include <iostream>
#include <vector>
using namespace std;
/* busqueda dicotómica [1.2, 2.3, 5.6, 4.3,8.1]*/
/* devolver la posicion de un array ordenado al que le paso el slice por la izquierda y por la derecha */
/* PRECONDICION: el vector esta ordenado crecientemente */
int position(double x, const vector<double> &v, int left, int right)
{
  /* una función recursiva siempre tiene un paso base o condicion de salida*/
  if (left > right)
    return -1;                  // en este caso es que left sea mayor que right
  int pos = (right + left) / 2; // posicion del medio
 
  if (x > v[pos])
    return position(x, v, pos + 1, right);
  if (x < v[pos])
    return position(x, v, left, pos - 1);
  return pos; // si son iguales devuelvo la posicion
}

int main() {
  int n;
  cin >> n;//numero de elementos
  vector<double> prueba(n);
  for(int i = 0; i < n; ++i){
    cin >> prueba[i];
  }

  double x = 2.5;
  cout << "El elemento " << x << " se encuentra en la posicion " << position(x,prueba,0, n -1) << endl;

}
