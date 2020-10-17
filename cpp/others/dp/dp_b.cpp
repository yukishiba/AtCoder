#include <bits/stdc++.h>
using namespace std;

int main () {
  int N, K;
  cin >> N >> K;

  vector<int> h(N);
  vector<int> dp(N);
  for (int i = 0; i < N; i++) {
    cin >> h[i];
    if (i > 0) {
      int mc = 1e9;
      for (int j = 1; j <= min(K, i); j++) {
        int c = dp[i - j] + abs(h[i] - h[i - j]);
        mc = min(mc, c);
      }
      dp[i] = mc;
    } else {
      dp[i] = 0;
    }
  }
  cout << dp[N-1] << endl;
}