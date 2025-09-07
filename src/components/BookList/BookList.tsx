import type { Book } from "../../models/book";
import { useMemo, useState } from "react";
import { useBooks } from "../../services/dataService";
import Separator from "../Separator/Separator";
import SwitchComponent from "../SwitchComponent/SwitchComponent";
import classNames from "classnames";
import "./BookList.css";

type IBook = Book & { last?: boolean };

const Book = ({ cover, name, author, suggested, goodreads, read, last }: IBook) => {
    const className = classNames("book-container", { read });

    return (
        <>
            <div className={className}>
                <img className="book-cover" src={cover} alt="book-cover-image" />
                <div className="book-details">
                    <h4>{name}</h4>
                    <p>Autor: {author}</p>
                    <p>Predložio: {suggested}</p>
                    <a href={goodreads}>Goodreads</a>
                </div>
            </div>
            {!last && <Separator />}
        </>
    );
};

const BookList = () => {
    const [showRead, setShowRead] = useState(false);
    const { data: books, isLoading } = useBooks();

    const displayBooks = useMemo(() => {
        if (!books) return [];
        return showRead ? books : books.filter(x => !x.read);
    }, [books, showRead]);

    if (isLoading || !books || books.length === 0) return null;

    return (
        <div className="booklist-container">
            <div className="booklist-title-container">
                <h3>POPIS KNJIGA</h3>
                <SwitchComponent
                    id="show-read"
                    label="Prikaži pročitane"
                    checked={showRead}
                    onCheckedChange={setShowRead}
                />
            </div>
            {displayBooks.map((x, i) => (
                <Book key={i} last={i === displayBooks.length - 1} {...x} />
            ))}
        </div>
    );
};

export default BookList;
