const Node = require('./node');

class LinkedList {
    constructor() {
      this.prev = null;
      this.next = null;
      this.length = 0;
      return this;
    }

    append(data) {
      var node = new Node(data);
      if(this.length){
         this.prev.next = node;
         node.prev = this.prev;
         this.prev = node ;
       } else {
         this._head = node;
         this._tail = node;
         this.prev = node;
         this.next = node;
         }
      this.length++;
      return this;
    }

    head() {
      return this.next ? this.next.data : null;
    }

    tail() {
      return this.prev ? this.prev.data : null;
    }

    at(index) {
     var start = this.next;
     var count = 0;
     while(count < index){
       start = start.next;
       count++;
     }
     return start.data; 
    }

    insertAt(index, data) {
      var node = new Node(data);
      var before = null;
      var after = null;

      var start = this.next;
      var count = 0;
      if(this.next === null && this.prev === null){
        this.next = this.prev = node;
      } else {
      while(count < index){
        start = start.next;
        count++;
      }
      after  = start;
      if(start.prev){
        before = start.prev;
        before.next = node;
        node.prev = before;
      } else {
        node.prev = null;
        this.next = node;
      }
      
      after.prev  = node;
      node.next = after;
      }
      this.length++;
      return this;
    }

    isEmpty() {
      var start = this.next;
      var count = 0;
      while(count < this.length && start.data ){
        start = start.next;
        count++;
        return false;
      } return true;
    }

    clear() {
      this.next = null;
      this.prev = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
     var before = null;
     var after  = null;
     
     if(!index){
        this.length = 0;
        this.clear();
        return this;
     }

     var start = this.next;
     var count = 0;
     
     while(count < index) {
       start = start.next;
       count++;
     } 
     if (this.next === null && this.prev === null){this.clear();return this};
     if(start.next){
       after = start.next;
         if(start.prev){
           before = start.prev;
           before.next = after;
           after.prev  = before
         } else {
             start.next.prev = null;
             this.next = start.next;            
           }
       start = null;       
     }
     else {
       this.prev = start.prev;
       start.prev.next = null;
       start = null;
     }
     this.length--;
     return this;
    }

    reverse() {
   var oldnext  = this.next;
   var oldprev  = this.prev;
   var count = 0;
   this.next = oldprev;
   this.prev = oldnext;

   var start = this.next;
   var newnext,newprev;

    
   while(count < this.length){
  
      newnext  = start.next;
      newprev  = start.prev;
      start.next = newprev;
      start.prev = newnext;

      start = start.next;    
  
      count++;
 
     }
    this.next.prev = this.prev.next = null;
    return this;
    }

    indexOf(data) {
    var count = 0;
    var start = this.next;
    var ind = -1;
    while(count < this.length){
      if(start.data === data){
        return ind = count;
      }
      start = start.next;
     count++;
    } return ind;
    }
}

module.exports = LinkedList;
