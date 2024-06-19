// merge two sorted linked lists

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const result = new ListNode()
    let current = result

    while (list1 || list2){
        if(list1?.val <= list2?.val || list2?.val == undefined){
            current.next = list1
            list1 = list1.next
        }
        else if(list2?.val < list1?.val || list1?.val == undefined){
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    return result.next
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

const l1 = createLinkedList2([1, 2, 4]);

const l2 = createLinkedList2([1, 3, 4]);

mergeTwoLists(l1, l2)

