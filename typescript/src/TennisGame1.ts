import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.player1Score += 1;
    else if (playerName === this.player2Name)
      this.player2Score += 1;
  }

  getScore(): string {
    let score: string = '';
    const scoreNameMap: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    if (this.player1Score === this.player2Score) {
      score = (this.player1Score > 2) ? 'Deuce': `${scoreNameMap[this.player1Score]}-All`;
    }
    else if (this.player1Score >= 4 || this.player2Score >= 4) {
      const resultDifference: number = this.player1Score - this.player2Score;
      const dominantPlayer = (resultDifference > 0) ? this.player1Name : this.player2Name;
      score = (Math.abs(resultDifference)) === 1 ? `Advantage ${dominantPlayer}` : `Win for ${dominantPlayer}`;
    }
    else {
      score = `${scoreNameMap[this.player1Score]}-${scoreNameMap[this.player2Score]}`
    }
    return score;
  }
}
