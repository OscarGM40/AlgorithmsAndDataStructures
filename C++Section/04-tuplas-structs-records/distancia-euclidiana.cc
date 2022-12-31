#include <iostream>
using namespace std;

/* obviamente un Point esta determinado por dos coordenadas */
struct Point {
  double x;
  double y;
};
/* la distancia euclidiana será (x2 -x1)² + (y2 - y1)² <- puedo invertir el orden a (x1 - x2 pero lo debo mantener)			
 */

/* si no paso Point por referencia pierdo eficiencia,ya que un parámetro por referencia es accesado mucho más rápido.Y para que no se cambie/mute añado el const */
double dist(const Point& a, const Point& b) {
  double h_axis = (a.x - b.x) * (a.x - b.x);
  double y_axis = (a.y - b.y) * (a.y - b.y);

  return sqrt(h_axis + y_axis);
}

int main() {
    Point e;
    Point f;
    cout << "Inserte coordenadas flotantes para el punto 1: " << endl;	
    cin >> e.x >> e.y;
    cout << "Inserte coordenadas flotantes para el punto 2: " << endl;	
    cin >> f.x >> f.y;
    cout << "La distancia euclidiana es: " << dist(e,f) << endl;
}
