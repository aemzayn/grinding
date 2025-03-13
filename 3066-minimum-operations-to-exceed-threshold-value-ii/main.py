class Solution(object):
    def minOperations(self, nums, k):
        heapify(nums)
        res = 0

        while len(nums) >= 2 and nums[0] < k:
          one = heappop(nums)
          two = heappop(nums)
          heappush(nums, one * 2 + two)
          res += 1

        return res
