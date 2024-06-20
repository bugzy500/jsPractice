// remove nth node from last

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head
    let count = 0

    while(current){
        current = current.next
        count++
    }

    if(count == 1 && count == n)
        return null
        
    if(count - n - 1 == -1)
        return head.next

    current = head
    let count2 = 0

    while(current){
        if(count2 >= count - n - 1){
            current.next = current.next?.next || null
            break
        }
        else
            current = current.next

        count2++
    }

    return head
    
};

const obj2 = {
    "value": 1,
    "next": {
        "value": 2,
        "next": {
            "value": 3,
            "next": {
                "value": 4,
                "next": {
                    "value": 5,
                    "next": null
                }
            }
        }
    }
}

const test1 = {
    "value": 3,
    "next": null
}

removeNthFromEnd(obj2, 2)