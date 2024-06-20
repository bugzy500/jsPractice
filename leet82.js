// remove duplicates from sorted list II

function ListNode(val, next) {
    this.value = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    const mySet = new Set()
    const stack = []
    let current = head

    while(current){
        if(mySet.has(current.value) && current.value !== current.next?.value){
            stack.pop()
        }
        else if (!mySet.has(current.value)){
            mySet.add(current.value)
            stack.push(current.value)
        }
        current = current.next
    }

    let result = new ListNode(0)
    current = result

    for(let i = 0; i < stack.length; i++){
        current.next = {
            val: Number(stack[i]),
            next: null
        }
        current = current.next
    }

    console.log(result)

};

const obj2 = {
    "value": 1,
    "next": {
        "value": 1,
        "next": {
            "value": 1,
            "next": {
                "value": 2,
                "next": {
                    "value": 3,
                    "next": {
                        "value": 4,
                        "next": null
                    }
                }
            }
        }
    }
}

deleteDuplicates(obj2)
