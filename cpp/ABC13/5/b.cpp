#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N;
  cin >> N;
  
  vector<int> p(N);
  vector<int> asc(N);

  for (int i = 0; i < N; i++) {
    cin >> p[i];
    asc[i] = p[i];
  }
  sort(asc.begin(), asc.end());

  int count = 0;
  for (int i = 0; i < N; i++) {
    if (p[i] != asc[i]) count++;
  }
  
  cout << ((count == 2 || count == 0) ? "YES" : "NO") << endl;
}