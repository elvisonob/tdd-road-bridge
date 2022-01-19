 class RoadBridge {
     constructor() {
         this.carOnBridge = 0
         this.capacity = 2
         this.closed = false

     }

     numOfCars() {
         return this.carOnBridge
     }

     carMoveOnBridge() {

         if (this.carOnBridge >= this.capacity) {
             return 'error'
         }
         if (this.closed === true) {
             return 'Accident: Bridge Closed'
         }



         this.carOnBridge++
     }
     carMoveOffBridge() {
         const removedCars = 2
         if (this.carOnBridge < removedCars) {
             return this.carOnBridge
         }
         return this.carOnBridge--
     }

     changeCapacity(newCapacity) {
         this.capacity = newCapacity
         return this.capacity


     }

     closedBridge() {
         this.closed = true
     }
 }



 module.exports = RoadBridge