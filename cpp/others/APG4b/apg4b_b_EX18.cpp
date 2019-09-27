#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;

int main() {
  int N, M;
  cin >> N >> M;
  int A, B;
  vector<vector<char>> Table(N, vector<char>(N, '-'));
  for (int i = 0; i < M; i++) {
    cin >> A >> B;
    Table.at(A - 1).at(B - 1) = 'o';
    Table.at(B - 1).at(A - 1) = 'x';
  }
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      cout << Table.at(i).at(j);
      if (j < N - 1) cout << ' ';
    }
    cout << endl;
  }
}
