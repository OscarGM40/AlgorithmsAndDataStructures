#include <iostream>
#include <string>
using namespace std;

/* Structs - son variables de distintos tipos.Sirven para trabajar con variables relacionadas */

struct Persona
{
  string nombre;
  int edad;
  bool es_sano;
  string lugar_residencia;
  double indice_glucemico;
};


int main() {
  Persona p;
  p.nombre = "Joaquin";
  p.edad = 15;
  p.es_sano = (p.edad >= 3);
  p.lugar_residencia = "South Beach";
  cout << p.nombre << " vive en " << p.lugar_residencia << endl;

  Persona luis;
  cout << "Introduza el nombre de la persona" << endl;
  cin.ignore(0);
  getline(cin, luis.nombre);
  
  cout << "Escriba la edad" << endl;
  cin >> luis.edad;

  cout << "Introduzca el indice glucemico de la persona" << endl;
  cin >> luis.indice_glucemico;  

  cout << "Escriba finalmente el lugar donde reside" << endl;
  cin.ignore();
  getline(cin,luis.lugar_residencia);
  
  cout << "La persona se llama " << luis.nombre << "." << endl;
  cout << "La edad es de " << luis.edad << "." << endl;
  luis.es_sano = (luis.indice_glucemico >= 2);
  if(luis.es_sano) cout << "La persona es sana\n";
  else cout << "La persona esta enferma\n";
  cout << "El indice glucemico de " << luis.nombre << " es de " << luis.indice_glucemico << endl;
  cout << luis.nombre << " vive en " << luis.lugar_residencia << endl;

}