#include <bits/stdc++.h>
using namespace std;

int main () {
  int N;
  cin >> N;

  vector<vector<int>> dp(N, vector<int>(3));
  for (int i = 0; i < N; i++) {
    vector<int> h(3);
    for (int j = 0; j < 3; j++) {
      cin >> h[j];
      dp[i][j] = h[j];
      if (i > 0) {
        vector<int> acts = {0, 1, 2};
        acts.erase(acts.begin() + j);
        dp[i][j] += max(dp[i-1][acts[0]], dp[i-1][acts[1]]);
      }
    }
  }
  int hmax = max(dp[N-1][0], max(dp[N-1][1], dp[N-1][2]));
  cout << hmax << endl;
}