// copy list with random pointer

function _Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
   if(!head)
    return null

   const myMap = new Map()

   let current = head

   while(current){
        myMap.set(current, new Node(current.val))
        current = current.next
   }

   current = head

   while(current){
        myMap.get(current).next = myMap.get(current.next) || null
        myMap.get(current).random = myMap.get(current.random) || null
        current = current.next
   }

   return myMap.get(head)

};
