const Linkedlist=require('../lib/LinkedList')

describe('test linkedlist',( ) =>{
    it('should be create empty list',()=>{

        let linkedList=new Linkedlist()
        expect(linkedList.head).toBe(null)
        expect(linkedList.tail).toBe(null)

    })
    it('should insert node to empty  linked list ',()=>{
        let linkedList=new Linkedlist()
     
        linkedList.insert(1)
       expect(linkedList.head.value).toBe(1)
       expect(linkedList.head.next).toBe(null)
       expect(linkedList.tail.value).toBe(1)
       expect(linkedList.tail.next).toBe(null)
    })
    it ('should insert  many node to  linkedlist ',()=>{
        let linkedList=new Linkedlist()
        linkedList.insert(2)
        linkedList.insert(3)

        expect(linkedList.head.value).toBe(3)
        expect(linkedList.head.next.value).toBe(2)
        expect(linkedList.tail.next).toBe(null)
        expect(linkedList.tail.value).toBe(2)
      
    })
    it("should return true if finding the value in linkedlist",() =>{
        let linkedList =new Linkedlist()
        linkedList.insert(1)
        linkedList.insert(2)
        linkedList.insert(3)
        expect(linkedList.includes(2)).toBe(true)
       
    })
    it("should return false if finding the value in linkedlist",() =>{
        let linkedList =new Linkedlist()
        linkedList.insert(1)
        linkedList.insert(2)
        linkedList.insert(3)
        expect(linkedList.includes(4)).toBe(false)
    })
    
    it("toString method return a collection of all the values that exist in the linked list",()=>{
   let linkedList=new Linkedlist()
linkedList.insert(1)
linkedList.insert(2)
linkedList.insert(3)
        expect(linkedList.tostring()).toBe('{3}->{2}->{1}->NULL')
    })


  
})