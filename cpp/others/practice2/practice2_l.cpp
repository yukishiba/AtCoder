#include <bits/stdc++.h>
#include <atcoder/lazysegtree>
using namespace std;
using namespace atcoder;
using ll = long long;

struct S {
  ll zero, one, inv;
};

using F = int;

S op (S l, S r) {
  return {
    l.zero + r.zero,
    l.one + r.one,
    l.inv + r.inv + l.one * r.zero
  };
}

S e () {
  return {0, 0, 0};
}

S mapping (F f, S s) {
  if (!f) return s;
  return {
    s.one,
    s.zero,
    s.one * s.zero - s.inv
  };
}

F composition (F f, F g) {
  return f ^ g;
}

F id () {
  return 0;
}

int main () {
  int N, Q;
  cin >> N >> Q;

  vector<S> A(N);
  for (int i = 0; i < N; i++) {
    ll input;
    cin >> input;
    A[i] = input ? S{0, 1, 0} : S{1, 0, 0};
  }

  lazy_segtree<S, op, e, F, mapping, composition, id> seg(A);

  for (int i = 0; i < Q; i++) {
    int T, L, R;
    cin >> T >> L >> R;
    L--;

    if (T == 1) {
      seg.apply(L, R, 1);
    } else {
      cout << (seg.prod(L, R).inv) << endl;
    }
  }
}