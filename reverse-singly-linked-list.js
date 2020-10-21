/*
  Reverse A Singly Linked List
*/


// Iterative
const Reverse = (head) => {
  if ( head === null || head.next === null ) {
    return head;
  }

  const prev = null;
  const curr = head;
  const next = null;

  while ( curr !== null ) {

    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev; // new head
}


// Recursive
const Reverse_Recursive = (head) => {
  if ( head === null || head.next === null ) {
    return head;
  }


  const newHead = Reverse_Recursive(head.next);

  head.next.next = head // head's nex node should point to head
  head.next = null;

  return newHead;
}


// Using Stack
const Reverse_Stack = (head) => {
  if ( head === null || head.next === null ) {
    return head;
  }

  const curr  = head;
  const stack = [curr]

  while ( curr.next !== null ) {
    stack.push(curr.next)
  }

  const newList = [];

  while ( stack.length !== 0 ) {
    newList.push(stack.pop())
  }

  return newList;
}
