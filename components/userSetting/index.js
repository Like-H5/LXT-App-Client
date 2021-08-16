import {useEffect} from "react";

require("./index.less")

export default function UserSetting() {

    useEffect(() => {
        // 容器组件选项卡切换效果
        // 0. 通过变量, 记录当前选中的索引值
        let currentIndex = 0;

        // 1. 获取到所有的选项卡和面板元素
        let tabs = document.querySelectorAll(".tabs>li");
        let panes = document.querySelectorAll(".panes>li");

        // 2. 每一个选项卡, 监听对应的鼠标单击事件
        for (let i = 0, len = tabs.length; i < len; i++) {
            let tab = tabs[i];
            tab.onclick = function () {
                // 2.1 切换选项卡的选中状态
                tabs[currentIndex].classList.remove("current");
                tabs[i].classList.add("current");

                // 2. 切换面板的显示(联动)
                panes[currentIndex].classList.remove("current");
                panes[i].classList.add("current");
                currentIndex = i;


            }
        }

    }, [])

    return (
        <div className="bx edit-pane">
            <ul className="tabs">
                <li className="current">资料设置</li>
                <li>账号设置</li>
            </ul>
            <ul className="panes">
                <li className="current">
                    <p className="notice">完善个人资料是让别人认识你的第一步</p>
                    <table>
                        <caption>用户头像</caption>
                        <tbody>
                        <tr>
                            <td><label> </label></td>
                            <td>
                                <div className="header-wrap">
                                    <img className="header-img"
                                         src="https://like-h5.github.io/JXL-H5-LXT-Client/dist/assets/images/header.png"
                                         alt=""/>
                                        <div className="mask">点击上传头像</div>
                                        <input className="header-file" type="file" name="header" value="上传头像"/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <form action="" id="userEdit">
                        <table>
                            <caption>基本信息</caption>
                            <tbody>
                            <tr>
                                <td><label htmlFor="nick_name">昵称: </label></td>
                                <td><input type="text" name="nick_name" id="nick_name" value="撩课Sz"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="intro">简介: </label></td>
                                <td><textarea id="intro" name="intro">撩课学院创始人</textarea></td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td/>
                                <td>
                                    <input type="submit" value="保存"/>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </form>
                </li>
                <li>
                    <p className="notice">请保护好你的账号密码</p>
                    <form action="" id="accountEdit">
                        <table>
                            <caption>账户信息</caption>
                            <tbody>
                            <tr>
                                <td><label htmlFor="account">账号: </label></td>
                                <td><input type="text" name="account" id="account" value="123456" readOnly/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="pwd">旧密码: </label></td>
                                <td><input type="text" name="pwd" id="pwd"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="new-pwd">新密码: </label></td>
                                <td><input type="text" name="new_pwd" id="new-pwd"/></td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td/>
                                <td>
                                    <input type="submit" value="保存"/>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </form>
                </li>
            </ul>
        </div>
    )
}