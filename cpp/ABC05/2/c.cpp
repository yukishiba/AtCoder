#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;

int main() {
  int MOD = 1e9 + 7;
  int N;
  cin >> N;

  vector<int> sum(N+1, 0);
  for (int i = 2; i <= N; i++) {
    int b = i;
    for (int j = 2; j <= b; j++) {
      while (b % j == 0) {
        b /= j;
        sum[j]++;
      }
    }
  }

  long long ans = 1;
  for (int i = 0; i <= N; i++) {
    if (sum[i] > 0) ans = ans * (sum[i] + 1) % MOD;
  }

  cout << ans << endl;
}
