#include <bits/stdc++.h>
#include <atcoder/convolution>
using namespace std;
using namespace atcoder;
using ll = long long;

int main () {
  int N, M;

  cin >> N >> M;
  vector<ll> a(N), b(M), c;

  for (int i = 0; i < N; i++) {
    cin >> a[i];
  }
  for (int i = 0; i < M; i++) {
    cin >> b[i];
  }

  c = convolution<998244353>(a, b);
  cout << c[0];
  for (int i = 1; i < (int)c.size(); i++) {
    cout << ' ' << c[i];
  }
  cout << endl;
}