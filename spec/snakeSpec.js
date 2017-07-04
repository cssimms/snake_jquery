describe('Snake Object', () => {

    it('instantiates with a head', () => {
        let snake = new Snake();

        expect(snake.head).not.toBeNull();
    });
});
