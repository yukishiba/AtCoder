#include <bits/stdc++.h>
using namespace std;
using ll = long long;

vector<ll> divisors (ll n) {
  vector<ll> dest;
  for (ll i = 1; i < floor(pow(n, 0.5) + 1); i++) {
    if (n % i == 0) {
      dest.push_back(i);
      if (floor(n / i) != i) {
        dest.push_back(floor(n / i));
      }
    }
  }
  sort(dest.begin(), dest.end());
  return dest;
}

int main () {
  ll n;
  cin >> n;

  auto ans = divisors(n);
  for (ll i = 0; i < (ll)ans.size(); i++) {
    cout << ans[i] << endl;
  }
  
}