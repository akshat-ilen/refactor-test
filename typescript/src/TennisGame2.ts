import { TennisGame } from './TennisGame';


export class TennisGame2 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    let score: string = '';
    let player1ScoreName: string = ''
    let player2ScoreName: string = ''
    const scoreNameMap: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

    if(this.player1Score < 4) player1ScoreName = scoreNameMap[this.player1Score];
    if(this.player2Score < 4) player2ScoreName = scoreNameMap[this.player2Score];

    if (this.player1Score === this.player2Score && this.player1Score < 4) {
      score = player1ScoreName;
      score += '-All';
    }
    if (this.player1Score === this.player2Score && this.player1Score >= 3)
      score = 'Deuce';

    if ((this.player1Score > this.player2Score && this.player1Score < 4) ||
      (this.player2Score > this.player1Score && this.player2Score < 4) ||
      (this.player1Score > 0 && this.player2Score === 0) ||
      (this.player2Score > 0 && this.player1Score === 0)) {
      score = player1ScoreName + '-' + player2ScoreName;
    }

    let dominantPlayer = (this.player1Score > this.player2Score) ? this.player1Name : this.player2Name
    
    if ((this.player1Score > this.player2Score && this.player2Score >= 3) ||
    (this.player2Score > this.player1Score && this.player1Score >= 3)) {
      score = `Advantage ${dominantPlayer}`;
    }

    if ((this.player1Score >= 4 && this.player2Score >= 0 && (this.player1Score - this.player2Score) >= 2) ||
    (this.player2Score >= 4 && this.player1Score >= 0 && (this.player2Score - this.player1Score) >= 2)) {
      score = `Win for ${dominantPlayer}`;
    }

    return score;
  }

  SetP1Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.increaseP1Score();
    }
  }

  SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.increaseP2Score();
    }
  }

  wonPoint(player: string): void {
    if (player === this.player1Name)
      this.increaseP1Score();
    else if (player === this.player2Name)
      this.increaseP2Score();
  }

  private increaseP1Score(): void {
    this.player1Score++;
  }

  private increaseP2Score(): void {
    this.player2Score++;
  }
}
