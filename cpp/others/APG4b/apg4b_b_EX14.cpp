#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int A, B, C;
  cin >> A >> B >> C;
  cout << max(A, max(B, C)) - min(A, min(B, C)) << endl;
}
