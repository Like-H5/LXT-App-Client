import ajax from "../tools/ajax";

export const getArticleList = () => ajax("/api/client/article/list?page_size=100")

export const getArticleDetail =(id) => ajax("/api/client/article/detail/"+id)

