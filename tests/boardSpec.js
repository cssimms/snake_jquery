describe('New Board Object', () => {

  let board;

  beforeEach(() => {
      board = new Board(5);
  });

  it('starts with a snake object', () => {
    expect(board.snake.class).toEqual(Snake);
  });
});
