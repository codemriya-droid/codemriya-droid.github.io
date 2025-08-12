# Personal Technical Blog

Welcome! 👋 This is the source code repository for my personal technical blog, where I share thoughts, notes, and experiences in software development.

## Live Site

The blog is available at: **https://codemriya-droid.github.io**

## Technology Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Templating**: Nunjucks
- **Styling**: Custom CSS
- **Hosting**: GitHub Pages
- **Deployment**: Automatic via GitHub Actions

## Project Structure

```
├── _includes/          # Nunjucks templates
├── css/               # Stylesheets
├── posts/             # Blog post Markdown files
├── .eleventy.js       # Eleventy configuration
├── blog.md            # Blog listing page
├── index.md           # Homepage
└── package.json       # Dependencies
```

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   
3. **Open your browser** to `http://localhost:8080`

## Content Management

All blog posts are Markdown files in the `/posts` directory with the following front matter structure:

```yaml
---
layout: base.njk
title: "Your Post Title"
permalink: /blog/your-post-slug/
date: YYYY-MM-DD
---
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. GitHub Actions handles the build and deployment process.

## License

This project is open source and available under the MIT License.
