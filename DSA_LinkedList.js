class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;

    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size ;
    }

    // O(1)
    prepend(value){ //unshift in array add at begining 
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }

        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr = this.head;
            let listValue = ''
            while(curr){
                listValue += `${curr.value} `
                curr= curr.next;
            }
            console.log(listValue);
            
        }
    }

    // O(n)
    append(value){ // push like array
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;

        }else{
            let prev = this.head
            while (prev.next) {
                prev= prev.next
                
            }
            prev.next = node
        }
        this.size++;
    }

    insert(value,index){
        if(index<0 || index >this.size){
            return
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value)
            let prev = this.head;
            for(let i=0;i< index-1; i++){
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index){
        if(index <0 || index >= this.size){
            return null;
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next;
            removeNode.next = null
        }else{
            let prev = this.head
            for(let i= 0;i<index-1;i++ ){
                prev= prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next
            removeNode.next = null
        }
        this.size--;
        return [removeNode.value, removeNode.next]
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value ){
                prev=prev.next;
            }
            if(prev.next){
              const  removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1;
        }

        let i=0;
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1
    }

}

const list = new LinkedList()
list.print()
list.insert(10,0);
list.insert(20,0)
list.print()
list.insert(30,2)
list.insert(302,3)
// console.log(`List is empty :- `, list.isEmpty())
// console.log('Size of LinkedList :-',list.getSize());
// list.append(100)
// list.append(300)

list.print()
console.log(list.removeValue(301))
list.print()
console.log(list.search(2));

console.log(list.search(30));


