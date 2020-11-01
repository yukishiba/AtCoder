#include <bits/stdc++.h>
using namespace std;
using ll = unsigned long long;

int main () {
  ll x, y, a, b;
  cin >> x >> y >> a >> b;

  ll exp = 0;
  while (1) {
    ll ac = (a - 1) * x;
    if (ac > b) {
      exp += (y - x - 1) / b;
      break;
    } else {
      x += ac;
      if (x >= y) break;
      exp++;
    }
  }
  cout << exp << endl;
}