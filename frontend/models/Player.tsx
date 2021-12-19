export default interface Player {
  name: string;
  score: number;
  wins: number;
  status: string;
  guessed: boolean;
  color: string;
  profile: string;
  typing: boolean;
  id: number | null;
}
