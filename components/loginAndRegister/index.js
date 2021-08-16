import {useEffect, useState} from "react";

require("./index.less")

export default function () {

    const [show, setShow] = useState(false)

    useEffect(() => {

        let currentIndex = 0;

        let tabs = document.querySelectorAll(".lr-pane .tabs li");
        let panes = document.querySelectorAll(".lr-pane .panes li");


        for (let i = 0, len = tabs.length; i < len; i++) {
            let tab = tabs[i];
            tab.onclick = function () {
                tabs[currentIndex].className = "";
                tab.className = "current";

                panes[currentIndex].className = "";
                panes[i].className = "current";

                currentIndex = i;
            }
        }
    }, [])

    return (
        <div className={`lr-mask ${show ? "show" : ""}`}>
            <div className="lr-pane">
                <span className="close iconfont icon-icon_close" onClick={() => {
                    setShow(false)
                }}/>
                <ul className="tabs">
                    <li className="current">账号登录</li>
                    <li>立即注册</li>
                </ul>
                <ul className="panes">
                    <li className="current">
                        <form action="#">
                            <label>
                                <span className="iconfont icon-yonghu"/>
                                <input name="account" type="text" placeholder="请输入账号"/>
                            </label>

                            <label>
                                <span className="iconfont icon-mima1"/>
                                <input name="pwd" type="password" placeholder="请输入密码"/>
                            </label>

                            <input className="btn" type="submit" value="立即登录"/>

                        </form>
                    </li>
                    <li>

                        <form action="#">
                            <label>
                                <span className="iconfont icon-yonghu"/>
                                <input name="account" type="text" placeholder="请输入账号"/>
                            </label>

                            <label>
                                <span className="iconfont icon-mima1"/>
                                <input name="pwd" type="text" placeholder="请输入密码"/>
                            </label>

                            <label>
                                <span className="iconfont icon-querenmima"/>
                                <input name="pwd" type="text" placeholder="请再次输入密码"/>
                            </label>

                            <input className="btn" type="submit" value="立即注册"/>

                        </form>


                    </li>
                </ul>
            </div>
        </div>
    )
}