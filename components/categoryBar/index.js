require("./index.less")

export default function CategoryBar() {
    return (
        <div className="category-bar">
            <div className="content bx">
                <dl>
                    <dt>筛选:</dt>
                    <dd className="selected">全部</dd>
                    <dd>占位</dd>
                    <dd>占位</dd>
                </dl>
            </div>
        </div>
    )
}