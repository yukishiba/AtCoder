#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main () {
  ll N;
  cin >> N;
  int ans = 0;

  for (int A = 1; A < N; A++) {
    ans += max(N / A, (ll)1);
    if (N % A == 0) {
      ans--;
    }
  }

  cout << ans << endl;
}