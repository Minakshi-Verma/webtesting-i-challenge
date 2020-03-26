
 const{succeed, fail, repair} = require('./enhancer.js');
// test away!
function createItem(name="Sam", durability = 60, enhancement= 2){
    const item = {
        name:name,
        durability:durability,
        enhancement:enhancement
    }
    return item
}

it('should run the tests', function(){
    expect(true).toBe(true)
})

describe("enhancer.js", function(){
    describe(".repair()", function(){
        it("returns a new item object with durability:100", function(){

          //Act
          const repairItem = repair(createItem())
          //Assert
          expect(repairItem.durability).toBe(100)
        })
    })
    describe(".succeed.js", function(){
        it("returns a newItem with enhancemnet increase by 1", function(){
            let succeededItem = succeed(createItem())
            expect(succeededItem.enhancement).toBe(3)
           
        })

        it("returns a newItem with enhancemnet increase by 1", function(){
            let succeededItem = succeed(createItem("sam", 60, 5))
            expect(succeededItem.enhancement).toBe(6)
           
        })
        it("returns a newItem with enhancement increase by 1", function(){
        let succeededItem = succeed(createItem("sam", 60, 20))
        expect(succeededItem.enhancement).toBe(20)
           
        })
    })
    describe(".fail.js", function(){
        it("returns a newItem with chenged enhancement ", function(){
            let failedItem = fail(createItem())
            expect(failedItem.durability).toBe(55)
           
        })

        it("returns a newItem with chenged enhancement ", function(){
            let failedItem = fail(createItem("sam", 70, 15))
            expect(failedItem.durability).toBe(60)
           
        })
        it("returns a newItem with chenged enhancement ", function(){
            let failedItem = fail(createItem("sam", 70, 17))
            expect(failedItem.enhancement).toBe(16)
           
        })
    })   

})