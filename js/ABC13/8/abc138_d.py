## D - Ki
## TLE

N, Q = map(int, input().split())
ab = {}
pq = {}
for i in range(N-1):
  arr = input().split()
  if not arr[0] in ab:
    ab[arr[0]] = []
  ab[arr[0]].append(arr[1])
for i in range(Q):
  arr = input().split()
  if not arr[0] in pq:
    pq[arr[0]] = 0
  pq[arr[0]] += int(arr[1])

ans = [0] * (N + 1)
que = ['1']
while len(que) > 0:
  n = str(que.pop(0))
  if n in pq:
    ans[int(n)] += int(pq[n])
  if n in ab:
    for i in range(len(ab[n])):
      j = int(ab[n][i])
      ans[j] += ans[int(n)]
      que.append(str(j))
ans.pop(0)

print(' '.join(map(str, ans)))