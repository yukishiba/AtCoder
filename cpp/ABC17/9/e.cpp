#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main () {
  ll N, X, M;
  cin >> N >> X >> M;
  ll ans = X;
  for (ll i = 1; i < N; i++) {
    X = X * X % M;
    ans += X;
    if (X == 0) break;
  }
  cout << ans << endl;
}

// TLE
