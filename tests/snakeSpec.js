describe('New Snake Object', () => {
    let snake;

    beforeEach( () => {
        snake = new Snake();
    });

    afterEach( () => {
        snake = null;
    });

    it('instantiates with four directions', () => {
        expect(snake.DIRS.length).toEqual(4);
    });

    it('instantiates with a head', () => {
        expect(snake.head).not.toBeNull();
    });

    it('instantiates as three segments long', () => {
        expect(snake.segments.length).toEqual(3);
    });

    it('is not collided with itself', () => {
        expect(snake.isCollided()).toEqual(false);
    });

    it("includes it's own head", () => {
        expect(snake.segmentsInclude(snake.head())).toEqual(true);
    });
});
