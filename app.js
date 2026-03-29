// ═══════════════════════════════════════════════════
//  DATA — All 183 problems from your Excel sheet
// ═══════════════════════════════════════════════════
const DSA_DATA = [
  { id:1, name:"Two Pointers", questions:[
    {name:"Pair with Target Sum",difficulty:"easy",links:[{url:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/",platform:"LeetCode"}]},
    {name:"Rearrange 0 and 1",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1",platform:"GFG"}]},
    {name:"Remove Duplicates",difficulty:"easy",links:[{url:"https://leetcode.com/problems/remove-duplicates-from-sorted-list/",platform:"LeetCode"},{url:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/",platform:"LeetCode"},{url:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",platform:"LeetCode"}]},
    {name:"Squaring a Sorted Array",difficulty:"easy",links:[{url:"https://leetcode.com/problems/squares-of-a-sorted-array/",platform:"LeetCode"}]},
    {name:"Triplet Sum to Zero",difficulty:"medium",links:[{url:"https://leetcode.com/problems/3sum/",platform:"LeetCode"}]},
    {name:"Triplet Sum Close to Target",difficulty:"medium",links:[{url:"https://leetcode.com/problems/3sum-closest/",platform:"LeetCode"}]},
    {name:"Triplets with Smaller Sum",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",platform:"GFG"}]},
    {name:"Subarrays with Product Less than a Target",difficulty:"medium",links:[{url:"https://leetcode.com/problems/subarray-product-less-than-k/",platform:"LeetCode"}]},
    {name:"Valid Palindrome",difficulty:"easy",links:[{url:"https://leetcode.com/problems/valid-palindrome/description/",platform:"LeetCode"}]},
    {name:"Container With Most Water",difficulty:"medium",links:[{url:"https://leetcode.com/problems/container-with-most-water/description/",platform:"LeetCode"}]},
    {name:"Trapping Rain Water",difficulty:"hard",links:[{url:"https://leetcode.com/problems/trapping-rain-water/description/",platform:"LeetCode"}]},
    {name:"Dutch National Flag Problem",difficulty:"medium",links:[{url:"https://leetcode.com/problems/sort-colors/description/",platform:"LeetCode"}]},
    {name:"Challenge: Quadruple Sum to Target",difficulty:"medium",links:[{url:"https://leetcode.com/problems/4sum/",platform:"LeetCode"}]},
    {name:"Challenge: Comparing Strings with Backspaces",difficulty:"medium",links:[{url:"https://leetcode.com/problems/backspace-string-compare/",platform:"LeetCode"}]},
    {name:"Challenge: Minimum Window Sort",difficulty:"medium",links:[{url:"https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",platform:"LeetCode"},{url:"https://www.ideserve.co.in/learn/minimum-length-subarray-sorting-which-results-in-sorted-array",platform:"Other"}]},
  ]},
  { id:2, name:"Fast & Slow Pointers", questions:[
    {name:"LinkedList Cycle",difficulty:"easy",links:[{url:"https://leetcode.com/problems/linked-list-cycle/",platform:"LeetCode"}]},
    {name:"Start of LinkedList Cycle",difficulty:"medium",links:[{url:"https://leetcode.com/problems/linked-list-cycle-ii/",platform:"LeetCode"}]},
    {name:"Happy Number",difficulty:"medium",links:[{url:"https://leetcode.com/problems/happy-number/",platform:"LeetCode"}]},
    {name:"Find Duplicate Number",difficulty:"medium",links:[{url:"https://leetcode.com/problems/find-the-duplicate-number/description/",platform:"LeetCode"}]},
    {name:"Middle of the LinkedList",difficulty:"easy",links:[{url:"https://leetcode.com/problems/middle-of-the-linked-list/",platform:"LeetCode"}]},
    {name:"Challenge: Palindrome LinkedList",difficulty:"medium",links:[{url:"https://leetcode.com/problems/palindrome-linked-list/",platform:"LeetCode"}]},
    {name:"Challenge: Rearrange a LinkedList",difficulty:"medium",links:[{url:"https://leetcode.com/problems/reorder-list/",platform:"LeetCode"}]},
    {name:"Challenge: Cycle in a Circular Array",difficulty:"hard",links:[{url:"https://leetcode.com/problems/circular-array-loop/",platform:"LeetCode"}]},
  ]},
  { id:3, name:"Sliding Window", questions:[
    {name:"Maximum Sum Subarray of Size K",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1",platform:"GFG"}]},
    {name:"Smallest Subarray with a given sum",difficulty:"easy",links:[{url:"https://leetcode.com/problems/minimum-size-subarray-sum/",platform:"LeetCode"}]},
    {name:"Longest Substring with K Distinct Characters",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1",platform:"GFG"}]},
    {name:"Fruits into Baskets",difficulty:"medium",links:[{url:"https://leetcode.com/problems/fruit-into-baskets/",platform:"LeetCode"}]},
    {name:"No-repeat Substring",difficulty:"hard",links:[{url:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",platform:"LeetCode"}]},
    {name:"Longest Substring with Same Letters after Replacement",difficulty:"hard",links:[{url:"https://leetcode.com/problems/longest-repeating-character-replacement/",platform:"LeetCode"}]},
    {name:"Longest Subarray with Ones after Replacement",difficulty:"hard",links:[{url:"https://leetcode.com/problems/max-consecutive-ones-iii/",platform:"LeetCode"}]},
    {name:"Minimum Size Subarray Sum",difficulty:"medium",links:[{url:"https://leetcode.com/problems/minimum-size-subarray-sum/",platform:"LeetCode"}]},
    {name:"Minimum Size Substring",difficulty:"hard",links:[{url:"https://leetcode.com/problems/minimum-window-substring/description/",platform:"LeetCode"}]},
    {name:"Best Time To Buy And Sell Stock",difficulty:"easy",links:[{url:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",platform:"LeetCode"}]},
    {name:"Longest Substring Without Repeating Characters",difficulty:"medium",links:[{url:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",platform:"LeetCode"}]},
    {name:"Sliding Window Maximum",difficulty:"hard",links:[{url:"https://leetcode.com/problems/sliding-window-maximum/description/",platform:"LeetCode"}]},
    {name:"Permutation in String",difficulty:"medium",links:[{url:"https://leetcode.com/problems/permutation-in-string/description/",platform:"LeetCode"}]},
    {name:"Challenge: Permutation in a String",difficulty:"hard",links:[{url:"https://leetcode.com/problems/permutation-in-string/",platform:"LeetCode"}]},
    {name:"Challenge: String Anagrams",difficulty:"hard",links:[{url:"https://leetcode.com/problems/find-all-anagrams-in-a-string/",platform:"LeetCode"}]},
    {name:"Challenge: Words Concatenation",difficulty:"hard",links:[{url:"https://leetcode.com/problems/substring-with-concatenation-of-all-words/",platform:"LeetCode"}]},
  ]},
  { id:4, name:"Kadane's Pattern", questions:[
    {name:"Maximum Subarray Sum",difficulty:"medium",links:[{url:"https://leetcode.com/problems/maximum-subarray/",platform:"LeetCode"}]},
    {name:"Minimum Subarray Sum",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1",platform:"GFG"}]},
    {name:"Maximum Product Subarray",difficulty:"medium",links:[{url:"https://leetcode.com/problems/maximum-product-subarray/",platform:"LeetCode"}]},
    {name:"Maximum Subarray Sum with One Deletion",difficulty:"medium",links:[{url:"https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/description/",platform:"LeetCode"}]},
    {name:"Maximum Absolute Sum of Any Subarray",difficulty:"medium",links:[{url:"https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/",platform:"LeetCode"}]},
    {name:"Maximum Sum in Circular Array",difficulty:"medium",links:[{url:"https://leetcode.com/problems/maximum-sum-circular-subarray/",platform:"LeetCode"}]},
  ]},
  { id:5, name:"Prefix Sum", questions:[
    {name:"Subarray Sum Equals K",difficulty:"easy",links:[{url:"https://leetcode.com/problems/subarray-sum-equals-k/description/",platform:"LeetCode"}]},
    {name:"Find Pivot Index",difficulty:"easy",links:[{url:"https://leetcode.com/problems/find-pivot-index/description/",platform:"LeetCode"}]},
    {name:"Subarray Sums Divisible By K",difficulty:"medium",links:[{url:"https://leetcode.com/problems/subarray-sums-divisible-by-k/description/",platform:"LeetCode"}]},
    {name:"Contiguous Array",difficulty:"medium",links:[{url:"https://leetcode.com/problems/contiguous-array/description/",platform:"LeetCode"}]},
    {name:"Challenge: Shortest Subarray With Sum at Least K",difficulty:"hard",links:[{url:"https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/",platform:"LeetCode"}]},
    {name:"Challenge: Count Range Sum",difficulty:"hard",links:[{url:"https://leetcode.com/problems/count-of-range-sum/description/",platform:"LeetCode"}]},
  ]},
  { id:6, name:"Merge Intervals", questions:[
    {name:"Merge Intervals",difficulty:"medium",links:[{url:"https://leetcode.com/problems/merge-intervals/description/",platform:"LeetCode"}]},
    {name:"Insert Interval",difficulty:"medium",links:[{url:"https://leetcode.com/problems/insert-interval/",platform:"LeetCode"}]},
    {name:"Intervals Intersection",difficulty:"medium",links:[{url:"https://leetcode.com/problems/interval-list-intersections/description/",platform:"LeetCode"}]},
    {name:"Overlapping Intervals",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/",platform:"GFG"}]},
    {name:"Challenge: Minimum Meeting Rooms",difficulty:"hard",links:[{url:"https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1",platform:"GFG"}]},
    {name:"Challenge: Maximum CPU Load",difficulty:"hard",links:[{url:"https://www.geeksforgeeks.org/maximum-cpu-load-from-the-given-list-of-jobs/",platform:"GFG"}]},
    {name:"Challenge: Employee Free Time",difficulty:"hard",links:[{url:"https://www.codertrain.co/employee-free-time",platform:"Other"}]},
  ]},
  { id:7, name:"Cyclic Sort", questions:[
    {name:"Cyclic Sort",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/sort-an-array-which-contain-1-to-n-values-in-on-using-cycle-sort/",platform:"GFG"}]},
    {name:"Find the Missing Number",difficulty:"easy",links:[{url:"https://leetcode.com/problems/missing-number/",platform:"LeetCode"}]},
    {name:"Find all Missing Numbers",difficulty:"easy",links:[{url:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",platform:"LeetCode"}]},
    {name:"Find the Duplicate Number",difficulty:"easy",links:[{url:"https://leetcode.com/problems/find-the-duplicate-number/",platform:"LeetCode"}]},
    {name:"Find all Duplicate Numbers",difficulty:"easy",links:[{url:"https://leetcode.com/problems/find-all-duplicates-in-an-array/",platform:"LeetCode"}]},
    {name:"Challenge: Find the Corrupt Pair",difficulty:"easy",links:[{url:"https://thecodingsimplified.com/find-currupt-pair/",platform:"Other"}]},
    {name:"Challenge: Find the Smallest Missing Positive Number",difficulty:"medium",links:[{url:"https://leetcode.com/problems/first-missing-positive/",platform:"LeetCode"}]},
    {name:"Challenge: Find the First K Missing Positive Numbers",difficulty:"hard",links:[{url:"https://thecodingsimplified.com/find-the-first-k-missing-positive-number/",platform:"Other"}]},
  ]},
  { id:8, name:"In-place Reversal of LinkedList", questions:[
    {name:"Reverse a LinkedList",difficulty:"easy",links:[{url:"https://leetcode.com/problems/reverse-linked-list/",platform:"LeetCode"}]},
    {name:"Reverse a Sub-list",difficulty:"medium",links:[{url:"https://leetcode.com/problems/reverse-linked-list-ii/",platform:"LeetCode"}]},
    {name:"Reverse List in Pairs",difficulty:"medium",links:[{url:"https://leetcode.com/problems/swap-nodes-in-pairs/description/",platform:"LeetCode"}]},
    {name:"Reverse every K-element Sub-list",difficulty:"hard",links:[{url:"https://leetcode.com/problems/reverse-nodes-in-k-group/",platform:"LeetCode"}]},
    {name:"Challenge: Reverse nodes in EVEN Length Groups",difficulty:"hard",links:[{url:"https://leetcode.com/problems/reverse-nodes-in-even-length-groups/description/",platform:"LeetCode"}]},
    {name:"Challenge: Rotate a LinkedList",difficulty:"medium",links:[{url:"https://leetcode.com/problems/rotate-list/",platform:"LeetCode"}]},
  ]},
  { id:9, name:"Stack", questions:[
    {name:"Remove Adjacent Duplicates",difficulty:"easy",links:[{url:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/",platform:"LeetCode"}]},
    {name:"Balanced Parentheses",difficulty:"easy",links:[{url:"https://leetcode.com/problems/valid-parentheses/description/",platform:"LeetCode"}]},
    {name:"Next Greater Element",difficulty:"easy",links:[{url:"https://leetcode.com/problems/next-greater-element-ii/description/",platform:"LeetCode"}]},
    {name:"Daily Temperatures",difficulty:"easy",links:[{url:"https://leetcode.com/problems/daily-temperatures/",platform:"LeetCode"}]},
    {name:"Remove Nodes From Linked List",difficulty:"easy",links:[{url:"https://leetcode.com/problems/remove-nodes-from-linked-list/",platform:"LeetCode"}]},
    {name:"Remove All Adjacent Duplicates in String II",difficulty:"medium",links:[{url:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",platform:"LeetCode"}]},
    {name:"Simplify Path",difficulty:"medium",links:[{url:"https://leetcode.com/problems/simplify-path/",platform:"LeetCode"}]},
    {name:"Remove K Digits",difficulty:"hard",links:[{url:"https://leetcode.com/problems/remove-k-digits/",platform:"LeetCode"}]},
  ]},
  { id:10, name:"Hash Maps", questions:[
    {name:"First Non-repeating Character",difficulty:"easy",links:[{url:"https://leetcode.com/problems/first-unique-character-in-a-string/",platform:"LeetCode"}]},
    {name:"Maximum Number of Balloons",difficulty:"easy",links:[{url:"https://leetcode.com/problems/maximum-number-of-balloons/",platform:"LeetCode"}]},
    {name:"Longest Palindrome",difficulty:"easy",links:[{url:"https://leetcode.com/problems/longest-palindrome/",platform:"LeetCode"}]},
    {name:"Ransom Note",difficulty:"easy",links:[{url:"https://leetcode.com/problems/ransom-note/",platform:"LeetCode"}]},
  ]},
  { id:11, name:"Binary Search", questions:[
    {name:"Binary Search Basic",difficulty:"easy",links:[{url:"https://leetcode.com/problems/binary-search/",platform:"LeetCode"}]},
    {name:"Upper Bound / Ceiling",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1",platform:"GFG"}]},
    {name:"First and Last Position",difficulty:"medium",links:[{url:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",platform:"LeetCode"}]},
    {name:"Count Number of Occurrences",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1",platform:"GFG"}]},
    {name:"Search in Infinite Sorted Array",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/",platform:"GFG"}]},
    {name:"Peak Index in Mountain",difficulty:"medium",links:[{url:"https://leetcode.com/problems/peak-index-in-a-mountain-array/",platform:"LeetCode"}]},
    {name:"Find Peak in Mountain Range",difficulty:"medium",links:[{url:"https://leetcode.com/problems/find-peak-element/",platform:"LeetCode"}]},
    {name:"Find Minimum in Rotated Sorted Array",difficulty:"medium",links:[{url:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",platform:"LeetCode"}]},
    {name:"Find Number of Rotations to Sorted Array",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/rotation4723/1",platform:"GFG"}]},
    {name:"Search in Rotated Sorted Array",difficulty:"medium",links:[{url:"https://leetcode.com/problems/search-in-rotated-sorted-array/description/",platform:"LeetCode"}]},
    {name:"KOKO Eating Bananas",difficulty:"medium",links:[{url:"https://leetcode.com/problems/koko-eating-bananas/",platform:"LeetCode"}]},
    {name:"Min Days to Make M Bouquets",difficulty:"medium",links:[{url:"https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",platform:"LeetCode"}]},
    {name:"Aggressive Cows",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/problems/aggressive-cows/1",platform:"GFG"}]},
    {name:"H Index 2",difficulty:"medium",links:[{url:"https://leetcode.com/problems/h-index-ii/description/",platform:"LeetCode"}]},
    {name:"Max Candies to K Children",difficulty:"medium",links:[{url:"https://leetcode.com/problems/maximum-candies-allocated-to-k-children/description/",platform:"LeetCode"}]},
    {name:"Capacity to Ship Packages in D Days",difficulty:"medium",links:[{url:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/",platform:"LeetCode"}]},
    {name:"Book Allocation Problem",difficulty:"hard",links:[{url:"https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",platform:"GFG"}]},
    {name:"Split Largest Array",difficulty:"hard",links:[{url:"https://leetcode.com/problems/split-array-largest-sum/description/",platform:"LeetCode"}]},
    {name:"Search 2D Matrix",difficulty:"medium",links:[{url:"https://leetcode.com/problems/search-a-2d-matrix/",platform:"LeetCode"}]},
    {name:"Search 2D Matrix II",difficulty:"hard",links:[{url:"https://leetcode.com/problems/search-a-2d-matrix-ii/description/",platform:"LeetCode"}]},
    {name:"Kth Smallest in Sorted Matrix",difficulty:"medium",links:[{url:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/",platform:"LeetCode"}]},
    {name:"Kth Smallest in Multiplication Matrix",difficulty:"hard",links:[{url:"https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/description/",platform:"LeetCode"}]},
    {name:"Median of 2 Sorted Arrays",difficulty:"hard",links:[{url:"https://leetcode.com/problems/median-of-two-sorted-arrays/",platform:"LeetCode"}]},
  ]},
  { id:12, name:"Heap Pattern", questions:[
    {name:"Kth Smallest",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1",platform:"GFG"}]},
    {name:"Kth Largest",difficulty:"medium",links:[{url:"https://leetcode.com/problems/kth-largest-element-in-an-array/description/",platform:"LeetCode"}]},
    {name:"Top K Frequent Elements",difficulty:"medium",links:[{url:"https://leetcode.com/problems/top-k-frequent-elements/description/",platform:"LeetCode"}]},
    {name:"Top K Frequent Words",difficulty:"medium",links:[{url:"https://leetcode.com/problems/top-k-frequent-words/description/",platform:"LeetCode"}]},
    {name:"K Closest Points to Origin",difficulty:"medium",links:[{url:"https://leetcode.com/problems/k-closest-points-to-origin/description/",platform:"LeetCode"}]},
    {name:"Find K Closest Elements",difficulty:"medium",links:[{url:"https://leetcode.com/problems/find-k-closest-elements/description/",platform:"LeetCode"}]},
    {name:"Kth Weakest Row in Matrix",difficulty:"easy",links:[{url:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/",platform:"LeetCode"}]},
    {name:"Merge K Sorted Arrays",difficulty:"medium",links:[{url:"https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",platform:"GFG"}]},
    {name:"Kth Smallest in Sorted Matrix",difficulty:"medium",links:[{url:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/",platform:"LeetCode"}]},
    {name:"Last Stone Weight",difficulty:"easy",links:[{url:"https://leetcode.com/problems/last-stone-weight/description/",platform:"LeetCode"}]},
    {name:"CPU Task Scheduler",difficulty:"medium",links:[{url:"https://leetcode.com/problems/task-scheduler/description/",platform:"LeetCode"}]},
    {name:"Reorganize String",difficulty:"medium",links:[{url:"https://leetcode.com/problems/reorganize-string/",platform:"LeetCode"}]},
    {name:"Min Number of Refueling Stops",difficulty:"hard",links:[{url:"https://leetcode.com/problems/minimum-number-of-refueling-stops/description/",platform:"LeetCode"}]},
    {name:"IPO",difficulty:"hard",links:[{url:"https://leetcode.com/problems/ipo/description/",platform:"LeetCode"}]},
    {name:"Course Scheduler 3",difficulty:"hard",links:[{url:"https://leetcode.com/problems/course-schedule-iii/description/",platform:"LeetCode"}]},
    {name:"Find Median in Data Stream",difficulty:"hard",links:[{url:"https://leetcode.com/problems/find-median-from-data-stream/description/",platform:"LeetCode"}]},
    {name:"Sliding Window Median",difficulty:"hard",links:[{url:"https://leetcode.com/problems/sliding-window-median/description/",platform:"LeetCode"}]},
  ]},
  { id:13, name:"Recursion & Backtracking", questions:[
    {name:"Fibonacci",difficulty:"easy",links:[{url:"https://leetcode.com/problems/fibonacci-number/description/",platform:"LeetCode"},{url:"https://www.youtube.com/watch?v=j4wjZqzhMqc&t",platform:"YouTube"}]},
    {name:"Check if String is Palindrome",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/palindrome-string0817/1",platform:"GFG"},{url:"https://www.youtube.com/watch?v=j4wjZqzhMqc&t",platform:"YouTube"}]},
    {name:"Check if Array is Sorted",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1",platform:"GFG"},{url:"https://www.youtube.com/watch?v=-gC-QEdpvO4",platform:"YouTube"}]},
    {name:"Sum of Digits of a Number",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/sum-of-digits1742/1",platform:"GFG"},{url:"https://www.youtube.com/watch?v=-gC-QEdpvO4",platform:"YouTube"}]},
    {name:"Remove Occurrences of a Character in String",difficulty:"easy",links:[{url:"https://www.geeksforgeeks.org/problems/remove-all-occurrences-of-a-character-in-a-string/1",platform:"GFG"},{url:"https://www.youtube.com/watch?v=-gC-QEdpvO4",platform:"YouTube"}]},
    {name:"Generate Parentheses",difficulty:"medium",links:[{url:"https://leetcode.com/problems/generate-parentheses/description/",platform:"LeetCode"}]},
    {name:"Letter Combinations of Phone Number",difficulty:"medium",links:[{url:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/",platform:"LeetCode"},{url:"https://www.youtube.com/watch?v=IKfIT6uFOcs",platform:"YouTube"}]},
    {name:"Permutations",difficulty:"medium",links:[{url:"https://leetcode.com/problems/permutations/description/",platform:"LeetCode"}]},
    {name:"Combination Sum",difficulty:"medium",links:[{url:"https://leetcode.com/problems/combination-sum/description/",platform:"LeetCode"}]},
    {name:"Palindrome Partition",difficulty:"medium",links:[{url:"https://leetcode.com/problems/palindrome-partitioning/description/",platform:"LeetCode"}]},
  ]},
  { id:14, name:"Tree Pattern", questions:[
    {name:"Inorder Traversal",difficulty:"easy",links:[{url:"https://leetcode.com/problems/binary-tree-inorder-traversal/description/",platform:"LeetCode"}]},
    {name:"Preorder Traversal",difficulty:"easy",links:[{url:"https://leetcode.com/problems/binary-tree-preorder-traversal/description/",platform:"LeetCode"}]},
    {name:"Postorder Traversal",difficulty:"easy",links:[{url:"https://leetcode.com/problems/binary-tree-postorder-traversal/description/",platform:"LeetCode"}]},
    {name:"Level Order Traversal",difficulty:"medium",links:[{url:"https://leetcode.com/problems/binary-tree-level-order-traversal/description/",platform:"LeetCode"}]},
    {name:"ZigZag Order Traversal",difficulty:"medium",links:[{url:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/",platform:"LeetCode"}]},
    {name:"Level Order II",difficulty:"medium",links:[{url:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/",platform:"LeetCode"}]},
    {name:"Invert Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/invert-binary-tree/description/",platform:"LeetCode"}]},
    {name:"Symmetric Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/symmetric-tree/description/",platform:"LeetCode"}]},
    {name:"Same Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/same-tree/description/",platform:"LeetCode"}]},
    {name:"Subtree of Another Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/subtree-of-another-tree/description/",platform:"LeetCode"}]},
    {name:"Flip Equivalent Tree",difficulty:"medium",links:[{url:"https://leetcode.com/problems/flip-equivalent-binary-trees/description/",platform:"LeetCode"}]},
    {name:"LCA of Binary Tree",difficulty:"medium",links:[{url:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/",platform:"LeetCode"}]},
    {name:"Search in Binary Search Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/search-in-a-binary-search-tree/",platform:"LeetCode"}]},
    {name:"LCA of BST",difficulty:"medium",links:[{url:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/",platform:"LeetCode"}]},
    {name:"LCA of Deepest Leaves",difficulty:"medium",links:[{url:"https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/description/",platform:"LeetCode"}]},
    {name:"Two Sum IV (BST)",difficulty:"easy",links:[{url:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/",platform:"LeetCode"}]},
    {name:"Kth Smallest Element in BST",difficulty:"medium",links:[{url:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/",platform:"LeetCode"}]},
    {name:"Minimum Depth of Binary Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/minimum-depth-of-binary-tree/description/",platform:"LeetCode"}]},
    {name:"Maximum Depth of Binary Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/maximum-depth-of-binary-tree/description/",platform:"LeetCode"}]},
    {name:"Balanced Binary Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/balanced-binary-tree/description/",platform:"LeetCode"}]},
    {name:"Diameter of Binary Tree",difficulty:"easy",links:[{url:"https://leetcode.com/problems/diameter-of-binary-tree/description/",platform:"LeetCode"}]},
    {name:"Check Completeness of Binary Tree",difficulty:"medium",links:[{url:"https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/",platform:"LeetCode"}]},
    {name:"Validate BST",difficulty:"medium",links:[{url:"https://leetcode.com/problems/validate-binary-search-tree/description/",platform:"LeetCode"}]},
    {name:"Recover BST",difficulty:"medium",links:[{url:"https://leetcode.com/problems/recover-binary-search-tree/description/",platform:"LeetCode"}]},
    {name:"Path Sum",difficulty:"easy",links:[{url:"https://leetcode.com/problems/path-sum/description/",platform:"LeetCode"}]},
    {name:"Path Sum II",difficulty:"medium",links:[{url:"https://leetcode.com/problems/path-sum-ii/",platform:"LeetCode"}]},
    {name:"Sum of Root to Leaf",difficulty:"medium",links:[{url:"https://leetcode.com/problems/sum-root-to-leaf-numbers/description/",platform:"LeetCode"}]},
    {name:"Maximum Path Sum",difficulty:"hard",links:[{url:"https://leetcode.com/problems/binary-tree-maximum-path-sum/description/",platform:"LeetCode"}]},
    {name:"Construct Tree from Preorder and Inorder",difficulty:"medium",links:[{url:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/",platform:"LeetCode"}]},
    {name:"Construct Tree from Postorder and Inorder",difficulty:"medium",links:[{url:"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/",platform:"LeetCode"}]},
    {name:"Sorted Array to BST",difficulty:"easy",links:[{url:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/",platform:"LeetCode"}]},
    {name:"Serialize and Deserialize Binary Tree",difficulty:"hard",links:[{url:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/",platform:"LeetCode"}]},
  ]},
  { id:15, name:"Strings", questions:[]},
  { id:16, name:"Linked List", questions:[]},
  { id:17, name:"Stack & Queues", questions:[]},
  { id:18, name:"Graphs", questions:[]},
];

// ═══════════════════════════════════════════════════
//  FIREBASE SETUP
// ═══════════════════════════════════════════════════
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as fbSignOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMFxrys-Fya5505cOzwyshnRfjdoyNKGI",
  authDomain: "dsavault-ajitesh.firebaseapp.com",
  projectId: "dsavault-ajitesh",
  storageBucket: "dsavault-ajitesh.firebasestorage.app",
  messagingSenderId: "47888601117",
  appId: "1:47888601117:web:ca679ae72ca29872e9f6f4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ═══════════════════════════════════════════════════
//  STATE & STORAGE
// ═══════════════════════════════════════════════════
let currentUser = null;
let allExpanded = false;
let _cloudProgress = {};

function loadProgress() {
  if (currentUser) return _cloudProgress;
  try { return JSON.parse(localStorage.getItem('dsa_progress_guest') || '{}'); } catch { return {}; }
}

async function saveProgress(progress) {
  if (currentUser) {
    _cloudProgress = progress;
    try {
      await setDoc(doc(db, 'progress', currentUser.uid), { data: JSON.stringify(progress) });
    } catch(e) { console.error('Save error', e); }
  } else {
    localStorage.setItem('dsa_progress_guest', JSON.stringify(progress));
  }
}

// Save entire DSA_DATA (custom patterns/questions) to Firestore or localStorage
async function saveData() {
  const serialized = JSON.stringify(DSA_DATA);
  if (currentUser) {
    try {
      await setDoc(doc(db, 'progress', currentUser.uid), { dsaData: serialized }, { merge: true });
    } catch(e) { console.error('Save data error', e); }
  } else {
    localStorage.setItem('dsa_data_guest', serialized);
  }
}

async function loadData() {
  let saved = null;
  if (currentUser) {
    try {
      const snap = await getDoc(doc(db, 'progress', currentUser.uid));
      if (snap.exists() && snap.data().dsaData) {
        saved = JSON.parse(snap.data().dsaData);
      }
    } catch(e) { console.error('Load data error', e); }
  } else {
    const s = localStorage.getItem('dsa_data_guest');
    if (s) saved = JSON.parse(s);
  }
  if (saved && saved.length > 0) {
    DSA_DATA.length = 0;
    saved.forEach(p => DSA_DATA.push(p));
  } else if (currentUser) {
    // First time login — no saved data yet, save the default DSA_DATA to cloud
    await saveData();
  }
}

async function loadCloudProgress() {
  if (!currentUser) return;
  try {
    const snap = await getDoc(doc(db, 'progress', currentUser.uid));
    if (snap.exists()) {
      _cloudProgress = JSON.parse(snap.data().data || '{}');
      // Also load DSA data from same snapshot to avoid double read
      if (snap.data().dsaData) {
        const saved = JSON.parse(snap.data().dsaData);
        if (saved && saved.length > 0) {
          DSA_DATA.length = 0;
          saved.forEach(p => DSA_DATA.push(p));
        }
      }
    } else {
      // Brand new user — migrate guest progress and save default data
      const guest = localStorage.getItem('dsa_progress_guest');
      _cloudProgress = guest ? JSON.parse(guest) : {};
      await setDoc(doc(db, 'progress', currentUser.uid), {
        data: JSON.stringify(_cloudProgress),
        dsaData: JSON.stringify(DSA_DATA)
      });
    }
  } catch(e) { _cloudProgress = {}; }
}

// ═══════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════
function openModal(tab) {
  document.getElementById('modalOverlay').classList.add('open');
  switchTab(tab || 'signin');
  document.getElementById('modalError').textContent = '';
  document.getElementById('modalSuccess').textContent = '';
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

function switchTab(tab) {
  const isSI = tab === 'signin';
  document.getElementById('signinForm').style.display = isSI ? '' : 'none';
  document.getElementById('signupForm').style.display = isSI ? 'none' : '';
  document.querySelectorAll('.modal-tab').forEach((t,i)=>t.classList.toggle('active', i===(isSI?0:1)));
  document.getElementById('modalTitle').textContent = isSI ? 'Welcome Back' : 'Create Account';
  document.getElementById('modalSub').textContent = isSI ? 'Sign in to sync your progress' : 'Join to track your DSA journey';
  document.getElementById('modalError').textContent = '';
  document.getElementById('modalSuccess').textContent = '';
}

async function signIn() {
  const email = document.getElementById('siEmail').value.trim();
  const pass = document.getElementById('siPass').value;
  const err = document.getElementById('modalError');
  if (!email || !pass) { err.textContent = 'Please fill in all fields.'; return; }
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    // onAuthStateChanged handles the rest
  } catch(e) {
    if (e.code === 'auth/invalid-credential' || e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
      err.textContent = 'Invalid email or password.';
    } else {
      err.textContent = e.message;
    }
  }
}

async function signUp() {
  const name = document.getElementById('suName').value.trim();
  const email = document.getElementById('suEmail').value.trim();
  const pass = document.getElementById('suPass').value;
  const err = document.getElementById('modalError');
  const suc = document.getElementById('modalSuccess');
  if (!name || !email || !pass) { err.textContent = 'Please fill in all fields.'; return; }
  if (pass.length < 6) { err.textContent = 'Password must be at least 6 characters.'; return; }
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(cred.user, { displayName: name });
    suc.textContent = 'Account created! Welcome, ' + name + '!';
    // onAuthStateChanged handles the rest
  } catch(e) {
    if (e.code === 'auth/email-already-in-use') {
      err.textContent = 'An account with this email already exists.';
    } else {
      err.textContent = e.message;
    }
  }
}

async function signOut() {
  await fbSignOut(auth);
}

function onLogin() {
  closeModal();
  document.getElementById('userBadge').classList.add('visible');
  document.getElementById('userDisplayName').textContent = currentUser.name || currentUser.email;
  document.getElementById('userEmailDisplay').textContent = currentUser.email;
  document.getElementById('signInBtn').style.display = 'none';
  document.getElementById('signUpBtn').style.display = 'none';
  document.getElementById('guestBanner').classList.add('hidden');
  showToast('Welcome back, ' + (currentUser.name || currentUser.email) + '! 👋', 'success');
  renderAll();
}

function onLogout() {
  currentUser = null;
  _cloudProgress = {};
  document.getElementById('userBadge').classList.remove('visible');
  document.getElementById('userBadge').classList.remove('drop-open');
  document.getElementById('signInBtn').style.display = '';
  document.getElementById('signUpBtn').style.display = '';
  document.getElementById('guestBanner').classList.remove('hidden');
  showToast('Signed out successfully', 'success');
  renderAll();
}

function toggleUserDropdown() {
  document.getElementById('userBadge').classList.toggle('drop-open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const badge = document.getElementById('userBadge');
  if (badge && !badge.contains(e.target)) {
    badge.classList.remove('drop-open');
  }
});

// ═══════════════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════════════
function renderAll() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const diff = document.getElementById('diffFilter').value;
  const plat = document.getElementById('platFilter').value;
  const progress = loadProgress();
  const container = document.getElementById('patternsList');
  container.innerHTML = '';

  let totalQ = 0, totalSolved = 0;

  DSA_DATA.forEach(pattern => {
    // Filter questions
    const qs = pattern.questions.filter(q => {
      const matchSearch = !search || q.name.toLowerCase().includes(search) || pattern.name.toLowerCase().includes(search);
      const matchDiff = !diff || q.difficulty === diff;
      const matchPlat = !plat || q.links.some(l => l.platform === plat);
      return matchSearch && matchDiff && matchPlat;
    });
    if (search && qs.length === 0) return; // hide empty patterns when searching

    totalQ += qs.length;
    const solved = qs.filter(q => progress[pattern.id+'_'+q.name]).length;
    totalSolved += solved;
    const pct = qs.length ? Math.round(solved/qs.length*100) : 0;

    const card = document.createElement('div');
    card.className = 'pattern-card' + (allExpanded ? ' open' : '');
    card.id = 'pc_' + pattern.id;

    card.innerHTML = `
      <div class="pattern-header" onclick="togglePattern(${pattern.id})">
        <span class="pattern-chevron">▶</span>
        <div class="pattern-num">${pattern.id}</div>
        <div class="pattern-title">${pattern.name}</div>
        <div class="pattern-count">${solved}/${qs.length} Completed</div>
        <div class="pattern-progress-wrap">
          <div class="pattern-bar"><div class="pattern-bar-fill" style="width:${pct}%"></div></div>
          <div class="pattern-pct">${pct}%</div>
        </div>
        <div class="ctx-wrap pattern-ctx" onclick="event.stopPropagation()">
          <button class="ctx-btn" onclick="toggleCtxMenu('pm_${pattern.id}',event)" title="Options">⋯</button>
          <div class="ctx-menu" id="pm_${pattern.id}">
            <button class="ctx-item" onclick="openRenamePattern(${pattern.id})">✏️ Rename Pattern</button>
            <div class="ctx-sep"></div>
            <button class="ctx-item danger" onclick="askDeletePattern(${pattern.id})">🗑️ Delete Pattern</button>
          </div>
        </div>
      </div>
      <div class="questions-list" id="ql_${pattern.id}">
        ${qs.length === 0 ? '<div class="empty"><div class="empty-icon">📭</div><div>No questions yet — add one below!</div></div>' : ''}
        ${qs.map(q => renderQuestion(q, pattern.id, progress)).join('')}
      </div>
      <div class="add-q-panel">
        <h4>➕ Add New Question</h4>
        <div class="add-q-form">
          <input type="text" class="add-q-name" id="aqn_${pattern.id}" placeholder="Question name">
          <input type="url" class="add-q-link" id="aql_${pattern.id}" placeholder="Problem link (https://...)">
          <select class="add-q-diff" id="aqd_${pattern.id}">
            <option value="">No Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button class="btn btn-add-q" onclick="addQuestion(${pattern.id})">Add</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  updateStats(totalSolved, totalQ);
}

function renderQuestion(q, patternId, progress) {
  const key = patternId+'_'+q.name;
  const done = !!progress[key];
  const diff = q.difficulty || '';
  const wrapCls = diff ? 'diff-'+diff : 'diff-none';
  const linksHtml = q.links.map((l,i) => {
    const cls = l.platform==='LeetCode'?'lc':l.platform==='GFG'?'gfg':l.platform==='YouTube'?'yt':'';
    const icon = l.platform==='LeetCode'?'🔗':l.platform==='GFG'?'🌿':l.platform==='YouTube'?'▶':'🔗';
    const label = q.links.length > 1 ? (l.platform + ' '+(i+1)) : l.platform;
    return `<a href="${l.url}" target="_blank" class="q-link ${cls}">${icon} ${label}</a>`;
  }).join('');

  const qNameSafe = q.name.replace(/'/g,"\\'").replace(/"/g,'&quot;');

  return `<div class="question-row" id="qr_${patternId}_${encodeURIComponent(q.name)}">
    <div class="q-check ${done?'checked':''}" onclick="toggleQ(${patternId},'${qNameSafe}',this)"></div>
    <div class="q-name ${done?'done':''}">${q.name}</div>
    <div class="q-diff-wrap ${wrapCls}" title="Click to change difficulty">
      <select class="q-diff-select" onchange="editDifficulty(${patternId},'${qNameSafe}',this)">
        <option value="" ${!diff?'selected':''}>—</option>
        <option value="easy"   ${diff==='easy'?'selected':''}>EASY</option>
        <option value="medium" ${diff==='medium'?'selected':''}>MEDIUM</option>
        <option value="hard"   ${diff==='hard'?'selected':''}>HARD</option>
      </select>
    </div>
    <div class="q-links">${linksHtml}</div>
    <div class="ctx-wrap" onclick="event.stopPropagation()">
      <button class="ctx-btn" onclick="toggleCtxMenu('qm_${patternId}_${encodeURIComponent(q.name)}',event)" title="Options">⋯</button>
      <div class="ctx-menu" id="qm_${patternId}_${encodeURIComponent(q.name)}">
        <button class="ctx-item" onclick="openRenameQuestion(${patternId},'${qNameSafe}')">✏️ Rename Problem</button>
        <button class="ctx-item" onclick="openChangeLink(${patternId},'${qNameSafe}')">🔗 Change Link</button>
        <div class="ctx-sep"></div>
        <button class="ctx-item danger" onclick="askDelete(${patternId},'${qNameSafe}')">🗑️ Delete Problem</button>
      </div>
    </div>
  </div>`;
}

async function toggleQ(patternId, qName, el) {
  const progress = loadProgress();
  const key = patternId + '_' + qName;
  progress[key] = !progress[key];
  if (!progress[key]) delete progress[key];
  await saveProgress(progress);
  el.classList.toggle('checked');
  const row = el.closest('.question-row');
  row.querySelector('.q-name').classList.toggle('done', !!progress[key]);
  // Update pattern header count
  updatePatternCount(patternId);
  updateStats();
}

function updatePatternCount(patternId) {
  const progress = loadProgress();
  const pattern = DSA_DATA.find(p=>p.id===patternId);
  if (!pattern) return;
  const solved = pattern.questions.filter(q=>progress[patternId+'_'+q.name]).length;
  const total = pattern.questions.length;
  const pct = total ? Math.round(solved/total*100) : 0;
  const card = document.getElementById('pc_'+patternId);
  if (!card) return;
  card.querySelector('.pattern-count').textContent = `${solved}/${total} Completed`;
  card.querySelector('.pattern-bar-fill').style.width = pct+'%';
  card.querySelector('.pattern-pct').textContent = pct+'%';
}

function updateStats(sv, tot) {
  const progress = loadProgress();
  if (sv === undefined) {
    sv = 0; tot = 0;
    DSA_DATA.forEach(p => {
      tot += p.questions.length;
      sv += p.questions.filter(q=>progress[p.id+'_'+q.name]).length;
    });
  }
  document.getElementById('solvedCount').textContent = sv;
  document.getElementById('solvedOf').textContent = 'of ' + tot;
  document.getElementById('remainCount').textContent = tot - sv;
  const pct = tot ? Math.round(sv/tot*100) : 0;
  document.getElementById('progressPct').textContent = pct+'%';
  const circumference = 2 * Math.PI * 28;
  const offset = circumference - (pct/100)*circumference;
  document.getElementById('progressCircle').style.strokeDashoffset = offset;

  // Rank
  let rank, tip;
  if (pct < 10) { rank='Novice'; tip='↗ Keep pushing!'; }
  else if (pct < 25) { rank='Beginner'; tip='🔥 Good momentum!'; }
  else if (pct < 50) { rank='Intermediate'; tip='💪 Halfway there!'; }
  else if (pct < 75) { rank='Advanced'; tip='🚀 Almost elite!'; }
  else if (pct < 100) { rank='Expert'; tip='⭐ Nearly there!'; }
  else { rank='Master'; tip='🏆 Completed!'; }
  document.getElementById('rankName').textContent = rank;
  document.getElementById('rankTip').textContent = tip;
}

function togglePattern(id) {
  const card = document.getElementById('pc_'+id);
  card.classList.toggle('open');
}

function toggleAll() {
  allExpanded = !allExpanded;
  document.querySelectorAll('.pattern-card').forEach(c=>c.classList.toggle('open', allExpanded));
  document.querySelector('.btn-expand').textContent = allExpanded ? 'Collapse All' : 'Expand All';
}

async function addQuestion(patternId) {
  const nameEl = document.getElementById('aqn_'+patternId);
  const linkEl = document.getElementById('aql_'+patternId);
  const diffEl = document.getElementById('aqd_'+patternId);
  const name = nameEl.value.trim();
  const link = linkEl.value.trim();
  const diff = diffEl.value;
  if (!name) { showToast('Please enter a question name', 'error'); return; }
  if (!link || !link.startsWith('http')) { showToast('Please enter a valid URL', 'error'); return; }

  const pattern = DSA_DATA.find(p=>p.id===patternId);
  let platform = 'Other';
  if (link.includes('leetcode')) platform = 'LeetCode';
  else if (link.includes('geeksforgeeks')) platform = 'GFG';
  else if (link.includes('youtube')) platform = 'YouTube';

  pattern.questions.push({ name, difficulty: diff, links:[{url:link, platform}] });
  nameEl.value = ''; linkEl.value = ''; diffEl.value = '';
  await saveData();
  showToast('Question added to ' + pattern.name + '!', 'success');
  renderAll();
  setTimeout(() => {
    const card = document.getElementById('pc_'+patternId);
    if (card) card.classList.add('open');
  }, 50);
}

function editDifficulty(patternId, qName, selectEl) {
  const newDiff = selectEl.value;
  const pattern = DSA_DATA.find(p=>p.id===patternId);
  const q = pattern.questions.find(q=>q.name===qName);
  if (!q) return;
  q.difficulty = newDiff;
  const wrap = selectEl.closest('.q-diff-wrap');
  wrap.className = 'q-diff-wrap ' + (newDiff ? 'diff-'+newDiff : 'diff-none');
  showToast('Difficulty updated!', 'success');
}

// ── 3-DOT MENU ──
function toggleCtxMenu(id, evt) {
  evt.stopPropagation();
  const menu = document.getElementById(id);
  const isOpen = menu.classList.contains('open');
  closeAllMenus();
  if (!isOpen) menu.classList.add('open');
}
function closeAllMenus() {
  document.querySelectorAll('.ctx-menu.open').forEach(m => m.classList.remove('open'));
}
document.addEventListener('click', closeAllMenus);

// ── CONFIRM DELETE ──
let _pendingDelete = null;
function askDelete(patternId, qName) {
  closeAllMenus();
  _pendingDelete = { type:'question', patternId, qName };
  document.getElementById('confirmQName').textContent = '"' + qName + '"';
  document.getElementById('confirmOverlay').classList.add('open');
}
function askDeletePattern(patternId) {
  closeAllMenus();
  const pattern = DSA_DATA.find(p=>p.id===patternId);
  _pendingDelete = { type:'pattern', patternId };
  document.getElementById('confirmQName').textContent = '"' + pattern.name + '"';
  document.getElementById('confirmOverlay').classList.add('open');
}
function closeConfirm() {
  _pendingDelete = null;
  document.getElementById('confirmOverlay').classList.remove('open');
}
async function confirmDelete() {
  if (!_pendingDelete) return;
  if (_pendingDelete.type === 'question') {
    const { patternId, qName } = _pendingDelete;
    const pattern = DSA_DATA.find(p=>p.id===patternId);
    const idx = pattern.questions.findIndex(q=>q.name===qName);
    if (idx !== -1) pattern.questions.splice(idx, 1);
    const progress = loadProgress();
    delete progress[patternId+'_'+qName];
    await saveProgress(progress);
    await saveData();
    closeConfirm();
    showToast('Problem deleted.', 'success');
    const wasOpen = document.getElementById('pc_'+patternId)?.classList.contains('open');
    renderAll();
    if (wasOpen) setTimeout(()=>{ const c=document.getElementById('pc_'+patternId); if(c) c.classList.add('open'); },50);
  } else {
    const { patternId } = _pendingDelete;
    const idx = DSA_DATA.findIndex(p=>p.id===patternId);
    if (idx !== -1) DSA_DATA.splice(idx, 1);
    await saveData();
    closeConfirm();
    showToast('Pattern deleted.', 'success');
    renderAll();
  }
}

// ── RENAME / CHANGE LINK ──
let _pendingRename = null;
function openRenamePattern(patternId) {
  closeAllMenus();
  const pattern = DSA_DATA.find(p=>p.id===patternId);
  _pendingRename = { type:'pattern', patternId };
  document.getElementById('renameTitle').textContent = 'Rename Pattern';
  document.getElementById('renameInput').value = pattern.name;
  document.getElementById('renameLinkInput').style.display = 'none';
  document.getElementById('renameOverlay').classList.add('open');
  setTimeout(()=>document.getElementById('renameInput').focus(), 50);
}
function openRenameQuestion(patternId, qName) {
  closeAllMenus();
  _pendingRename = { type:'question', patternId, qName };
  document.getElementById('renameTitle').textContent = 'Rename Problem';
  document.getElementById('renameInput').value = qName;
  document.getElementById('renameLinkInput').style.display = 'none';
  document.getElementById('renameOverlay').classList.add('open');
  setTimeout(()=>document.getElementById('renameInput').focus(), 50);
}
function openChangeLink(patternId, qName) {
  closeAllMenus();
  const pattern = DSA_DATA.find(p=>p.id===patternId);
  const q = pattern.questions.find(q=>q.name===qName);
  _pendingRename = { type:'link', patternId, qName };
  document.getElementById('renameTitle').textContent = 'Change Primary Link';
  document.getElementById('renameInput').style.display = 'none';
  const li = document.getElementById('renameLinkInput');
  li.style.display = '';
  li.value = q.links[0]?.url || '';
  document.getElementById('renameOverlay').classList.add('open');
  setTimeout(()=>li.focus(), 50);
}
function closeRename() {
  _pendingRename = null;
  document.getElementById('renameOverlay').classList.remove('open');
  document.getElementById('renameInput').style.display = '';
  document.getElementById('renameLinkInput').style.display = 'none';
}
async function saveRename() {
  if (!_pendingRename) return;
  const { type, patternId, qName } = _pendingRename;

  if (type === 'pattern') {
    const newName = document.getElementById('renameInput').value.trim();
    if (!newName) { showToast('Name cannot be empty', 'error'); return; }
    const pattern = DSA_DATA.find(p=>p.id===patternId);
    pattern.name = newName;
    await saveData();
    closeRename();
    showToast('Pattern renamed!', 'success');
    const wasOpen = document.getElementById('pc_'+patternId)?.classList.contains('open');
    renderAll();
    if (wasOpen) setTimeout(()=>{ const c=document.getElementById('pc_'+patternId); if(c) c.classList.add('open'); },50);

  } else if (type === 'question') {
    const newName = document.getElementById('renameInput').value.trim();
    if (!newName) { showToast('Name cannot be empty', 'error'); return; }
    const pattern = DSA_DATA.find(p=>p.id===patternId);
    const q = pattern.questions.find(q=>q.name===qName);
    const progress = loadProgress();
    const oldKey = patternId+'_'+qName;
    const newKey = patternId+'_'+newName;
    if (progress[oldKey]) { progress[newKey] = progress[oldKey]; delete progress[oldKey]; await saveProgress(progress); }
    q.name = newName;
    await saveData();
    closeRename();
    showToast('Problem renamed!', 'success');
    const wasOpen = document.getElementById('pc_'+patternId)?.classList.contains('open');
    renderAll();
    if (wasOpen) setTimeout(()=>{ const c=document.getElementById('pc_'+patternId); if(c) c.classList.add('open'); },50);

  } else if (type === 'link') {
    const newUrl = document.getElementById('renameLinkInput').value.trim();
    if (!newUrl || !newUrl.startsWith('http')) { showToast('Please enter a valid URL', 'error'); return; }
    const pattern = DSA_DATA.find(p=>p.id===patternId);
    const q = pattern.questions.find(q=>q.name===qName);
    let platform = 'Other';
    if (newUrl.includes('leetcode')) platform = 'LeetCode';
    else if (newUrl.includes('geeksforgeeks')) platform = 'GFG';
    else if (newUrl.includes('youtube')) platform = 'YouTube';
    q.links[0] = { url: newUrl, platform };
    await saveData();
    closeRename();
    showToast('Link updated!', 'success');
    const wasOpen = document.getElementById('pc_'+patternId)?.classList.contains('open');
    renderAll();
    if (wasOpen) setTimeout(()=>{ const c=document.getElementById('pc_'+patternId); if(c) c.classList.add('open'); },50);
  }
}

let _addPatternOpen = false;
function toggleAddPatternForm() {
  _addPatternOpen = !_addPatternOpen;
  document.getElementById('addPatternForm').classList.toggle('open', _addPatternOpen);
  document.getElementById('addPatternBtn').style.display = _addPatternOpen ? 'none' : '';
  if (_addPatternOpen) document.getElementById('newPatternName').focus();
  else document.getElementById('newPatternName').value = '';
}
async function addNewPattern() {
  const nameEl = document.getElementById('newPatternName');
  const name = nameEl.value.trim();
  if (!name) { showToast('Please enter a pattern name', 'error'); return; }
  const maxId = DSA_DATA.reduce((m,p)=>Math.max(m,p.id),0);
  DSA_DATA.push({ id: maxId+1, name: name, questions: [] });
  nameEl.value = '';
  _addPatternOpen = false;
  document.getElementById('addPatternForm').classList.remove('open');
  document.getElementById('addPatternBtn').style.display = '';
  await saveData();
  showToast('Pattern "' + name + '" created!', 'success');
  renderAll();
  setTimeout(()=>{
    const card = document.getElementById('pc_'+(maxId+1));
    if (card) { card.classList.add('open'); card.scrollIntoView({behavior:'smooth',block:'center'}); }
  }, 80);
}

function changeDiff(patternId, qName, selectEl) {
  editDifficulty(patternId, qName, selectEl);
}
function deleteQuestion(patternId, qName) {
  askDelete(patternId, qName);
}
function deletePattern(patternId) {
  askDeletePattern(patternId);
}

function updateDiffColor(sel) {
  sel.classList.remove('diff-easy','diff-medium','diff-hard');
  if (sel.value) sel.classList.add('diff-'+sel.value);
}

function showToast(msg, type='success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type + ' show';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════
document.getElementById('confirmOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeConfirm();
});
document.getElementById('renameOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeRename();
});
document.getElementById('renameInput').addEventListener('keydown', e => { if(e.key==='Enter') saveRename(); });
document.getElementById('renameLinkInput').addEventListener('keydown', e => { if(e.key==='Enter') saveRename(); });
document.getElementById('searchInput').addEventListener('input', renderAll);
document.getElementById('diffFilter').addEventListener('change', renderAll);
document.getElementById('platFilter').addEventListener('change', renderAll);
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', e => { if (e.key==='Escape') { closeModal(); closeConfirm(); closeRename(); } });
document.addEventListener('keydown', e => { if (e.key==='Enter' && _addPatternOpen) addNewPattern(); });

// Firebase auth state listener — fires on login/logout/page load
onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = { uid: user.uid, email: user.email, name: user.displayName || user.email };
    await loadCloudProgress(); // this now also loads DSA_DATA in one read
    onLogin();
  } else {
    await loadData(); // load guest data from localStorage
    onLogout();
  }
});

// ═══════════════════════════════════════════════════
//  EXPOSE FUNCTIONS TO GLOBAL SCOPE (needed for onclick in HTML)
// ═══════════════════════════════════════════════════
window.toggleUserDropdown = toggleUserDropdown;
window.openModal = openModal;
window.closeModal = closeModal;
window.switchTab = switchTab;
window.signIn = signIn;
window.signUp = signUp;
window.signOut = signOut;
window.toggleAll = toggleAll;
window.togglePattern = togglePattern;
window.toggleCtxMenu = toggleCtxMenu;
window.closeAllMenus = closeAllMenus;
window.toggleQ = toggleQ;
window.toggleCheck = toggleQ;
window.changeDiff = changeDiff;
window.editDifficulty = editDifficulty;
window.updateDiffColor = updateDiffColor;
window.askDelete = askDelete;
window.askDeletePattern = askDeletePattern;
window.deleteQuestion = deleteQuestion;
window.deletePattern = deletePattern;
window.openRenamePattern = openRenamePattern;
window.openRenameQuestion = openRenameQuestion;
window.openChangeLink = openChangeLink;
window.closeRename = closeRename;
window.saveRename = saveRename;
window.closeConfirm = closeConfirm;
window.confirmDelete = confirmDelete;
window.toggleAddPatternForm = toggleAddPatternForm;
window.addNewPattern = addNewPattern;
window.addQuestion = addQuestion;
window.showToast = showToast;

renderAll();
