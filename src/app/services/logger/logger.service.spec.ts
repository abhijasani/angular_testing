import { LoggerService } from "./logger.service"

describe("Logger Services", () => {

    let services: LoggerService;
    beforeEach(() => {
        services = new LoggerService();
    })
    it('first time messages should be zero', () => {
        //arrange 
        // const services = new LoggerService();
        // act 
        let count = services.messages.length;
        //assert
        expect(count).toBe(0);
    })

    it('after add one message into messages it should be 1 message', () => {
        //arrange
        //  const services = new LoggerService();
        //act
        services.log("First message");
        let count = services.messages.length;
        //assert
        expect(count).toBe(1);
    })

    it('when we called clear method all data delete from messages', () => {
        //arrange
        // const services = new LoggerService();

        //act
        services.log("This is message");
        let BeforeClear = services.messages.length;
        services.clear();
        let AfterClear = services.messages.length;

        //assert
        expect(BeforeClear).toBe(1);
        expect(AfterClear).toBe(0);
    })
})