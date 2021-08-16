import Lunbo from "../components/lunbo";
import SectionContainer from "../components/sectionContainer";
import CourseCard from "../components/courseCard";
import TeacherCard from "../components/teacherCard";
import ArticleCard from "../components/articleCard";

export default function Home() {
    return (
        <div>
            <Lunbo/>
            <SectionContainer title={"- 热 . 门 . 好 . 课 -"} moreText={"更多"} moreHref={"/course"}>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </SectionContainer>

            <SectionContainer title={"- 明 . 星 . 讲 . 师 -"} moreText={"更多"} moreHref={"/teacher"}>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
            </SectionContainer>

            <SectionContainer title={"- 学 . 院 . 新 . 闻 -"} moreText={"更多"} moreHref={"/article"}>
                <ArticleCard/>
                <ArticleCard/>
            </SectionContainer>

        </div>
    )
}
