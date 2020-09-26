#include <bits/stdc++.h>
#include <atcoder/fenwicktree>
using namespace std;
using namespace atcoder;
using ll = long long;

int main () {
  int N, Q;
  cin >> N >> Q;
  fenwick_tree<ll> fw(N);

  for (int i = 0; i < N; i++) {
    int a;
    cin >> a;
    fw.add(i, a);
  }
  for (int i = 0; i < Q; i++) {
    int t, u, v;
    cin >> t >> u >> v;
    if (t) {
      cout << fw.sum(u, v) << endl;
    } else {
      fw.add(u, v);
    }
  }
}