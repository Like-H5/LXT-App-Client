require("./index.less")

export default function TeacherCard() {

    return (
        <div className="teacher-card column3">
            <div className="left">
                <a href="#">
                    <img className="t-header" src="/assets/images/zsf.jpg" alt=""/>
                    <div className="t-name">张三丰</div>
                </a>
            </div>
            <div className="right">
                <div className="t-position">腾讯CEO</div>
                <div className="t-intro">
                    张三丰, 啥都会, 厉害得很!
                </div>
            </div>
        </div>
    )
}