function createLinkedList(initialNumbers) {
    let linkedList = {
        value: initialNumbers[0],
        next: null,
    };
    let i = 1;

    while (i < initialNumbers.length) {
        linkedList.next = {
            value: initialNumbers[initialNumbers.length - i],
            next: i === 1 ? null : linkedList.next,
        };
        i++;
    }

    return linkedList
}

const ll = createLinkedList([1, 2, 3, 4]);

//console.log(ll)

function reverseLinkedList(linkL){
    let prev = null
    let current = linkL

    while(current){
        const next = current.next
        current.next = prev

        prev = current
        current = next
        console.log(prev, '        ' ,current,'        ' , next)
    }

    console.log(prev)

}

function reverseLinked(linkedList){

    let prev = null
    let current = linkedList
    while(current !== null){
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }

    console.log(prev)
}



const obj2 = {
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
reverseLinked(obj2)
