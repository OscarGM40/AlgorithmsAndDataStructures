#include <iostream>
#include <vector>
using namespace std;

/* un rio digital es una secuencia de numeros.Cada secuencia será la suma de n más la suma de sus digitos    */
/* los rios se pueden encontrar,muchos no se encontrarán como 480 y 481 ya que su siguiente rio es 492 y 494.Todos se encontrarán con la secuencia del rio 1,del 3 o del 9 */
/* rio 1 = 1 2 4 8 16 23 28 38 ... */
/* rio 3 = 3 6 12 15 21 24 30 33 ... */
/* rio 9 = 9 18 27 36 45 54 63 72 ... */


int suma_de_digitos(int z){ 
  // las unidades de un nº z están en z%10
  // la parte izquierda de un nº z sin las unidades(de 135 el 13) es z/10
  if(z < 10) return z; // si es una unidad la retorno
  else{
    //si no lo es saco las unidades y llamo recursivamente a z/10
    return z%10 + suma_de_digitos(z/10); 
  }
}

int getNext(int a){
  return a + suma_de_digitos(a);
}

/* se puede demostrar que un rio n siempre chocará o con la secuencia del rio 1 o la del 3 o la del 9  */
int encuentro_de_rios(int n){
  int r1 = 1;
  int r3 = 3;
  int r9 = 9;
  while( n != r1 && n != r3 && n != r9){
    if(n > r1) r1 = getNext(r1);
    else if(n > r3) r3 = getNext(r3);
    else if(n > r9) r9 = getNext(r9);
    else n = getNext(n);
  }  
  return n;  
}

int main () {
  // cout << "Inserte el numero en cuestion :" << endl;
  int a;
  while(cin >> a){
    cout << encuentro_de_rios(a) << endl;
  }
}