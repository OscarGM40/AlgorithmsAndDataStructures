#include <iostream>
/* si no uso el namespace lo tengo que andar escribiendo  */
using namespace std;

int main(){
  /* fijate que debo mandar los endl(endlines) */
  std::cout << "Bienvenido al curso de C++" << std::endl;
  /* esto es otra forma de meter el endl ,pero mejor usar <<*/
  std::cout << "Estamos empezando con los namespaces" << std::endl;
  string variable;
  cout << "Inserta un string..." << endl;
  std::cin >> variable;
  cout << "has escrito:" << variable << endl;
  return 0;
}