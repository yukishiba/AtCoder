#include <bits/stdc++.h>
#include <atcoder/lazysegtree>
#include <atcoder/modint>
using namespace std;
using namespace atcoder;
using mint = modint998244353;
vector<mint> ten, one;

struct S {
  mint val;
  int len;
};

using F = int;

S op (S sl, S sr) {
  return {
    sl.val * ten[sr.len] + sr.val,
    sl.len + sr.len
  };
}

S e () {
  return {0, 0};
}

S mapping (F f, S s) {
  if (f == -1) return s;
  return {
    f * one[s.len],
    s.len
  };
}

F composition (F f, F g) {
  if (f == -1) return g;
  return f;
}

F id () {
  return -1;
}

int main () {
  int N, Q;
  cin >> N >> Q;

  ten.assign(N+1, 0);
  one.assign(N+1, 0);
  ten[0] = 1;
  one[0] = 0;
  for (int i = 0; i < N; i++) {
    ten[i+1] = ten[i] * 10;
    one[i+1] = ten[i] + one[i];
  }

  vector<S> a(N, {1, 1});
  lazy_segtree<S, op, e, F, mapping, composition, id> seg(a);

  for (int i = 0; i < Q; i++) {
    int l, r, d;
    cin >> l >> r >> d;

    seg.apply(l - 1, r, d);
    cout << seg.all_prod().val.val() << endl;
  }
}