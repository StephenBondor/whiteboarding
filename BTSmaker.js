class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const BSTtreemaker = arr => {
	let bts = new BinaryTreeNode();
	//take the input, and find the middle value
	midpoint = Math.floor(arr.length / 2); //[1,2] --> 0. arr[0] --> 1

	//make that the top of the tree
	bts.value = arr[midpoint];

	if (arr.length > 1) {
		//populate the children of that tree with the middle points of the left and right
		bts.left = BSTtreemaker(arr.splice(0, midpoint));
		bts.right = BSTtreemaker(arr.splice(midpoint + 1, arr.length - 1));
	}
	//repeat
	return bts;
};

// [1, 2, 3, 4, 5, 6, 7] :
//    4
//   2 6
// 1 3 5 7

// [1, 2, 3, 4, 5, 6, 7, 8] :
//    5
//   3 7
// 2 4 6 8

// [1, 2, 3, 4, 5, 6] :
//    5
//   3 7
// 2 4 6 8

console.log(BSTtreemaker([1, 2, 3, 4, 5, 6]));
