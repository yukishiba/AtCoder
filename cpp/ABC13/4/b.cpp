#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  float N;
  int D;
  cin >> N >> D;
  cout << ceil(N / (D * 2 + 1)) << endl;
}