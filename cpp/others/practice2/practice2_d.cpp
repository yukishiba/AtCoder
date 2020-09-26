#include <bits/stdc++.h>
#include <atcoder/maxflow>
using namespace std;
using namespace atcoder;

// code from https://note.com/nullkara/n/nc08c8cf9631c

int main () {
  int N, M;
  cin >> N >> M;

  string S[N+2];
  for (int i = 1; i <= N; i++) {
    cin >> S[i];
    S[i] = '#' + S[i] + '#';
  }
  S[0] = "";
  S[N+1] = "";
  for(int i = 0; i < M + 10; i++) {
    S[0] += "#";
    S[N+1] += "#";
  }

  mf_graph<int> g(N*M+2);
  int s = 0;
  int t = N * M + 1;
  for (int i = 1; i <= N; i++) {
    for (int j = 1; j <= M; j++) {
      int ij = (i - 1) * M + j;
      if (S[i][j] == '.') {
        if ((i + j) % 2 == 0) { // 市松にとる
          g.add_edge(s, ij, 1);
          int dx[] = {0, 0, 1, -1}; // 左右
          int dy[] = {1, -1, 0, 0}; // 上下
          for (int k = 0; k < 4; k++) {
            int y = i + dy[k];
            int x = j + dx[k];
            if (S[y][x] == '.') {
              int ij2 = (y - 1) * M + x;
              g.add_edge(ij, ij2, 1);
            }
          }
          
        } else {
          g.add_edge(ij, t, 1);
        }
      }
    }
  }

  cout << g.flow(s, t) << endl;
  vector<mf_graph<int>::edge> ge = g.edges();

  for (int i = 0; i < (int)ge.size(); i++){
    int flow = ge[i].flow;
    int to = ge[i].to;
    int from = ge[i].from;

    int to_x = (to - 1) % M + 1;
    int to_y = (to - 1) / M + 1;
    int from_x = (from - 1) % M + 1;
    int from_y = (from - 1) / M + 1;

    if (flow != 0 && s != from && t != to) {
      if (from_x + 1 == to_x){
        S[from_y][from_x]='>';
        S[to_y][to_x]='<';
      }
      if (from_x - 1 == to_x){
        S[from_y][from_x]='<';
        S[to_y][to_x]='>';
      }
      if (from_y + 1 == to_y){
        S[from_y][from_x]='v';
        S[to_y][to_x]='^';
      }
      if (from_y - 1 == to_y){
        S[from_y][from_x]='^';
        S[to_y][to_x]='v';
      }
    }
  }

  for (int i = 1; i <= N; i++) {
    for (int j = 1; j <= M; j++) {
      cout << S[i][j];
    }
    cout << endl;
  }
}
