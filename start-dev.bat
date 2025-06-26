@echo off
echo 启动 React 开发服务器...
echo.
echo 项目信息:
echo - 名称: React Template
echo - 端口: 3000
echo - 环境: 开发环境
echo.
echo 正在安装依赖...
call npm install
echo.
echo 启动开发服务器...
call npm run dev
pause
