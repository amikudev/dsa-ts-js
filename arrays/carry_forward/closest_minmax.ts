const closestMinMax = (A: number[]): number => {
    let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;

        A.forEach(num => {
            min = Math.min(min, num);
            max = Math.max(max, num);
        });

        if(min === max) {
            return 1;
        }

        let minIndex = -1;
        let maxIndex = -1;
        let minSize = A.length;

        A.forEach((num, i) => {
            if(num === min) {
                if(maxIndex != -1) {
                    minSize = Math.min(minSize, i - maxIndex + 1);
                }
                minIndex = i;
            } else if(num === max) {
                if(minIndex != -1) {
                    minSize = Math.min(minSize, i - minIndex + 1);
                }
                maxIndex = i;
            }
        });

        return minSize;
};

}

/*
Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3]
Input 2:

A = [2]


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 Only choice is to take both elements.
Explanation 2:

 Take the whole array.*/
