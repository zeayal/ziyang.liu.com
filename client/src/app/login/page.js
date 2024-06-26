import Image from "next/image";

export default function Home() {


    const handleClickLogin = () => {
        // 获取用户输入的： 用户名 + 密码
        const userName = '';
        const password = '';
        // 调用服务端接口验证

        // 验证成功获取用户信息 + token  

        // 提示用户登陆成功 跳转 home 页面

        // 如果没有登陆成功 ，报错给用户
    }

    return (
        <div>
            登陆页面

            <button onClick={handleClickLogin}>登陆</button>
        </div>
    )
}