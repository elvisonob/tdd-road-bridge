const RoadBridge = require('../src/roadbridge.js')
describe('RoadBridge', () => {
    let roadbridge
    beforeEach(() => {
        roadbridge = new RoadBridge()
    })

    it('0 cars on the new bridge', () => {
        //setup
        const expected = 0
            //execute
        const result = roadbridge.numOfCars()
            //verify
        expect(result).toEqual(expected)

    })

    it('bridge only at capacity, hence return error', () => {
        //setup
        const expected = 'error'

        //execute
        roadbridge.carMoveOnBridge()
        roadbridge.carMoveOnBridge()
        roadbridge.carMoveOnBridge()
        const result = roadbridge.carMoveOnBridge()

        //verify
        expect(result).toEqual(expected)

    })

    it('Car move on bridge increases counter', () => {
        //setup
        const expected = 2

        //execute
        roadbridge.carMoveOnBridge()
        roadbridge.carMoveOnBridge()
        const result = roadbridge.numOfCars()

        //verify
        expect(result).toEqual(expected)

    })

    it('counter shouldnt go above capacity', () => {
        //setup
        const expected = 2

        //execute
        roadbridge.carMoveOnBridge()
        roadbridge.carMoveOnBridge()
        roadbridge.carMoveOnBridge()
        const result = roadbridge.numOfCars()

        //verify
        expect(result).toEqual(expected)

    })

    it('record when a car moves off bridge', () => {
        //setup
        const expected = 2

        //execute
        roadbridge.carMoveOnBridge()
        roadbridge.carMoveOnBridge()
        const result = roadbridge.carMoveOffBridge()

        //verify
        expect(result).toEqual(expected)

    })

    it('Be able to change capacity of bridge', () => {
        //setup
        const expected = 'error'

        //execute
        roadbridge.changeCapacity(1)
        roadbridge.carMoveOnBridge()
        const result = roadbridge.carMoveOnBridge()

        //verify
        expect(result).toEqual(expected)

    })

    it('Close bridge completely', () => {
        //setup
        const expected = 'Accident: Bridge Closed'

        //execute
        roadbridge.closedBridge()
        const result = roadbridge.carMoveOnBridge()

        //verify
        expect(result).toEqual(expected)

    })

    it('Cars on the bridge can move off when bridge is closed', () => {
        //setup
        const expected = 0

        //execute
        roadbridge.closedBridge()
        const result = roadbridge.carMoveOffBridge()

        //verify
        expect(result).toEqual(expected)

    })

})