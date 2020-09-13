#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main () {
  ll A, B, C, D;
  cin >> A >> B >> C >> D;
  
  ll a = A * C;
  ll b = A * D;
  ll c = B * C;
  ll d = B * D;
  ll ans = max(a, max(b, max(c, d)));
  cout << ans << endl;
}