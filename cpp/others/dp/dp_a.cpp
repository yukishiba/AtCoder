#include <bits/stdc++.h>
using namespace std;

int main () {
  int N;
  cin >> N;

  vector<int> h(N);
  vector<int> dp(N);
  for (int i = 0; i < N; i++) {
    cin >> h[i];
    if (i > 1) {
      int s1 = dp[i - 1] + abs(h[i] - h[i - 1]);
      int s2 = dp[i - 2] + abs(h[i] - h[i - 2]);
      dp[i] = min(s1, s2);
    } else if (i == 1) {
      int s1 = dp[i - 1] + abs(h[i] - h[i - 1]);
      dp[i] = s1;
    } else {
      dp[i] = 0;
    }
  }
  cout << dp[N-1] << endl;
}