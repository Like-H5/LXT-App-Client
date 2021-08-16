import CategoryBar from "../../components/categoryBar";
import TeacherItem from "../../components/teacherItem";

export default function Teacher() {

    return (
        <>
            <CategoryBar/>
            <div className="bx">
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </div>

        </>
    )
}