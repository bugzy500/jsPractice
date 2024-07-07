// add two numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let temp = Number(l1.val) + Number(l2.val)
    const resultList = {
        val : temp % 10,
        next: null
    }
    let carryOver = temp >=10 ? 1 : 0;
    l1 = l1.next
    l2 = l2.next
    let current = resultList

    while(l1?.val !== undefined || l2?.val !== undefined || carryOver !== 0){
        if(l1?.val !== undefined && l2?.val !== undefined){
            temp = Number(l1.val) + Number(l2.val) + carryOver
            l1 = l1.next
            l2 = l2.next
        }
        else if(l1?.val !== undefined){
            temp = Number(l1.val) + carryOver
            l1 = l1.next
        }
        else if(l2?.val !== undefined){
            temp = Number(l2.val) + carryOver
            l2 = l2.next
        }
        else if(carryOver !== 0){
            temp = carryOver
        }

        let value = temp % 10
        carryOver = temp >=10 ? 1 : 0
        current.next = {
            val : value,
            next : null
        }
        current = current.next
    }
    
    return resultList
};

function createLinkedList2(arr){
    let linkedList = {
        val: arr[0],
        next: null
    }

    let current = linkedList

    for(let i = 1; i < arr.length; i++){
        current.next = {
            val: arr[i],
            next: null
        }
        current = current.next
    }

    return linkedList
}

const l1 = createLinkedList2([1, 0, 9]);

const l2 = createLinkedList2([5, 7, 8]);

addTwoNumbers(l1, l2)

