#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;

int main() {
  int A, B;
  cin >> A >> B;

  cout << "A:";
  while (A > 0) {
    cout << "]";
    A--;
  }
  cout << endl;

  cout << "B:";
  while (B > 0) {
    cout << "]";
    B--;
  }
  cout << endl;
}

