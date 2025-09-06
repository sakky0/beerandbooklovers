import { Fragment } from "react/jsx-runtime";
import type { LawArticle, LawDocument } from "../../models/document";
import FancyContainer from "../FancyContainer/FancyContainer";
import "./Article.css";

const ArticleText = ({ text, num }: { text?: string; num: number }) => (
    <>
        <h4>Članak {num}.</h4>
        <p>{text}</p>
    </>
);

const Article = ({ title, articles, timeAndPlace }: LawDocument) => {
    let key = 0;
    let articleNum = 0;

    const renderArticle = (article: LawArticle) => {
        key++;
        let element = null;

        if (article.type === "text") element = <p>{article.text}</p>;
        else if (article.type === "section") element = <h3>{article.text}</h3>;
        else {
            articleNum++;
            element = <ArticleText num={articleNum} text={article.text} />;
        }

        return (
            <Fragment key={key}>
                {element}
                {article.bullets && (
                    <ul>
                        {article.bullets.map((bullet, j) => (
                            <li key={j}>{bullet}</li>
                        ))}
                    </ul>
                )}
            </Fragment>
        );
    };

    return (
        <FancyContainer className="constitution-document">
            <div className="document-title-container">
                <h2 className="document-title">{title}</h2>
            </div>
            {articles.map(renderArticle)}
            <p className="time-place">{timeAndPlace}</p>
        </FancyContainer>
    );
};

export default Article;
