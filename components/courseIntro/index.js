require("./index.less")

export default function CourseIntro() {
    return (
        <div className="course-intro-pane">
            <div className="left">
                <img src="/assets/images/course_img.png" alt="" className="course-fm"/>
            </div>
            <div className="right">
                <h3 className="course-title">极系列-H5课程</h3>
                <p className="comment-message">评分: 4.16667 分&emsp;&emsp;评价人数: 12 人</p>
                <p className="teacher-name">讲师: 神雕</p>
                <a className="get-course" href="#">立即学习</a>
            </div>
        </div>
    )
}