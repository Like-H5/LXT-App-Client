import CourseCommentPane from "../../components/courseCommentPane";
import CourseIntro from "../../components/courseIntro";
import BreadNav from "../../components/breadNav";
import CourseDetailContainer from "../../components/courseDetailContainer";
import CourseLinkTeacher from "../../components/courseLinkTeacher";
import CourseCommentList from "../../components/courseCommentList";
import CourseOutline from "../../components/courseOutline";

export default function CourseDetail() {
    return (
        <>
            <BreadNav/>
            <div className="bx">
                <CourseIntro/>
                <CourseDetailContainer rightNodes={<>
                    <CourseLinkTeacher/>
                    <CourseCommentPane/>
                    <CourseCommentList/>
                </>} descContent={<div dangerouslySetInnerHTML={{__html: '<h3>这是一段富文本介绍</h3>'}}/>}
                dgContent={<CourseOutline/>}
                />
            </div>
        </>
    )
}