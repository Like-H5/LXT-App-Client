

require("./index.less")

export default function CourseCard() {

    return (
        <div className="course-card column5">
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
            <div className="score">
                <div className="star">
                    <div className="y_star" style={{width: "60%"}}/>
                </div>
                <span className="score_text">4分</span>
            </div>
            <div className="zan">
                <span className="good iconfont icon-icon_good">100人好评</span>
            </div>
        </div>
    )
}