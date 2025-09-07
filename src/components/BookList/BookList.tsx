import type { Book } from "../../models/book";
import { useMemo, useState } from "react";
import { useBooks } from "../../services/dataService";
import Separator from "../Separator/Separator";
import Badge from "../Badge/Badge";
import SwitchComponent from "../SwitchComponent/SwitchComponent";
import StarLogo from "../../assets/star.svg?react";
import classNames from "classnames";
import "./BookList.css";

type IBook = Book & { last?: boolean; active?: boolean };

const Book = ({ cover, name, author, suggested, goodreads, read, last, active }: IBook) => {
    const className = classNames("book-container", { read });

    return (
        <>
            <div className={className}>
                {active && (
                    <Badge tooltipText="Trenutno aktualna knjiga">
                        <StarLogo />
                    </Badge>
                )}
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

    const activeBook = useMemo(() => {
        if (!books || books.length === 0) return undefined;
        return books.filter(x => !x.read)[0].name;
    }, [books]);

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
                <Book
                    key={i}
                    last={i === displayBooks.length - 1}
                    active={x.name === activeBook}
                    {...x}
                />
            ))}
        </div>
    );
};

export default BookList;
