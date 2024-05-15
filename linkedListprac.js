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

  return {
    push: function (num) {
      console.log('push');
      let currentNode = linkedList.next;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = {
        value: num,
        next: null,
      };
    },
    unshift: function (num) {
      linkedList = {
        value: num,
        next: linkedList,
      };
    },
    getStart: function () {
      return linkedList;
    },
  };
}

const ll = createLinkedList([1, 2, 3]);

ll.push(4);
ll.unshift(0);
console.log(ll.getStart());
