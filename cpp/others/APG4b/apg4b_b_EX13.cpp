#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N;
  cin >> N;

  int AVE = 0;
  vector<int> A(N);
  for (int i = 0; i < N; i++) {
    cin >> A.at(i);
    AVE += A.at(i);
  }
  AVE /= N;

  for (int i = 0; i < N; i++) {
    cout << abs(A.at(i) - AVE) << endl;
  } 
}
