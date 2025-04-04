import { type EvaluatedExpression, exec } from 'mini-diceroller';

/**
 * Safely generate a EvaluatedExpression with the option of a fallback
 *
 * @param input Input string to be parsed
 * @param previous EvaluatedExpression returned if a exec exception is thrown
 */
export function safeParse(
	input: string,
	previous?: EvaluatedExpression
): EvaluatedExpression | undefined {
	try {
		if (input === '') {
			return undefined;
		} else {
			return exec(input);
		}
	} catch (e) {
		return previous;
	}
}
