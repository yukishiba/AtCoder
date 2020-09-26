#include <bits/stdc++.h>
#include <atcoder/dsu>
using namespace std;
using namespace atcoder;

int main () {
  int N, Q;
  cin >> N >> Q;
  dsu d(N);

  for (int i = 0; i < Q; i++) {
    int t, u, v;
    cin >> t >> u >> v;
    if (t) {
      cout << d.same(u, v) << endl;
    } else {
      d.merge(u, v);
    }
  }
  
}