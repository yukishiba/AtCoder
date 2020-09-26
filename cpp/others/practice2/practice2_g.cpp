#include <bits/stdc++.h>
#include <atcoder/scc>
using namespace std;
using namespace atcoder;

int main () {
  int N, M;
  cin >> N >> M;

  scc_graph graph(N);

  for (int i = 0; i < M; i++) {
    int a, b;
    cin >> a >> b;
    graph.add_edge(a, b);
  }

  vector<vector<int>> output = graph.scc();
  cout << output.size() << endl;
  for (vector<int> k : output) {
    cout << k.size();
    for (int i : k) {
      cout << ' ' << i;
    }
    cout << endl;
  }
}