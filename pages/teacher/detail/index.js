import TeacherIntro from "../../../components/teacherIntro";
import SectionNoticeBar from "../../../components/sectionNoticeBar";
import FlexLayout from "../../../layout/flexLayout";
import CourseCard from "../../../components/courseCard";


export default function TeacherDetail() {

    return (
        <>
            <TeacherIntro/>
            <SectionNoticeBar/>
            <div className="bx">
                <FlexLayout>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </FlexLayout>
            </div>

        </>
    )
}