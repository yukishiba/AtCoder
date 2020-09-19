#include <bits/stdc++.h>
using namespace std;

int main () {
  int N, A, B;
  int count = 0;
  bool ans = false;
  cin >> N;
  for(int i = 0; i < N; i++) {
    cin >> A >> B;
    if (A == B) {
      count++;
    } else {
      if (count >= 3) {
        ans = true;
      }
      count = 0;
    }
  }
  if (count >= 3) {
    ans = true;
  }
  cout << (ans ? "Yes" : "No") << endl;
}