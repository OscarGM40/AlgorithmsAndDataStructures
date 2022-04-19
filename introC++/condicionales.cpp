#include <iostream>;

using namespace std;

int main()
{
  float nota;
  cout << "Inserte una nota: " << endl;
  cin >> nota;
  if (nota >= 5)
    cout << "El estudiante ha aprobado" << endl;
  else
    cout << "El estudiante ha suspendido" << endl;

  int edad;
  cout << "Inserte la edad de la persona:" << endl;
  cin >> edad;
  if (edad >= 1 && edad <= 3)
    cout << "la persona es un bebé" << endl;
  else if (edad > 3 && edad < 18)
    cout << "la persona es joven" << endl;
  else
    cout << "la persona es adulta" << endl;
}