#include <bits/stdc++.h>
using namespace std;


int main () {
  int H, W;
  cin >> H >> W;

  map<int, int> s;
  multiset<int> vals;

  for (int i = 0; i < W; i++) {
    s[i] = i;
    vals.insert(0);
  }

  for (int i = 0; i < H; i++) {
    int l, r;
    cin >> l >> r;
    l--;
    auto it = s.lower_bound(l);
    int mr = -1;
    while (it != s.end() && it->first <= r) {
      mr = max(mr, it->second);
      int x = it->first - it->second;
      vals.erase(vals.find(x)) ;
      s.erase(it++);
    }
    if (mr != -1 && r < W) {
      vals.insert(r - mr);
      s[r] = mr;
    }
    int ans = -1;
    if (vals.size() > 0) {
      ans = *vals.begin() + (i+1);
    }
    cout << ans << endl;
  }
}
