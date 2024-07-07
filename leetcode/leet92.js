// reverse linked list 2

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if(left == right)
        return head

    let current = head

    for(let i = 0; i < left - 1; i++){
        current = current.next
    }

    let prev = null
    let next = null

    for(let i = 0; i < right - left + 1; i++){
        next = current.next
        current.next = prev
        prev = current
        current = next   
    }
    // till this point, next and current have the tail (last link) and head has original values till left limit
    // attach tail at last only if it is not null and attach prev

    current = head

    while(current.next?.next !== null && left > 1){
        current = current.next
    }

    if(left > 1)
        current.next = prev
    else if (left == 1)
        head = prev

    current = head

    while(current && next){
        if(current.next == null){
            current.next = next
            break
        }
        current = current.next
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
    "next": {
        "value": 5,
        "next": null
    }
}

// reverseBetween(obj2, 1, 4)

reverseBetween(test1, 1, 2)
