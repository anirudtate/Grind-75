/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  const start = new ListNode(-1, null);
  let l1: ListNode | null = list1;
  let l2: ListNode | null = list2;
  let current = start;

  const addL1 = () => {
    if (l1 === null) {
      current.next = null;
      return;
    }
    current.next = l1;
    current = current.next;
    l1 = l1.next;
  };

  const addL2 = () => {
    if (l2 === null) {
      current.next = null;
      return;
    }
    current.next = l2;
    current = current.next;
    l2 = l2.next;
  };

  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      addL2();
    }
    if (l2 === null) {
      addL1();
    }
    if (l1?.val <= l2?.val) {
      addL1();
    } else {
      addL2();
    }
  }

  return start.next;
}
