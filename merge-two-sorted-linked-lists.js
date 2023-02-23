/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var List = new ListNode(0)
    var head = List
    while (list1 !==null || list2 !== null) {
        if (!list1) {
            List.next = list2
            break
        }
        if (!list2) {
            List.next = list1
            break
        }
        if (list1.val > list2.val) {
            List.next = list2
            list2 = list2.next
        } else {
            List.next = list1
            list1 = list1.next
        }
        List = List.next
    }
    return head.next
};