#include <bits/stdc++.h>
using namespace std;

int num (char a) {
  return a - '0';
}

bool solve (string s) {
  int size = s.size();

  if (size == 1) {
    return s == "8";
  } else if (size == 2) {
    if (stoi(s)%8 == 0) return 1;
    swap(s[0], s[1]);
    if (stoi(s)%8 == 0) return 1;
  } else {
    vector<int> count(10);
    fill(count.begin(), count.end(), 0);
    for (int i = 0; i < size; i++) {
      count[num(s[i])]++;
    }
    for (int i = 112; i < 1000; i+=8) {
      vector<int> c(10);
      fill(c.begin(), c.end(), 0);
      string si = to_string(i);
      for (int i = 0; i < 3; i++) {
        c[num(si[i])]++;
      }
      bool temp = true;
      for (int i = 0; i < 10; i++) {
        if (c[i] > count[i]) temp = false;
      }
      if (temp) return 1;
    }
  }
  return 0;
}

int main () {
  string s;
  cin >> s;
  cout << (solve(s) ? "Yes" : "No") << endl;
}