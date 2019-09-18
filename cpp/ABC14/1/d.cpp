#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N; // 品物
  int M; // 割引券数
  long long temp;
  cin >> N >> M;

  priority_queue<int> A;
  for (int i = 0; i < N; i++) { cin >> temp; A.push(temp); }
  for (int i = 0; i < M; i++) {
    temp = A.top();
    A.pop();
    A.push(temp / 2);
  }
  temp = 0;
  for (int i = 0; i < N; i++) {
    temp += A.top(); A.pop();
  }
  cout << temp << endl;
}
