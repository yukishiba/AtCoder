#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;

int main() {
  vector<int> data(5);
  for (int i = 0; i < 5; i++) {
    cin >> data.at(i);
  }

  int past;
  string ans = "NO";
  for (int n : data) {
    if (past == n) ans = "YES";
    past = n;
  }
  cout << ans << endl;
}
