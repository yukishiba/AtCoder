#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N;
  cin >> N;
  vector<long long> M(5, 0);
  long long ans = 0;

  vector<int> P = {0,0,0,0,0,0,1,1,1,2};
  vector<int> Q = {1,1,1,2,2,3,2,2,3,3};
  vector<int> R = {2,3,4,3,4,4,3,4,4,4};
  string S;
  for (int i = 0; i < N; i++) {
    cin >> S;
    if (S.at(0) == 'M') M.at(0)++;
    if (S.at(0) == 'A') M.at(1)++;
    if (S.at(0) == 'R') M.at(2)++;
    if (S.at(0) == 'C') M.at(3)++;
    if (S.at(0) == 'H') M.at(4)++;
  }
  for (int i = 0; i < 10; i++) {
    ans += M.at(P.at(i)) * M.at(Q.at(i)) * M.at(R.at(i));
  }
  cout << ans << endl;
}
  