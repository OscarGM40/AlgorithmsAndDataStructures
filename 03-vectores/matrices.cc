#include <iostream>
#include <vector>
using namespace std;

int main() {
  cout << "Introduzca las filas" << endl;
  int f;
  cin >> f;
  cout << "Introduzca las columnas" << endl;
  int c;
  cin >> c;
  vector <vector<int>> matriz(f,vector<int>(c));

  for(int i = 0; i < f; i++){
    for(int j = 0; j < c; j++){
      cout <<"Inserte el valor para la posicion:["<<i<<"]["<<j<<"]"<<endl;
      cin >> matriz[i][j]; //ojo que es ij 
    }
  }
 
 for(int i = 0; i < f; ++i){
   for(int j = 0; j < c; ++j){
      cout << "[" << matriz[i][j] << "] "; 
      if(j == c-1) cout << endl;
   }
 }
}