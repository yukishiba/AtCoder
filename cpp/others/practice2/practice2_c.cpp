#include <bits/stdc++.h>
#include <atcoder/math>
using namespace std;
using namespace atcoder;

int main () {
  int T;
  cin >> T;

  for (int i = 0; i < T; i++) {
    int n, m, a, b;
    cin >> n >> m >> a >> b;
    cout << floor_sum(n, m, a, b) << endl;
  }
}