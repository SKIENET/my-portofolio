//FUNCTION EXXPRESSION TO SELECT THE ELEMENT
const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
})

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
})

// var nums = [3,2,6,4];
// var target = 5;
// var twoSum = function(nums, target) {
//    for(let i =0; i < nums.length; i++) {
//        console.log(nums)
//    }
// };

// twoSum(nums,5)