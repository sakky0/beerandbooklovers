export type LawArticle = {
    type: "article" | "section" | "text";
    text?: string;
    bullets?: string[];
};

export type LawDocument = {
    title: string;
    timeAndPlace: string;
    articles: LawArticle[];
};
