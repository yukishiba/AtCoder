#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main () {
  ll n;
  cin >> n;

  ll a = 0;
  long double b = 0;
  ll c = 0;
  for (ll i = 0; i < n; i++) {
    ll x;
    cin >> x;
    a += abs(x);
    b += x * x;
    c = max(c, abs(x));
  }
  b = sqrtl(b);
  cout << a << endl << fixed << setprecision(15) << b << endl << c << endl;
}