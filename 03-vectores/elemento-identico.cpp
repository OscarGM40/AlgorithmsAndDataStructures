#include <iostream>
#include <vector>
using namespace std;

int main() {
  cout << "Inserte el numero de posiciones del vector: " << endl;
  int n;
  cin >> n;
  vector<int> vextor(n);
  for(int i = 0; i < n; ++i){
    cout << "Inserte la posicion " << i << endl;
    cin >> vextor[i];
  }
  int last = vextor[n-1];
  int coincidencias = 0;
  for(int j = 0; j < n - 1; ++j) {
    if(vextor[j] == last) ++coincidencias;
  }
  cout << "El numero de coincidencias con el ultimo termino fue: " << coincidencias << endl;
}