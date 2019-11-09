#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  int N;
  int A;
  int B;
  cin >> N >> A >> B;
  cout << min((N * A), B) << endl;
}