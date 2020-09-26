#include <bits/stdc++.h>
#include <atcoder/dsu>
using namespace std;
using namespace atcoder;

int main () {
  int N, M;
  cin >> N >> M;
  dsu city(N);
  for (int i = 0; i < M; i++) {
    int a, b;
    cin >> a >> b;
    city.merge(a - 1, b - 1);
  }
  
  vector<vector<int>> group = city.groups();
  cout << (group.size() - 1) << endl;
}