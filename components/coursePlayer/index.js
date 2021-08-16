import {useEffect} from "react";

require("./index.less")
// import DPlayer from "dplayer"

export default function CoursePlayer() {

    useEffect(() => {
        if (window) {
            import("dplayer").then(({default: DPlayer})=>{
                const dp = new DPlayer({
                    container: document.getElementById('like-player'),
                    screenshot: true,
                    video: {
                        url: '/assets/videos/test.mp4'
                    }
                });
            })

        }

    }, [])

    return (
        <div className="play-container">
            <div className="left">
                <div className="top">
                    <a href="#" className="back-course">返回课程主页</a>
                    <span className="pre-course"/>
                </div>
                <div className="play-pane">
                    <p className="class-title">极系列-H5-第一节课</p>
                    <div className="player">
                        <div id="like-player">

                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span className="next-course"/>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    课程目录
                </div>
                <div className="items">
                    <div className="course-dg no-view">
                        <ul className="dg">
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress finished"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress no-finish"/>
                                <span
                                    className="c-title">Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress finished"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress no-finish"/>
                                <span
                                    className="c-title">Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress finished"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress no-finish"/>
                                <span
                                    className="c-title">Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress finished"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress no-finish"/>
                                <span
                                    className="c-title">Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress finished"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress no-finish"/>
                                <span
                                    className="c-title">Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress finished"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress no-finish"/>
                                <span
                                    className="c-title">Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress finished"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress no-finish"/>
                                <span
                                    className="c-title">Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>
                            <li>
                                <span className="c-num">课时1: </span>
                                <span className="c-progress"/>
                                <span className="c-title">Python爬虫-必备基础-概述</span>
                                <a href="#" className="c-view">立即观看</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}