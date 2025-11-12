/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Quiz } from '../types';
import { quizSet1 } from './quizSet1';
import { quizSet2 } from './quizSet2';

export const quizzes: Quiz[] = [
    ...quizSet1,
    ...quizSet2,
];