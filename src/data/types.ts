/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface PictureItem {
    title: string;
    imageUrl: string;
    questions: string[];
    thoughts: string[];
    expressions: (string | { term: string; definition: string })[];
    example: string;
}

export interface TopicSection {
    title: string;
    imageUrl?: string;
    questions?: string[];
    thoughts?: string[];
    expressions?: (string | { term: string; definition: string })[];
    example?: string;
    pictureItems?: PictureItem[];
}

export interface Topic {
    title: string;
    description: string;
    sections: TopicSection[];
    isQuiz?: boolean;
}

export interface AppCategory {
  title: string;
  topics: Topic[];
}

export interface QuizQuestion {
    id: number;
    options: string[];
    answer: string;
    explanation?: string;
}

export interface Quiz {
    id: string;
    title: string;
    passage: string;
    questions: QuizQuestion[];
}
