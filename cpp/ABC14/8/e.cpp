#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main() {
  ll N;
  cin >> N;

  ll ans = 0;
  ll temp = 0;
  if (N % 2 == 0) {
    temp = N / 2;
    while (temp > 0) {
      temp /= 5;
      ans += temp;
    }
  }
  cout << ans << endl;
}

// $ sh filename.cpp
// で実行するためのテンプレートです。