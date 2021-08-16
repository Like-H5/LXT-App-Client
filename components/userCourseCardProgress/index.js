
require("./index.less")

export default function UserCourseCardProgress() {
    return (
        <div className="course-progress-card column5">
            <div className="image">
                <span className="tag">热门</span>
                <a href="#">
                    <img src="/assets/images/course_img.png" alt=""/>
                </a>
            </div>
            <div className="title">
                <a href="#">
                    极系列-H5全栈-Sz
                </a>
            </div>
            <div className="progress-pane">
                <div className="progress-bar">
                    <div className="value" style={{width: "15%"}}/>
                </div>

            </div>
            <div className="progress-text">
                已学习1/10课时
            </div>
        </div>
    )
}