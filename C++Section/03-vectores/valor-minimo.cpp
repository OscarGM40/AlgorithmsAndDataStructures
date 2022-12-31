#include <iostream>
#include <vector>
using namespace std;

/* dado un vector de n posiciones calcular el valor minimo */


int main() {
  cout << "Inserte el numero de posiciones del vector: " << endl;
  int n;
  cin >> n;
  vector<int> numeros(n);

  for(int i = 0; i < n; ++i){
    cout << "Inserte la posicion " << i << endl; 
    cin >> numeros[i];
  }

  int min = numeros[0];

  for(int j = 1; j < n; ++j){
    if(numeros[j] < min) {
      min = numeros[j];
    }
  }
  cout << "el minimo es: " << min << endl;

}