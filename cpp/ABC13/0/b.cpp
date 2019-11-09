#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N;
  int X;
  cin >> N >> X;

  vector<int> L(N);
  int dist = 0;
  int count = 1;
  for (int i = 0; i < N; i++) {
    cin >> L[i];
    dist += L[i];
    if (dist <= X) count++;
  }
  cout << count << endl;
}