#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main() {
  ll A, B, X;
  cin >> A >> B >> X;

  int min = 0;
  int max = 1e9 + 1;
  while (max - min > 1) {
    int n = (max + min) / 2;
    int m = n;
    int d = 0;
    while (m > 0) {
      ++d;
      m/=10;
    }
    ll dest = A * n + B * d;
    if (dest == X) {
      min = n;
      break;
    } else if (dest < X) {
      min = n;
    } else {
      max = n;
    }
  }
  cout << min << endl;
}

// $ sh filename.cpp
// で実行するためのテンプレートです。