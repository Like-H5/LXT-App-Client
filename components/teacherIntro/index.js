
require("./index.less")

export default function TeacherIntro() {
    return (
        <div className="teacher-intro">
            <div className="content bx">
                <img className="t-header" src="/assets/images/zsf.jpg" alt=""/>
                    <div className="intro-pane">
                        <p className="t-position-name is-star">携程CTO: 张三丰</p>
                        <p className="desc">张三丰, 厉害害</p>
                    </div>
            </div>
        </div>
    )
}