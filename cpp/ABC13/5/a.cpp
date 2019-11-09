#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  long long A;
  long long B;
  long long K;
  cin >> A >> B;
  if (abs(A - B) % 2 == 0) {
    K = min(A, B) + abs(A - B) / 2;
    cout << K << endl;
  } else {
    cout << "IMPOSSIBLE" << endl;
  }
}