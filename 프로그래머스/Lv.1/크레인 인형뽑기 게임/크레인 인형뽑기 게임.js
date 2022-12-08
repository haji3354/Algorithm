function solution(board, moves) {
  let answer = 0;
  let box = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        box.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        if (box[box.length - 1] === box[box.length - 2]) {
          box.splice(-2);
          answer += 2;
        }
        break;
      }
    }
  }

  return answer;
}
