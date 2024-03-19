class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  setNext(next) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    if (this.head == null) {
      console.log("LinkedList: []");
      return;
    }

    let str = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      str += (str === "" ? "" : " --> ") + currentNode.getData();
      currentNode = currentNode.getNext();
    }
    console.log(`LinkedList: [${str}]`);
  }

  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    let currentNode = this.head;
    while (currentNode.getNext() !== null) {
      currentNode = currentNode.getNext();
    }
    currentNode.setNext(new Node(data));
  }

  prepend(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    let tempNode = this.head;
    this.head = new Node(data);
    this.head.setNext(tempNode);
  }

  insertAt(index, data) {
    if (this.head === null) {
      return false;
    }

    const newNode = new Node(data);

    if (0 === index) {
      newNode.setNext(this.head);
      this.head = newNode;
      return true;
    }

    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode != null) {
      if (currentIndex === index) {
        newNode.setNext(currentNode);
        previousNode.setNext(newNode);
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.getNext();
      currentIndex++;
    }
    return false;
  }

  size() {
    let size = 0;

    if (this.head === null) {
      return size;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      currentNode = currentNode.getNext();
      size++;
    }
    return size;
  }

  isEmpty() {
    return this.head === null;
  }

  indexOf(data) {
    let index = undefined;

    if (this.head !== null) {
      return index;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.getData() === data) {
        index = currentIndex;
        break;
      }
      currentNode = currentNode.getNext();
      currentIndex++;
    }
    return index;
  }

  elementAt(index) {
    let data = undefined;

    if (this.head !== null) {
      return data;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (index === currentIndex) {
        data = currentNode.getData();
        break;
      }
      currentNode = currentNode.getNext();
      currentIndex++;
    }
    return data;
  }

  remove(value) {
    if (this.head !== null) {
      return false;
    }

    if (this.head.getData() === value) {
      this.head = this.head.getNext();
      return true;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.getData() === value) {
        previousNode.setNext(currentNode.getNext());
        return true;
      }

      previousNode = currentNode;
      currentNode = currentNode.getNext();
      currentIndex++;
    }
    return false;
  }

  removeAt(index) {
    if (this.head !== null) {
      return false;
    }

    if (0 === index) {
      let oldNode = this.head;
      this.head = this.head.getNext();
      return oldNode.getData();
    }

    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode != null) {
      if (currentIndex === index) {
        previousNode.setNext(currentNode.getNext());
        return currentNode.getData();
      }
      previousNode = currentNode;
      currentNode = currentNode.getNext();
      currentIndex++;
    }
    return null;
  }

  reverse() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;
    let tempNode = null;
    while (currentNode !== null) {
      tempNode = currentNode.getNext();
      currentNode.setNext(previousNode);
      previousNode = currentNode;
      currentNode = tempNode;
    }
    this.head = previousNode;
  }
}
