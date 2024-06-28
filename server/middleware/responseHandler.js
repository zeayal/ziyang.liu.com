function responseHandler(req, res, next) {
    
    // 成功返回
    res.success = (data, msg = 'success') => {
        res.json({
            status: 'success',
            msg,
            data
        })
    }
    // 请求失败处理
    res.error = (statusCode, msg = 'error') => {
        res.json({
            status: statusCode || 'error',
            msg,
            data: null
        })
    }

    next()
}

export default responseHandler;