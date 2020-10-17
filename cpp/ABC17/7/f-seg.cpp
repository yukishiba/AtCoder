#include <bits/stdc++.h>
#include <atcoder/all>
using namespace std;
using namespace atcoder;

// https://opt-cp.com/cp/lazysegtree-practice/

const int INF = 300000;

struct S {
  int min, l;
};

using F = int;

S op (S l, S r) {
  return {min(l.min, r.min), min(l.l, r.l)};
}

S e () {
  return {INF, INF};
}

S mapping (F f, S s) {
  if (f == INF) return s;
  return {s.l + f, s.l};
}

F composition (F f, F g) {
  if (f == INF) return g;
  return f;
}

F id () {
  return INF;
}

int main () {
  int H, W;
  cin >> H >> W;

  vector<S> a(W);
  for (int i = 0; i < W; i++) {
    a[i] = {0, i};
  }
  lazy_segtree<S, op, e, F, mapping, composition, id> seg(a);

  for (int i = 0; i < H; i++) {
    int l, r;
    cin >> l >> r;
    l--;
    int x = W;
    if (l > 0) x = seg.prod(l-1, l).min;
    // printf("l: %d, r: %d, x: %d, x - l + 1: %d\n", l, r, x, (x - l + 1));
    seg.apply(l, r, x - l + 1);

    int dist = seg.all_prod().min;
    int ans = -1;
    if (dist < W) ans = dist + i + 1;
    // printf("dist: %d, ans: %d\n", dist, ans);
    cout << ans << endl;
  }
}
