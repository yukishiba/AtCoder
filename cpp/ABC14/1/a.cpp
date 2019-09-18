#if 0
g++ -std=c++14 "$0" && ./a.out
exit
#endif

#include <bits/stdc++.h>
using namespace std;
  
int main() {
  string S;
  cin >> S;

  vector<string> weather{"Sunny", "Cloudy", "Rainy", "Sunny"};
  int i = find(weather.begin(), weather.end(), S) - weather.begin();
  
  cout << weather[i+1] << endl;
}
