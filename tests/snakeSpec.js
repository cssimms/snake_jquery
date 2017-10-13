describe('New Snake Object', () => {

    it('instantiates with four directions', () => {
        let snake = new Snake();
        expect(snake.DIRS.length).toEqual(4);
    });

    it('instantiates with a head', () => {
        let snake = new Snake();
        expect(snake.head).not.toBeNull();
    });

    it('instantiates as three segments long', () => {
        let snake = new Snake();
        expect(snake.segments.length).toEqual(3);
    });

    it('is not collided with itself', () => {
        let snake = new Snake();
        expect(snake.isCollided()).toEqual(false);
    });

    it("includes it's own head", () => {
        let snake = new Snake();
        expect(snake.segmentsInclude(snake.head())).toEqual(true);
    });
});
