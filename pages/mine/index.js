import UserIntro from "../../components/userIntro";
import SectionNoticeBar from "../../components/sectionNoticeBar";
import FlexLayout from "../../layout/flexLayout";
import UserCourseCardProgress from "../../components/userCourseCardProgress";


export default function Mine() {
    return (
        <>
            <UserIntro/>
            <SectionNoticeBar/>
            <div className="bx">
                <FlexLayout>
                    <UserCourseCardProgress/>
                    <UserCourseCardProgress/>
                    <UserCourseCardProgress/>
                    <UserCourseCardProgress/>
                    <UserCourseCardProgress/>
                </FlexLayout>
            </div>
        </>
    )
}