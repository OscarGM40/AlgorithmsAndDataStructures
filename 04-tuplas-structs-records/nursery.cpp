#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

/* cada caso es una lista de Maestros en realidad */
struct Maestro
{
  string nombre_maestro;
  int cantidad_dulces;
  int cantidad_zanahorias;
};

/* para ordenar usaré el método sort(v.begin(),v.end(),comparacion) */
bool criterio_ordenacion(Maestro& a,Maestro& b)
{
  if(a.cantidad_dulces == b.cantidad_dulces){
    if(a.cantidad_zanahorias == b.cantidad_zanahorias){
      if(a.nombre_maestro.size() == b.nombre_maestro.size()){
        //cojo el que va antes en el alfabeto,debe ser el menor por ello
        return a.nombre_maestro < b.nombre_maestro; 
      }else{
        return a.nombre_maestro.size() < b.nombre_maestro.size();
      }
    }else{
     return a.cantidad_zanahorias > b.cantidad_zanahorias; 
    }
  }else {
    return a.cantidad_dulces > b.cantidad_dulces;
  };
}

int main() {
  cout << "Inserte el numero de casos" << endl;
  int n_casos;
  cin >> n_casos;

  for (int i = 0; i < n_casos; ++i) {
    cout << "inserte el numero de profes para el caso " << i << endl;

    int n_profes;
    cin >> n_profes;
    vector<Maestro> m (n_profes);
    
    for (int j = 0; j < n_profes; ++j) {
      cout << "Inserte el nombre del maestro: " << j << endl;
      // cin.ignore();
      cin >> m[j].nombre_maestro;
      // getline(cin, m[j].nombre_maestro);
      cout << "Inserte la cantidad de dulces que dio " << m[j].nombre_maestro << endl;
      cin >> m[j].cantidad_dulces;
      cout << "Inserte la cantidad de zanahorias que dio " << m[j].nombre_maestro << endl;
      cin >> m[j].cantidad_zanahorias;
    }

    sort(m.begin(),m.end(), criterio_ordenacion);

    for(int k = 0; k < n_profes; ++k){
      cout << m[k].nombre_maestro << endl;
    }
    
    cout << endl;

  }
}