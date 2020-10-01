#include <bits/stdc++.h>
#include <atcoder/segtree>
using namespace std;
using namespace atcoder;
using ll = long long;

ll op(ll a, ll b) {
  return max(a, b);
}
ll e() {
  return 0;
}
int main () {
  int N, K;
  cin >> N >> K;
  segtree<ll, op, e> S(300001);

  for (int i = 0; i < N; i++) {
    int a;
    cin >> a;
    S.set(a, S.prod(max(a-K, 0), min(a+K+1, 300001)) + 1);
  }

  cout << S.prod(0, 300001) << endl;
}