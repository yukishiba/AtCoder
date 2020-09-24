#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int mod = 1e9 + 7;
ll powmod(ll x,ll y){;
  ll res=1;
  for(ll i=0;i<y;i++){
    res=res*x%mod;
  }
  return res;
}

int main () {
  ll N;
  cin >> N;
  ll ans = powmod(10,N) - powmod(9,N) - powmod(9,N) + powmod(8,N);
  ans%=mod;
  ans=(ans+mod)%mod;
  cout << ans << endl;
}