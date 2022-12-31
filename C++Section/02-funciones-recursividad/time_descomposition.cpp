#include <iostream>;
using namespace std;

void decompose(int n, int& h, int& m, int& s)
{
  h = n / 3600;
  m = (n % 3600) / 60;
  // m = (n / 60) % 60; 
  s = n % 60;
}

int main(){
  int n;
  cout << "Ingrese un numero de segundos: ";
  cin >> n;
  int h, m, s;
  decompose(n, h, m, s);
  cout << "Hora: " << h << " Minutos: " << m << " Segundos: " << s << endl;
  return 0;
}