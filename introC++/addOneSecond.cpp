#include <iostream>;

using namespace std;

int main()
{
  cout << "bienvenido al programa AddOneSecond.Por favor inserte las horas:" << endl;
  int h, m, s;
  cin >> h;
  cout << "Por favor inserte los minutos:" << endl;
  cin >> m;
  cout << "Por favor inserte los segundos:" << endl;
  cin >> s;
  s = s++;
  /* fijate que la clave es el módulo asinto */
  if (s >= 60) { s %= 60; m += 1; }
  if (m >= 60) { m %= 60; h += 1; }
  if(h >=24){ h %= 24; }
  /* pasar a formato digital */
  cout << "La hora insertada más un segundo es:" << endl;
  if(h < 10) cout << "0";
  cout << h << ":";
  if(m < 10) cout << "0";
  cout << m << ":";
  if(s < 10) cout << "0";
  cout << s << endl;
  return 0;
}