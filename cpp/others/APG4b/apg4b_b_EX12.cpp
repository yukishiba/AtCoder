#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  string S;
  cin >> S;
  
  int N = 1;
  for (int i = 0; i < S.size(); i++) {
    if (S.at(i) == '+') {
      N++;
    } else if (S.at(i) == '-') {
      N--;
    }
  }
  
  cout << N << endl;
}
