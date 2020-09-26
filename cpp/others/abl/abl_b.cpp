#include <bits/stdc++.h>
#include <atcoder/all>
using namespace std;
using namespace atcoder;
using ll = long long;

int main () {
  ll a, b, c, d;
  cin >> a >> b >> c >> d;
  string ans;
  if (a < c) {
    ans = (b >= c) ? "Yes" : "No";
  } else {
    ans = (d >= a) ? "Yes" : "No";
  }
  cout << ans << endl;
}