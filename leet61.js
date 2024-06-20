// rotate linked list


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    let current = head
    let count = 1

    while(current){
        if(current.next == null){
            current.next = head
            break
        }
        current = current.next
        count++
    }

    current = head
    k = k % count

    for(let i = 0; i < count-k; i++){
        current = current.next
    }

    let prev = current

    while(count--){
        if(count == 0){
            prev.next = null
            break
        }

        prev = prev.next
    }

    return current

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

rotateRight(obj2, 2)