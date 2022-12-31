#include <iostream>
#include <vector>
using namespace std;

int main()
{
  cout << "Inserte el tamaño del vector a revertir\n";
  int size;
  while (cin >> size)
  {
    vector<int> normal(size);
    /* relleno el vector*/
    for (int j = 0; j < size; ++j)
    {
      cout << "Inserte la posicion " << j << endl;
      cin >> normal[j];
    }

    vector<int> reverso(size);
    /* relleno el vector revertido */
    for (int i = size; i > 0; --i)
    {
      reverso[size - i] = normal[i - 1];
    }
    /* imrpimo el retorno de ambos */
    for (int j = 0; j < size; ++j)
    {

      // cout << normal[j] << " ";
      cout << reverso[j] << " ";
    }
    cout << endl << "Inserte el tamaño del siguiente vector a revertir:\n";
  }
} 