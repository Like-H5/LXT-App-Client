import BreadNav from "../../components/breadNav";
import FlexLayout from "../../layout/flexLayout";
import CourseCard from "../../components/courseCard";
import TeacherCard from "../../components/teacherCard";
import ArticleItem from "../../components/articleItem";

export default function Search() {
    return (
        <>
            <BreadNav/>
            <div className="search-result bx">
                <div className="title">
                    课程的搜索结果:
                </div>
                <FlexLayout>
                    <CourseCard/>
                    <CourseCard/>
                </FlexLayout>
            </div>

            <div className="search-result bx">
                <div className="title">
                    讲师的搜索结果:
                </div>
                <FlexLayout>
                    <TeacherCard/>
                    <TeacherCard/>
                </FlexLayout>
            </div>

            <div className="search-result bx">
                <div className="title">
                    文章的搜索结果:
                </div>
                <FlexLayout>
                    <ArticleItem/>
                    <ArticleItem/>
                </FlexLayout>
            </div>

            <style jsx>{`
              .search-result {
                margin-top: 30px;
              }

              .search-result > .title {
                font-size: 16px;
                color: #999;
                margin-bottom: 20px;
              }
            `}</style>
        </>
    )
}