#include <bits/stdc++.h>
using namespace std;
using ll = long long;

double distance (double x1, double x2, double y1, double y2) {
  return abs(x1 - x2) + abs(y1 - y2);
}

int main () {
  ll N;
  cin >> N;

  vector<ll> x(N);
  vector<ll> y(N);

  ll sumx = 0;
  ll sumy = 0;
  for (ll i = 0; i < N; i++) {
    cin >> x[i] >> y[i];
    sumx += x[i];
    sumy += y[i];
  }
  double cx = sumx / N;
  double cy = sumy / N;

  double far = 0;
  ll farIndex = -1;
  for (ll i = 0; i < N; i++) {
    double dist = distance(cx, x[i], cy, y[i]);
    if (far <= dist) {
      far = dist;
      farIndex = i;
    }
  }

  ll ans = 0;
  for (ll i = 0; i < N; i++) {
    ll dist = distance(x[farIndex], x[i], y[farIndex], y[i]);
    if (ans < dist) {
      ans = dist;
    }
  }

  cout << ans << endl;
}