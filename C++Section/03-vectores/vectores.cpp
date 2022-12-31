#include <iostream>
#include <vector>
using namespace std;

/*  */

int main() {
  vector <float> notas(5); 
  for(int i = 0; i < 5; ++i) {
    cout << "Escriba las notas de los 5 alumnos:\n";
    cin >> notas[i];
  }
  for(int i = 0; i < 5; ++i) {
    cout << "Las notas insertadas son: " << notas[i] << endl;
  }
}