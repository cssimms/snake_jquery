describe('Snake Object', () => {
    console.log('*******snakey********')
    it('instantiates with a head', () => {
        let snake = new Snake();
        expect(snake.head).not.toBeNull();
    });
});
