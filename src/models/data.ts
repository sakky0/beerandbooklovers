import type { Book } from "./book";
import type { LawDocument } from "./document";
import type { Member } from "./member";

export type Data = {
    books: Book[];
    constitution: LawDocument[];
    members: Member[];
};
