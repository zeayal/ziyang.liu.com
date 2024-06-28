'use client';
import { useEffect, useState } from "react";
import http from "../utils/http";
import { useRouter } from "next/navigation";
import styles from './Articles.module.css';

const Posts = () => {
    const [artiles, setArticles] = useState([]);
    const router = useRouter();

    // 获取文章列表
    const getPost = async () => {
        try {
            const res = await http.get('/api/v1/posts');
            console.log(res);
            setArticles(res.data.list);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    useEffect(() => { getPost() }, [])

    return (

        <div className={styles.articlesContainer}>
            <h1>已创建文章列表</h1>

            {/* // 文章列表展示 */}
            <div className={styles.articles}>

                {
                    artiles.map(article => (
                        <div className={styles.article} key={article._id}>
                            <h3><span className={styles.colLable}>文章标题: </span>{article.title}</h3>
                            <p><span className={styles.colLable}>文章内容: </span>{article.body}</p>
                        </div>
                    ))
                }
            </div>

            {/* 新增文章按钮 */}
            <button onClick={() => router.push('/articles/create')}>新增</button>

        </div>

    )

}



export default Posts;