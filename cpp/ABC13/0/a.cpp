#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int X;
  int A;
  cin >> X >> A;
  int ans = (X < A) ? 0 : 10;
  cout << ans << endl;
}