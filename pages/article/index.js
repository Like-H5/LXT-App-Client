import BreadNav from "../../components/breadNav";
import ArticleItem from "../../components/articleItem";

export default function Article() {

    return (
        <>
            <BreadNav/>
            <div className="bx">
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
            </div>
        </>
    )
}