'use client';
import { useState } from "react";
import http from "../../utils/http";
import { useRouter } from "next/navigation";

const Create = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();

    // 新增文章
    const createArticle = async (e) => {
        e.preventDefault();

        // 调用接口
        try {
            const res = await http.post('/api/v1/posts', { title, desc, author, body });
            // console.log('create res: ', res);
            // 判断是否新建成功
            if (res.status === 'success') {
                alert(res.msg);
                setTitle('');
                setDesc('');
                setAuthor('');
                setBody('');
                router.push('/articles');
            } else {
                alert(res.msg);
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <div onSubmit={createArticle} >
            <h2>创建新的文章：</h2>
            <form>
                <div>
                    <lable>文章标题：</lable>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <lable>文章描述：</lable>
                    <input
                        type='text'
                        id='desc'
                        name='desc'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <lable>文章作者：</lable>
                    <input
                        type='text'
                        id='author'
                        name='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <lable>文章内容：</lable>
                    <input
                        type='text'
                        id='body'
                        name='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>

                <button type='submit'>提交</button>
            </form>
        </div>
    )


}



export default Create;