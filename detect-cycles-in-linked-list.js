/*

Detect cycles in a given Linked List


First approach would be walk through the list and store each passed node,
In every single step we can check if we have already passed this node or not.
If YES then there is cycle.

Second approach would be using two pointers to walk through the list,
First pointer(fast) moves two nodes in each step and other one(slow) moves only one.
If there was a cycle in the list, pointers would eventually collide ar pass each other.

*/


const detectCyle = (head) => {
  if ( head === null ) {
    return false;
  }

  let horse  = head.next;
  let turtle = head;

  while ( horse !== null && horse.next !== null && turtle !== null ) {

    id ( horse === turtle ) {
      return true;
    }

    horse  = horse.next.next;
    turtle = horse.next;
  }

  return false;
}
