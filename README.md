# Ruxuan Chen · Research Portfolio

A modern academic personal website for GitHub Pages, including:

- Education and research interests
- Publications with author roles, status, JCR notes, and citations
- Research projects and mathematical study notes
- Responsive layout and dark mode
- Automated GitHub Pages deployment

## Quick start

1. Keep the repository name as `csusheu.github.io` for the personal-site URL, or change it to your own `<username>.github.io` repository.
2. Edit `index.html` for visible profile content and links.
3. Edit `data/profile.json` as the structured source for future migration to Markdown, Astro, or a CMS.
4. Push to GitHub and wait for the `Deploy to GitHub Pages` workflow.

## Local preview

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Directory guide

```text
index.html              页面结构与示例内容
styles.css              学术风格视觉系统、响应式布局、暗色模式
script.js               主题切换、笔记筛选、滚动导航
data/profile.json       可迁移的个人信息与内容数据
.github/workflows/      GitHub Pages 部署配置
```
