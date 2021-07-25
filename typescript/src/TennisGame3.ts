import { TennisGame } from './TennisGame';


export class TennisGame3 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    if (this.player1Score < 4 && this.player2Score < 4 && !(this.player1Score + this.player2Score === 6)) {
      const scoreNameMap: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      const player1Score = scoreNameMap[this.player1Score];
      return (this.player1Score === this.player2Score) ? `${player1Score}-All` : `${player1Score}-${scoreNameMap[this.player2Score]}`;
    } else {
      if (this.player1Score === this.player2Score)
        return 'Deuce';
      const playerName = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
      return (Math.abs(this.player1Score - this.player2Score)) === 1 ? `Advantage ${playerName}` : `Win for ${playerName}`;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.player1Score += 1;
    else if (playerName === this.player2Name)
      this.player2Score += 1;
  }
}
