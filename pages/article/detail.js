import BreadNav from "../../components/breadNav";


export default function ArticleDetail() {

    return (
        <>
            <BreadNav/>
            <div className="news-detail bx">
                <h3 className="title">撩课学院-极系列课程</h3>
                <p className="time">2021-12-30 12:12:00</p>
                <div className="content">
                    <p>随便一个段落</p>
                    <h4>小标题</h4>
                </div>
            </div>

            <style jsx>{`
              .news-detail {
                text-align: center;
              }

              .news-detail>.title {
                font-size: 22px;
                color: #000;
                margin: 10px 0;
              }

              .news-detail>.time {
                font-size: 14px;
                color: #999;
              }

              .news-detail>.content {
                padding-top: 15px;
                text-align: left;
                min-height: 300px;
              }

            `}</style>
        </>
    )
}