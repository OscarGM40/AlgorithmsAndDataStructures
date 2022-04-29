#include <iostream>
using namespace std;

/* usando la siguiente estructura de datos llamada Clock */
struct Clock {
  int h;
  int m;
  int s;
};

/* implemente las siguientes funciones o procedimientos */
Clock midnight(){
  Clock reloj;
  reloj.h = reloj.m = reloj.s = 0;
  return reloj;
}

void increase(Clock& c) {
  ++c.s;
}
void increase59(Clock& c) {
  c.s += 59;
}

void printClock(Clock& c) {
  if(c.s >= 60) {c.s %= 60; ++c.m; }
  if(c.m >= 60) {c.m %= 60; ++c.h; }
  if(c.h >= 24) {c.h %= 24; }
  cout << "La hora actual es " << endl;
  if(c.h < 10) cout << "0";
  cout << c.h << ":";
  if(c.m < 10) cout << "0";
  cout << c.m << ":";
  if(c.s < 10) cout << "0";
  cout << c.s << endl;
}






int main() {
  Clock c = midnight();
  printClock(c);
  increase(c);  
  printClock(c);
  increase59(c);
  printClock(c);

}