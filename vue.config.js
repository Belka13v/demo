module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8081"
            },
            "/login": {
                target: "http://localhost:8081/login"
            }
        }
    }
};