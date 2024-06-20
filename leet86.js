// partition list linked list

function ListNode(val, next) {
    this.value = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy = new ListNode(0)
    let lesser = dummy
    let dummy2 = new ListNode(0)
    let greater = dummy2

    while(head){
        if(head.value < x){
            lesser.next = head
            lesser = lesser.next
        }
        else {
            greater.next = head
            greater = greater.next
        }
        head = head.next
    }

    greater.next = null
    lesser.next = dummy2.next
    return dummy.next
};

const obj2 = {
    "value": 1,
    "next": {
        "value": 4,
        "next": {
            "value": 3,
            "next": {
                "value": 2,
                "next": {
                    "value": 5,
                    "next": {
                        "value": 2,
                        "next": null
                    }
                }
            }
        }
    }
}

partition(obj2, 3)
