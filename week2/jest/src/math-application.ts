import { add, divide } from "./calculator";

/**
 * Find the mean of the three numbers provided
 * 
 * @param one 
 * @param two 
 * @param three 
 * 
 * @returns the mean of the three params
 */
export function mean(one: number, two: number, three: number): number {
  const sum = add(add(one, two), three);

  return divide(sum, 3);
}