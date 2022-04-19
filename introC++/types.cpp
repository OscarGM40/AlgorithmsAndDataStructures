#include <iostream>;
#include <string>;
using namespace std;

int main(){
  cout << "el tipo int en c++ permite almacenar enteros sin decimales" << endl; 
  int edad = 4;
  int precio = 10;
  int teclado = -2;
  cout << edad << ' ' << precio << ' ' << teclado << endl;
  cout << "el tipo double en c++ permite almacenar numeros con decimales" << endl; 
  double exacto = 3.6;
  double a = 1.8;
  double ultimo = -92.834;
  cout << exacto << a << ultimo << endl;
  cout << "el tipo char en c++ permite almacenar un único carácter alfanumérico,es decir,una letra o número" << endl; 
  char curso ='z';
  cout << curso << endl;
  cout << "el tipo string en c++ permite almacenar textos y/o palabras" << endl; 
  string papel = "amarillo";
  string revista = "Navidad";
  cout << papel << " " << revista << endl;
  cout << "el tipo bool en c++ permite almacenar true o false.Si le paso un 1 o 0 sabrá interpretarlo y lo convertirá a true o false" << endl; 
  bool isActive = 0;
  bool hasType = true;
  cout << isActive << " " << hasType <<  endl;

  string b; 
  /* getline me permite rescatar toda la linea,a diferencia de cin */
  getline(cin,b);
  cout << b << endl;

 return 0; // parece que ya es opcional el return en el main 
}