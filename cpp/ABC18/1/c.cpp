#include <bits/stdc++.h>
using namespace std;

struct S {
  float x;
  float y;
};

float slope (S a, S b) {
  if (a.x - b.x == 0) return 1e9;
  return (a.y - b.y) / (a.x - b.x);
}

int main () {
  int n;
  cin >> n;
  vector<S> s(n, S{0, 0});
  bool ans = false;
  for (int i = 0; i < n; i++) {
    cin >> s[i].x >> s[i].y;
  }
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        if (ans) break;
        float p1 = slope(s[i], s[j]);
        float p2 = slope(s[i], s[k]);
        if (p1 == p2) ans = true;
      }
      if (ans) break;
    }
    if (ans) break;
  }
  cout << (ans ? "Yes" : "No") << endl;
}