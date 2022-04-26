#include <iostream>;

using namespace std;

int main()
{
  cout << "Inserta la palabra 1" << endl;
  string word1;
  cin >> word1;
  cout << "Inserta la palabra 2" << endl;
  string word2;
  cin >> word2;
  if (word1 < word2)
    cout << word2 << " " << word1;
  else if (word1 > word2)
    cout << word1 << " " << word2;
  else
    cout << word1 << " " << word2;
  /* fijate que me puedo ahorrar el endl  */
  cout << endl;
  return 0;
}