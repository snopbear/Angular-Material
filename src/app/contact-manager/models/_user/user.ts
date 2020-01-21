import { Note } from '../note/note';

export class User {
    id: number;
    birthDate: Date;
    name: string;
    avatar: string;
    bio: string;

    notes: Note[] = [];
}
