// Linked List Cycle


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    const mySet = new Set()

    let current = head

    while(typeof current === 'object'){
        current = current.next
        mySet.add(current)
        if(typeof current !== 'object' && mySet.has(current)){
            return true
        }
    }

    return false
};


const ll = {
    val: 3,
    next: {
        val: 2,
        next: {
            val: 0,
            next: {
                val: -4,
                next: 1
            }
        }
    }
}


console.log(hasCycle(ll))