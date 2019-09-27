#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;

int main() {
  int N, S;
  cin >> N >> S;
  vector<int> A(N), P(N);
  for (int i = 0; i < N; i++) {
    cin >> A.at(i);
  }
  for (int i = 0; i < N; i++) {
    cin >> P.at(i);
  }

  int ans;
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      if (A[i] + P[j] == S) ans++;
    }
  }
  cout << ans << endl;
}
