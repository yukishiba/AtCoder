#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main () {
  ll n, w;
  cin >> n >> w;

  vector<vector<ll>> dp(n+1, vector<ll>(w+1));
  for (ll i = 0; i <= w; i++) {
    dp[0][w] = 0;
  }
  
  for (ll i = 1; i <= n; i++) {
    ll iw, iv;
    cin >> iw >> iv;
    for (ll j = 0; j <= w; j++) {
      if (j < iw) {
        dp[i][j] = dp[i-1][j];
      } else {
        dp[i][j] = max(dp[i-1][j], dp[i-1][j-iw] + iv);
      }
    }
  }
  cout << dp[n][w] << endl;
}