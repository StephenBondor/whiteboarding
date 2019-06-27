class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next


def remove_from_list(value, listHead):
    curr = listHead
    prev = None

    while curr:
        if curr.value > value:
            if prev:
                prev.next = curr.next
            else:
                listHead = curr.next
        else:
            prev = curr
        curr = curr.next

    return listHead


def remove_from_list_generic(listHead, func=lambda a: a == 0):
    curr = listHead # set current node to head node
    prev = None # Set previous node to None

    while curr: # While there is a current node
        if not func(curr.value): # check to see if the value of that node is to be removed:
            if prev: # if there is a previous node, and there is a node to remove:
                prev.next = curr.next # the the next pointer on the previous node to skip the current node
            else: # if there is no previous node, but also a node to remove
                listHead = curr.next # set the listHead, what is to be returned, to the next node
        else: # looks like this node is NOT to be removed, so
            prev = curr # set the previous node to the current node, cus its def safe now.
        curr = curr.next # and lastly, advance the current node to the next node for checking

    return listHead


def print_me(listHead):
    current = one
    while current:
        print(current.value)
        current = current.next
    print("____________")


if __name__ == "__main__":

    one = Node(10)
    one.next = Node(2)
    one.next.next = Node(90)
    one.next.next.next = Node(49)
    one.next.next.next.next = Node(20)
    one.next.next.next.next.next = Node(6)
    print_me(one)

    one = remove_from_list(4, one)
    print_me(one)

    one = remove_from_list_generic(one, lambda a: a <= 2)
    print_me(one)
