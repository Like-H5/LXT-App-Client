
require("./index.less")

export default function MiniNavBar() {
    
    return (
        <div className="navbar-mini">
            <div className="content bx">
                <div className="left">
                    <h1 className="logo">
                        <a href="#">
                            撩学堂
                        </a>
                    </h1>
                    <ul className="menus">
                        <li className="current"><a href="#">讲师</a></li>
                        <li><a href="#">课程</a></li>
                        <li><a href="#">文章</a></li>
                    </ul>
                </div>
                <div className="center">
                    <form action="">
                        <div className="search-bar">
                            <div className="category">
                                <label>
                                    <select name="category">
                                        <option value="all">全部</option>
                                        <option value="course">课程</option>
                                        <option value="teacher">讲师</option>
                                        <option value="article">文章</option>
                                    </select>
                                </label>
                            </div>
                            <div className="keyword">
                                <label>
                                    <input type="text" placeholder="请输入搜索关键字" name="kw"/>
                                </label>
                            </div>
                            <div className="submit-btn">
                                <input className="iconfont" type="submit" value="&#xe610;"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <div className="intro">
                        <div className="user">
                            <span className="nick-name">用户昵称: sz</span>
                            <img className="header" src="/assets/images/header.png" alt=""/>
                        </div>
                        <div className="operation-pane">
                            <ul className="operation">
                                <li><a href="#">撩课学院 - itlike.com</a></li>
                                <li>我的学习</li>
                                <li>设置</li>
                                <li className="exit">退出</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}