/**
 * Matrix to convert the selection of the opponent to a valid i-index for the
 * rpsRules matrix.
 * 
 * It also returns the (result - 1) of the selected figure according to the
 * rules of the rps from advent of code 
 */
const playerSelection: Map<string, number> = new Map()
    .set('X', 0)
    .set('Y', 1)
    .set('Z', 2);

/**
 * Matrix to convert the selection of the opponent to a valid j-index for the
 * rpsRules matrix.
 */
const opponentSelection: Map<string, number> = new Map()
    .set('A', 0)
    .set('B', 1)
    .set('C', 2);

/**
 * Matrix to define the score according to the player selection (i-axis) and the
 * opponent selection (j-axis)
 */
const rpsRules = [
    [3, 0, 6],
    [6, 3, 0],
    [0, 6, 3]
];

/**
 * Matrix to define the next movement of the player according to the opponent
 * selection (i-axis: rock, paper, scizor) and the result of the round (j-axis:
 * lose, draw, win)
 */
const playerPrediction = [
    ['Z', 'X', 'Y'],
    ['X', 'Y', 'Z'],
    ['Y', 'Z', 'X']
];

/**
 * Function to calculate the value of a RPS round
 * @param opponentPlay Figure of the opponent
 * @param playerPlay Figure of the player
 * @returns Value of the round
 */
export function roundValue(opponentPlay: string, playerPlay: string): number {
    const opponentIndex = opponentSelection.get(opponentPlay)!;
    const playerIndex = playerSelection.get(playerPlay)!;
    return rpsRules[playerIndex][opponentIndex] + (playerIndex + 1);
}


/**
 * Function to calculate the result of a tournament
 * @param rounds List of rounds, each with the opponent figure and the player
 * figure
 * @returns Total value of the tournament
 */
export function tournamentValue(rounds: Array<Array<string>>): number {
    return rounds
        .map((round) => roundValue(round[0], round[1]))
        .reduce((acc, now) => acc + now);
}


/**
 * Function to decide the figure of the player
 * @param opponentPlay Figure of the opponent
 * @param roundResult Result of the round
 * @returns Recommended figure for the player
 */
export function actualDecision(opponentPlay: string, roundResult: string): string {
    const opponentIndex = opponentSelection.get(opponentPlay)!;
    const roundIndex = playerSelection.get(roundResult)!;
    return playerPrediction[opponentIndex][roundIndex];
}


/**
 * Function to calculate the result of a tournament
 * @param rounds List of rounds, each with the opponent figure and the result of
 * the round
 * @returns Total value of the tournament
 */
export function realTournamentValue(rounds: Array<Array<string>>): number {
    return rounds
        .map((round) => roundValue(round[0], actualDecision(round[0], round[1])))
        .reduce((acc, now) => acc + now);
}