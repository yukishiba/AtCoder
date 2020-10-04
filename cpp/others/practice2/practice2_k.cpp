#include <bits/stdc++.h>
#include <atcoder/modint>
#include <atcoder/lazysegtree>
using namespace std;
using namespace atcoder;
using mint = modint998244353;

struct S {
  mint sum, len;
};

struct F {
  mint b, c;
};

S op(S s_l, S s_r) {
  return {s_l.sum + s_r.sum, s_l.len + s_r.len};
}

S e() {
  return {0, 0};
}

S mapping(F f, S s) {
  return {f.b * s.sum + f.c * s.len, s.len};
}

F composition(F f, F g) {
  return {f.b * g.b, f.b * g.c + f.c};
}

F id() {
  return {1, 0};
}

int main () {
  int N, Q;
  cin >> N >> Q;
  vector<S> v(N);
  for (int i = 0; i < N; i++) {
    int A;
    cin >> A;
    v[i] = {A, 1};
  }

  lazy_segtree<S, op, e, F, mapping, composition, id> seg(v);

  for (int i = 0; i < Q; i++) {
    int t, l, r, b, c;
    cin >> t >> l >> r;
    if (t == 1) {
      cout << seg.prod(l, r).sum.val() << endl;
    } else {
      cin >> b >> c;
      seg.apply(l, r, {b, c});
    }
  }
}