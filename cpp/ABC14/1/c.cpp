#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N; // 参加者
  int K; // 持ち点数
  int Q; // 回数
  int A;
  cin >> N >> K >> Q;
  vector<int> user(N, 0);
  K -= Q;

  for (int i = 0; i < Q; i++) {
    cin >> A;
    user[A-1]++;
  }

  for (int i = 0; i < N; i++) {
    cout << (user[i] + K > 0 ? "Yes" : "No") << endl;
  }
}
