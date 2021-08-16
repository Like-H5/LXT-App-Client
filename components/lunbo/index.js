import {useEffect, useState} from "react";
import Grade from 'grade-js'

require("./index.less")

export default function Lunbo() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [data, setData] = useState([
        {id: 0, title: "撩课-标题-1", img: "/assets/images/banner-1.jpg"},
        {id: 1, title: "撩课-标题-2", img: "/assets/images/banner-2.jpg"},
        {id: 2, title: "撩课-标题-3", img: "/assets/images/banner-3.jpg"},
        {id: 3, title: "撩课-标题-4", img: "/assets/images/banner-4.jpg"},
        {id: 4, title: "撩课-标题-5", img: "/assets/images/banner-5.jpg"},

    ])
    useEffect(() => {
        window.addEventListener('load', function () {
            Grade(document.querySelectorAll('.lb-bgc'))
        })
    }, [])

    return (
        <div className="like-lb">
            <ul className="images">
                {data.map((item, idx) => {
                    return <li key={item.id} className={idx === currentIndex ? "current": ""}>
                        <a className="lb-bgc" href="">
                            <img src={item.img} alt=""/>
                        </a>
                    </li>
                })}
            </ul>
            <ul className="titles">
                {data.map((item, idx) => {
                    return <li key={item.id} className={idx === currentIndex ? "current": ""} onMouseOver={() => {
                        setCurrentIndex(idx)
                    }}>
                        <a href="#">{item.title}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}