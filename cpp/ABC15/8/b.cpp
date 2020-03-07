#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
using ll = long long;
  
int main() {
  ll N, A, B;
  cin >> N >> A >> B;

  ll count = N / (A + B) * A;
  count += min((N % (A + B)), A);

  cout << count << endl;
}

// $ sh filename.cpp
// で実行するためのテンプレートです。