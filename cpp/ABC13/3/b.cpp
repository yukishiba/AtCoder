#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N;
  int D;
  cin >> N >> D;
  vector<vector<int>> X(N, vector<int> (D));

  for (int i = 0; i < N; i++) {
    for (int j = 0; j < D; j++) {
      cin >> X[i][j];
    }
  }

  int count = 0;
  for (int i = 0; i < N; i++) {
    for (int j = i + 1; j < N; j++) {
      int sum = 0;
      for (int d = 0; d < D; d++) {
        sum += pow(X[i][d] - X[j][d], 2);
      }
      float dist = sqrt(sum);
      if (dist == floor(dist)) count++;
    }
  }
  cout << count << endl;
}