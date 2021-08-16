
require("./index.less")

export default function TeacherItem() {
    return (
        <div className="teacher-item">
            <div className="intro">
                <div className="message">
                    <img className="t-header" src="/assets/images/zsf.jpg" alt=""/>
                        <div className="t-profile">
                            <p className="position-name is-star">
                                携程CTO: 张三丰
                            </p>
                            <p className="class-count">课程: 100 门</p>
                        </div>
                </div>
                <a className="to-detail" href="#">进入主页</a>
            </div>
            <div className="desc">
                <p>这是人是个人才!</p>
            </div>
        </div>
    )
}