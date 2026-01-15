const neetCode150 = [
            // ARRAYS & HASHING
            { category: "Arrays & Hashing", name: "Contains Duplicate", diff: "Easy", link: "https://leetcode.com/problems/contains-duplicate/" },
            { category: "Arrays & Hashing", name: "Valid Anagram", diff: "Easy", link: "https://leetcode.com/problems/valid-anagram/" },
            { category: "Arrays & Hashing", name: "Two Sum", diff: "Easy", link: "https://leetcode.com/problems/two-sum/" },
            { category: "Arrays & Hashing", name: "Group Anagrams", diff: "Medium", link: "https://leetcode.com/problems/group-anagrams/" },
            { category: "Arrays & Hashing", name: "Top K Frequent Elements", diff: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
            { category: "Arrays & Hashing", name: "Product of Array Except Self", diff: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
            { category: "Arrays & Hashing", name: "Valid Sudoku", diff: "Medium", link: "https://leetcode.com/problems/valid-sudoku/" },
            { category: "Arrays & Hashing", name: "Encode and Decode Strings", diff: "Medium", link: "https://leetcode.com/problems/encode-and-decode-strings/" },
            { category: "Arrays & Hashing", name: "Longest Consecutive Sequence", diff: "Medium", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },

            // TWO POINTERS
            { category: "Two Pointers", name: "Valid Palindrome", diff: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
            { category: "Two Pointers", name: "Two Sum II", diff: "Medium", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
            { category: "Two Pointers", name: "3Sum", diff: "Medium", link: "https://leetcode.com/problems/3sum/" },
            { category: "Two Pointers", name: "Container With Most Water", diff: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" },
            { category: "Two Pointers", name: "Trapping Rain Water", diff: "Hard", link: "https://leetcode.com/problems/trapping-rain-water/" },

            // SLIDING WINDOW
            { category: "Sliding Window", name: "Best Time to Buy/Sell Stock", diff: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
            { category: "Sliding Window", name: "Longest Substring Without Repeating Characters", diff: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
            { category: "Sliding Window", name: "Longest Repeating Character Replacement", diff: "Medium", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
            { category: "Sliding Window", name: "Permutation in String", diff: "Medium", link: "https://leetcode.com/problems/permutation-in-string/" },
            { category: "Sliding Window", name: "Minimum Window Substring", diff: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/" },
            { category: "Sliding Window", name: "Sliding Window Maximum", diff: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/" },

            // STACK
            { category: "Stack", name: "Valid Parentheses", diff: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
            { category: "Stack", name: "Min Stack", diff: "Medium", link: "https://leetcode.com/problems/min-stack/" },
            { category: "Stack", name: "Evaluate Reverse Polish Notation", diff: "Medium", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
            { category: "Stack", name: "Generate Parentheses", diff: "Medium", link: "https://leetcode.com/problems/generate-parentheses/" },
            { category: "Stack", name: "Daily Temperatures", diff: "Medium", link: "https://leetcode.com/problems/daily-temperatures/" },
            { category: "Stack", name: "Car Fleet", diff: "Medium", link: "https://leetcode.com/problems/car-fleet/" },
            { category: "Stack", name: "Largest Rectangle in Histogram", diff: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },

            // BINARY SEARCH
            { category: "Binary Search", name: "Binary Search", diff: "Easy", link: "https://leetcode.com/problems/binary-search/" },
            { category: "Binary Search", name: "Search a 2D Matrix", diff: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
            { category: "Binary Search", name: "Koko Eating Bananas", diff: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas/" },
            { category: "Binary Search", name: "Find Minimum in Rotated Sorted Array", diff: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
            { category: "Binary Search", name: "Search in Rotated Sorted Array", diff: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { category: "Binary Search", name: "Time Based Key-Value Store", diff: "Medium", link: "https://leetcode.com/problems/time-based-key-value-store/" },
            { category: "Binary Search", name: "Median of Two Sorted Arrays", diff: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },

            // LINKED LIST
            { category: "Linked List", name: "Reverse Linked List", diff: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
            { category: "Linked List", name: "Merge Two Sorted Lists", diff: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { category: "Linked List", name: "Reorder List", diff: "Medium", link: "https://leetcode.com/problems/reorder-list/" },
            { category: "Linked List", name: "Remove Nth Node From End", diff: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
            { category: "Linked List", name: "Copy List with Random Pointer", diff: "Medium", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
            { category: "Linked List", name: "Add Two Numbers", diff: "Medium", link: "https://leetcode.com/problems/add-two-numbers/" },
            { category: "Linked List", name: "Linked List Cycle", diff: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
            { category: "Linked List", name: "Find the Duplicate Number", diff: "Medium", link: "https://leetcode.com/problems/find-the-duplicate-number/" },
            { category: "Linked List", name: "LRU Cache", diff: "Medium", link: "https://leetcode.com/problems/lru-cache/" },
            { category: "Linked List", name: "Merge k Sorted Lists", diff: "Hard", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
            { category: "Linked List", name: "Reverse Nodes in k-Group", diff: "Hard", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },

            // TREES
            { category: "Trees", name: "Invert Binary Tree", diff: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/" },
            { category: "Trees", name: "Maximum Depth of Binary Tree", diff: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
            { category: "Trees", name: "Diameter of Binary Tree", diff: "Easy", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
            { category: "Trees", name: "Balanced Binary Tree", diff: "Easy", link: "https://leetcode.com/problems/balanced-binary-tree/" },
            { category: "Trees", name: "Same Tree", diff: "Easy", link: "https://leetcode.com/problems/same-tree/" },
            { category: "Trees", name: "Subtree of Another Tree", diff: "Easy", link: "https://leetcode.com/problems/subtree-of-another-tree/" },
            { category: "Trees", name: "Lowest Common Ancestor (BST)", diff: "Easy", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
            { category: "Trees", name: "Binary Tree Level Order Traversal", diff: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { category: "Trees", name: "Binary Tree Right Side View", diff: "Medium", link: "https://leetcode.com/problems/binary-tree-right-side-view/" },
            { category: "Trees", name: "Count Good Nodes", diff: "Medium", link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
            { category: "Trees", name: "Validate BST", diff: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
            { category: "Trees", name: "Kth Smallest Element in BST", diff: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
            { category: "Trees", name: "Construct Tree from Pre/Inorder", diff: "Medium", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
            { category: "Trees", name: "Binary Tree Max Path Sum", diff: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
            { category: "Trees", name: "Serialize/Deserialize Binary Tree", diff: "Hard", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },

            // TRIES
            { category: "Tries", name: "Implement Trie", diff: "Medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
            { category: "Tries", name: "Design Word Data Structure", diff: "Medium", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
            { category: "Tries", name: "Word Search II", diff: "Hard", link: "https://leetcode.com/problems/word-search-ii/" },

            // HEAP
            { category: "Heap / Priority Queue", name: "Kth Largest in Stream", diff: "Easy", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
            { category: "Heap / Priority Queue", name: "Last Stone Weight", diff: "Easy", link: "https://leetcode.com/problems/last-stone-weight/" },
            { category: "Heap / Priority Queue", name: "K Closest Points", diff: "Medium", link: "https://leetcode.com/problems/k-closest-points-to-origin/" },
            { category: "Heap / Priority Queue", name: "Kth Largest in Array", diff: "Medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
            { category: "Heap / Priority Queue", name: "Task Scheduler", diff: "Medium", link: "https://leetcode.com/problems/task-scheduler/" },
            { category: "Heap / Priority Queue", name: "Design Twitter", diff: "Medium", link: "https://leetcode.com/problems/design-twitter/" },
            { category: "Heap / Priority Queue", name: "Median from Data Stream", diff: "Hard", link: "https://leetcode.com/problems/find-median-from-data-stream/" },

            // BACKTRACKING
            { category: "Backtracking", name: "Subsets", diff: "Medium", link: "https://leetcode.com/problems/subsets/" },
            { category: "Backtracking", name: "Combination Sum", diff: "Medium", link: "https://leetcode.com/problems/combination-sum/" },
            { category: "Backtracking", name: "Permutations", diff: "Medium", link: "https://leetcode.com/problems/permutations/" },
            { category: "Backtracking", name: "Subsets II", diff: "Medium", link: "https://leetcode.com/problems/subsets-ii/" },
            { category: "Backtracking", name: "Combination Sum II", diff: "Medium", link: "https://leetcode.com/problems/combination-sum-ii/" },
            { category: "Backtracking", name: "Word Search", diff: "Medium", link: "https://leetcode.com/problems/word-search/" },
            { category: "Backtracking", name: "Palindrome Partitioning", diff: "Medium", link: "https://leetcode.com/problems/palindrome-partitioning/" },
            { category: "Backtracking", name: "Letter Combinations", diff: "Medium", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
            { category: "Backtracking", name: "N-Queens", diff: "Hard", link: "https://leetcode.com/problems/n-queens/" },

            // GRAPHS
            { category: "Graphs", name: "Number of Islands", diff: "Medium", link: "https://leetcode.com/problems/number-of-islands/" },
            { category: "Graphs", name: "Max Area of Island", diff: "Medium", link: "https://leetcode.com/problems/max-area-of-island/" },
            { category: "Graphs", name: "Clone Graph", diff: "Medium", link: "https://leetcode.com/problems/clone-graph/" },
            { category: "Graphs", name: "Walls and Gates", diff: "Medium", link: "https://leetcode.com/problems/walls-and-gates/" },
            { category: "Graphs", name: "Rotting Oranges", diff: "Medium", link: "https://leetcode.com/problems/rotting-oranges/" },
            { category: "Graphs", name: "Pacific Atlantic Flow", diff: "Medium", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
            { category: "Graphs", name: "Surrounded Regions", diff: "Medium", link: "https://leetcode.com/problems/surrounded-regions/" },
            { category: "Graphs", name: "Course Schedule", diff: "Medium", link: "https://leetcode.com/problems/course-schedule/" },
            { category: "Graphs", name: "Course Schedule II", diff: "Medium", link: "https://leetcode.com/problems/course-schedule-ii/" },
            { category: "Graphs", name: "Redundant Connection", diff: "Medium", link: "https://leetcode.com/problems/redundant-connection/" },
            { category: "Graphs", name: "Number of Connected Comp", diff: "Medium", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
            { category: "Graphs", name: "Graph Valid Tree", diff: "Medium", link: "https://leetcode.com/problems/graph-valid-tree/" },
            { category: "Graphs", name: "Word Ladder", diff: "Hard", link: "https://leetcode.com/problems/word-ladder/" },

            // ADVANCED GRAPHS
            { category: "Advanced Graphs", name: "Reconstruct Itinerary", diff: "Hard", link: "https://leetcode.com/problems/reconstruct-itinerary/" },
            { category: "Advanced Graphs", name: "Min Cost to Connect Points", diff: "Medium", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
            { category: "Advanced Graphs", name: "Network Delay Time", diff: "Medium", link: "https://leetcode.com/problems/network-delay-time/" },
            { category: "Advanced Graphs", name: "Swim in Rising Water", diff: "Hard", link: "https://leetcode.com/problems/swim-in-rising-water/" },
            { category: "Advanced Graphs", name: "Alien Dictionary", diff: "Hard", link: "https://leetcode.com/problems/alien-dictionary/" },
            { category: "Advanced Graphs", name: "Cheapest Flights Within K Stops", diff: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },

            // 1D DP
            { category: "1D DP", name: "Climbing Stairs", diff: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
            { category: "1D DP", name: "Min Cost Climbing Stairs", diff: "Easy", link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
            { category: "1D DP", name: "House Robber", diff: "Medium", link: "https://leetcode.com/problems/house-robber/" },
            { category: "1D DP", name: "House Robber II", diff: "Medium", link: "https://leetcode.com/problems/house-robber-ii/" },
            { category: "1D DP", name: "Longest Palindromic Substring", diff: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
            { category: "1D DP", name: "Palindromic Substrings", diff: "Medium", link: "https://leetcode.com/problems/palindromic-substrings/" },
            { category: "1D DP", name: "Decode Ways", diff: "Medium", link: "https://leetcode.com/problems/decode-ways/" },
            { category: "1D DP", name: "Coin Change", diff: "Medium", link: "https://leetcode.com/problems/coin-change/" },
            { category: "1D DP", name: "Word Break", diff: "Medium", link: "https://leetcode.com/problems/word-break/" },
            { category: "1D DP", name: "Longest Increasing Subseq", diff: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
            { category: "1D DP", name: "Partition Equal Subset Sum", diff: "Medium", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },

            // 2D DP
            { category: "2D DP", name: "Unique Paths", diff: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
            { category: "2D DP", name: "Longest Common Subseq", diff: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/" },
            { category: "2D DP", name: "Stock with Cooldown", diff: "Medium", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
            { category: "2D DP", name: "Coin Change II", diff: "Medium", link: "https://leetcode.com/problems/coin-change-2/" },
            { category: "2D DP", name: "Target Sum", diff: "Medium", link: "https://leetcode.com/problems/target-sum/" },
            { category: "2D DP", name: "Interleaving String", diff: "Medium", link: "https://leetcode.com/problems/interleaving-string/" },
            { category: "2D DP", name: "Longest Increasing Path", diff: "Hard", link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" },
            { category: "2D DP", name: "Distinct Subsequences", diff: "Hard", link: "https://leetcode.com/problems/distinct-subsequences/" },
            { category: "2D DP", name: "Edit Distance", diff: "Medium", link: "https://leetcode.com/problems/edit-distance/" },
            { category: "2D DP", name: "Burst Balloons", diff: "Hard", link: "https://leetcode.com/problems/burst-balloons/" },
            { category: "2D DP", name: "Regular Expression Matching", diff: "Hard", link: "https://leetcode.com/problems/regular-expression-matching/" },

            // GREEDY
            { category: "Greedy", name: "Maximum Subarray", diff: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
            { category: "Greedy", name: "Jump Game", diff: "Medium", link: "https://leetcode.com/problems/jump-game/" },
            { category: "Greedy", name: "Jump Game II", diff: "Medium", link: "https://leetcode.com/problems/jump-game-ii/" },
            { category: "Greedy", name: "Gas Station", diff: "Medium", link: "https://leetcode.com/problems/gas-station/" },
            { category: "Greedy", name: "Hand of Straights", diff: "Medium", link: "https://leetcode.com/problems/hand-of-straights/" },
            { category: "Greedy", name: "Merge Triplets", diff: "Medium", link: "https://leetcode.com/problems/merge-triplets-to-form-target-sum/" },
            { category: "Greedy", name: "Partition Labels", diff: "Medium", link: "https://leetcode.com/problems/partition-labels/" },
            { category: "Greedy", name: "Valid Parenthesis String", diff: "Medium", link: "https://leetcode.com/problems/valid-parenthesis-string/" },

            // INTERVALS
            { category: "Intervals", name: "Insert Interval", diff: "Medium", link: "https://leetcode.com/problems/insert-interval/" },
            { category: "Intervals", name: "Merge Intervals", diff: "Medium", link: "https://leetcode.com/problems/merge-intervals/" },
            { category: "Intervals", name: "Non-overlapping Intervals", diff: "Medium", link: "https://leetcode.com/problems/non-overlapping-intervals/" },
            { category: "Intervals", name: "Meeting Rooms", diff: "Easy", link: "https://leetcode.com/problems/meeting-rooms/" },
            { category: "Intervals", name: "Meeting Rooms II", diff: "Medium", link: "https://leetcode.com/problems/meeting-rooms-ii/" },
            { category: "Intervals", name: "Min Interval Each Query", diff: "Hard", link: "https://leetcode.com/problems/minimum-interval-to-include-each-query/" },

            // MATH
            { category: "Math & Geometry", name: "Rotate Image", diff: "Medium", link: "https://leetcode.com/problems/rotate-image/" },
            { category: "Math & Geometry", name: "Spiral Matrix", diff: "Medium", link: "https://leetcode.com/problems/spiral-matrix/" },
            { category: "Math & Geometry", name: "Set Matrix Zeroes", diff: "Medium", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
            { category: "Math & Geometry", name: "Happy Number", diff: "Easy", link: "https://leetcode.com/problems/happy-number/" },
            { category: "Math & Geometry", name: "Plus One", diff: "Easy", link: "https://leetcode.com/problems/plus-one/" },
            { category: "Math & Geometry", name: "Pow(x, n)", diff: "Medium", link: "https://leetcode.com/problems/powx-n/" },
            { category: "Math & Geometry", name: "Multiply Strings", diff: "Medium", link: "https://leetcode.com/problems/multiply-strings/" },
            { category: "Math & Geometry", name: "Detect Squares", diff: "Medium", link: "https://leetcode.com/problems/detect-squares/" },

            // BIT MANIPULATION
            { category: "Bit Manipulation", name: "Single Number", diff: "Easy", link: "https://leetcode.com/problems/single-number/" },
            { category: "Bit Manipulation", name: "Number of 1 Bits", diff: "Easy", link: "https://leetcode.com/problems/number-of-1-bits/" },
            { category: "Bit Manipulation", name: "Counting Bits", diff: "Easy", link: "https://leetcode.com/problems/counting-bits/" },
            { category: "Bit Manipulation", name: "Reverse Bits", diff: "Easy", link: "https://leetcode.com/problems/reverse-bits/" },
            { category: "Bit Manipulation", name: "Missing Number", diff: "Easy", link: "https://leetcode.com/problems/missing-number/" },
            { category: "Bit Manipulation", name: "Sum of Two Integers", diff: "Medium", link: "https://leetcode.com/problems/sum-of-two-integers/" },
            { category: "Bit Manipulation", name: "Reverse Integer", diff: "Medium", link: "https://leetcode.com/problems/reverse-integer/" }
        ];