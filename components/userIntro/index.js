
require("./index.less")

export default function UserIntro() {
    return (
        <div className="user-info-pane">
            <img className="user-header" src="/assets/images/header.png" alt=""/>
                <span className="user-nickname">撩课-Sz</span>
                <span className="zym">生于忧患, 死于安乐</span>
        </div>
    )
}