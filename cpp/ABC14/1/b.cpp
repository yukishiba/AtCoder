#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  string S;
  cin >> S;

  bool easy = true;
  for (int i = 0; i < S.size(); i++) {
    if (i % 2 == 0) {
      if (S.at(i) == 'L') { easy = false; }
    } else {
      if (S.at(i) == 'R') { easy = false; }
    }
  }

  cout << (easy ? "Yes" : "No") << endl;
}
