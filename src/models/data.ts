import type { LawDocument } from "./document";
import type { Member } from "./member";

export type Data = {
    books: string[];
    constitution: LawDocument[];
    members: Member[];
};
