#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  long long N;
  cin >> N;
  cout << (N - 1) * N / 2 << endl;
}