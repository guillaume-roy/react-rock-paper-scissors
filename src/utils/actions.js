import rockIcon from '../icons/rock.svg';
import paperIcon from '../icons/paper.svg';
import scissorsIcon from '../icons/scissors.svg';

export const DEFINITION = {
  rock: {
    name: "Rock",
    type: "rock",
    icon: rockIcon,
    rules: {
      rock: 0,
      paper: -1,
      scissors: 1
    }
  },
  paper: {
    name: "Paper",
    type: "paper",
    icon: paperIcon,
    rules: {
      rock: 1,
      paper: 0,
      scissors: -1
    }
  },
  scissors: {
    name: "Scissors",
    type: "scissors",
    icon: scissorsIcon,
    rules: {
      rock: -1,
      paper: 1,
      scissors: 0
    }
  }
};