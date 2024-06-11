class Node {
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100);

//console.log(n1)

function createLinkedList2(arr){
    let linkedList = {
        value: arr[0],
        next: null
    }

    let current = linkedList

    for(let i = 1; i < arr.length; i++){
        current.next = {
            value: arr[i],
            next: null
        }
        current = current.next
    }

    return {
        getList: function(){
            //console.log(linkedList.next)
            return linkedList
        },
        push: function(element){
            current.next = {
                value: element,
                next: null
            }
        },
        unshift: (element) => {
            linkedList = {
                value: element,
                next: linkedList
            }
        }
    }
}

const ll = createLinkedList2([1, 2, 3]);
// ll.push(4)
// ll.unshift(0)
console.log(ll)
console.log(JSON.stringify(ll.getList()))