#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main () {
  int n;
  ll ans = 0;
  cin >> n;
  for (int i = 0; i < n; i++) {
    ll a, b;
    cin >> a >> b;
    ans += (a + b) * (b - a + 1) / 2;
  }
  cout << ans << endl;
}