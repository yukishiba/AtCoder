#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N;
  cin >> N;
  long long M[5] = {0,0,0,0,0};
  long long ans = 0;

  int P[10] = {0,0,0,0,0,0,1,1,1,2};
  int Q[10] = {1,1,1,2,2,3,2,2,3,3};
  int R[10] = {2,3,4,3,4,4,3,4,4,4};
  string S;
  for (int i = 0; i < N; i++) {
    cin >> S;
    if (S.at(0) == 'M') M[0]++;
    if (S.at(0) == 'A') M[1]++;
    if (S.at(0) == 'R') M[2]++;
    if (S.at(0) == 'C') M[3]++;
    if (S.at(0) == 'H') M[4]++;
  }
  for (int i = 0; i < 10; i++) {
    ans += M[P[i]] * M[Q[i]] * M[R[i]];
  }
  cout << ans << endl;
}
  