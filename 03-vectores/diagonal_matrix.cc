#include <iostream>
#include <vector>
using namespace std;

// vector<vector<int>> prueba(n,vector<int>(n)); <- matriz cuadrática
// supondremos que es cuadrática para todo el ejercicio
/* fijate como puedo declarar un tipo al más puro estilo typescript */
typedef vector<vector<int>> Matrix;
bool is_diagonal_matrix(const Matrix &m)
{
  int n = m.size();
  for (int i = 0; i < n; ++i)
  { // i representa las filas
    for (int j = 0; j < n; ++j)
    { // j representa las columnas
      if (i != j && m[i][j] != 0)
        return false;
    }
  }
  return true;
}

int main()
{
  cout << "inserta la longitud de la matriz cuadrática\n";
  int n;
  cin >> n;
  cout << "Rellene la matriz" << endl;
  Matrix temp_matrix(n, vector<int>(n));
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      cout << "inserte valor para la posicion:[" << i << "][" << j << "]\n";
      cin >> temp_matrix[i][j];
    }
  }
  cout << "finalizada asignacion.\n";
  if(is_diagonal_matrix(temp_matrix)) cout << "la matriz es diagonal";
  else cout << "La matriz no es diagonal";
  cout << endl;
}