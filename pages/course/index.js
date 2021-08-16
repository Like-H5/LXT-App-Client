import CategoryBar from "../../components/categoryBar";
import CourseCard from "../../components/courseCard";
import FlexLayout from "../../layout/flexLayout";

export default function Course() {

    return (
        <>
            <CategoryBar/>
            <div className="bx">
                <FlexLayout>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
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