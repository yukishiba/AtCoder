#include <bits/stdc++.h>
using namespace std;

int main () {
  int t[210000];
  int N;
  int at = 0;
  cin >> N;

  for (int i = 0; i < N; i++) {
    int temp;
    cin >> temp;
    t[temp]++;
    while(t[at]) {
      at++;
    }
    cout << at << endl;
  }
}