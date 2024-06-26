'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginPage.module.css';


export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleClickLogin = async (e) => {
        e.preventDefault();
        // 获取用户输入的： 用户名 + 密码
        console.log("username", username);
        console.log("password", password);
        // 调用服务端接口验证
        // 验证成功获取用户信息 + token  
        // 提示用户登陆成功 跳转 home 页面
        // 如果没有登陆成功 ，报错给用户
        try {
            const response = await fetch('http://localhost:3001/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            const res = await response.json();

            if (res.status === 'ok') {
                // 登录成功
                console.log('Login successful!')
                // 存储token
                localStorage.setItem('token', res.data.token)
                // 跳转到post页面
                router.push('/dashbord');

            } else {
                // 登录失败
                alert(res.msg)
            }
        } catch (error) {
            console.error('An error occurred:', error);

        }
    }

    return (
        <div className={styles.loginContainer}>

            <h2>login</h2>

            <form onSubmit={handleClickLogin}>
                <div className={styles.foemItem}>
                    <lable htmlFor="username">用户名:</lable>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        // placeholder=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.foemItem}>
                    <lable htmlFor="password">密 码：</lable>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.logButton} type="submit">登陆</button>
            </form>


        </div>
    )
}