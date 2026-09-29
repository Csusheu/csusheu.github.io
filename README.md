# Lin Xu · Academic Portfolio

一个适合 GitHub Pages 的现代学术个人主页模板，包含：

- 教育经历与研究方向
- Publications / 论文列表
- Projects / 研究项目
- Notes / 学习笔记
- 响应式布局与深色模式
- GitHub Pages 自动部署工作流

## 快速开始

1. 把仓库名称改成 `你的用户名.github.io`，或在 GitHub 仓库的 Pages 设置中选择 `GitHub Actions`。
2. 编辑 `index.html` 中的姓名、学校、论文、项目、邮箱和社交链接。
3. 编辑 `data/profile.json`，作为后续将内容拆分到 CMS、Astro 或 Markdown 时的统一数据源。
4. 推送到 GitHub，等待 `Deploy to GitHub Pages` 工作流完成。

## 本地预览

```bash
python3 -m http.server 4173
```

然后打开 http://localhost:4173。

## 目录说明

```text
index.html              页面结构与示例内容
styles.css              学术风格视觉系统、响应式布局、暗色模式
script.js               主题切换、笔记筛选、滚动导航
data/profile.json       可迁移的个人信息与内容数据
.github/workflows/      GitHub Pages 部署配置
```

