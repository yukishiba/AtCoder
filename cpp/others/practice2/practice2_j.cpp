#include <bits/stdc++.h>
#include <atcoder/segtree>
using namespace std;
using namespace atcoder;

int op (int a, int b) {
  return max(a, b);
}

int e () {
  return -1;
}

int target;
bool f (int v) {
  return v < target;
}

int main () {
  int N, Q;
  cin >> N >> Q;

  vector<int> A(N);
  for (int i = 0; i < N; i++) {
    cin >> A[i];
  }

  segtree<int, op, e> seg(A);

  for (int i = 0; i < Q; i++) {
    int T, X, V, ans;
    cin >> T >> X >> V;

    if (T == 1) {
      seg.set(X - 1, V);
    } else if (T == 2) {
      ans = seg.prod(X - 1, V);
      cout << ans << endl;
    } else {
      target = V;
      ans = seg.max_right<f>(X - 1) + 1;
      cout << ans << endl;
    }
  }
}