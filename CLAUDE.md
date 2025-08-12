# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal technical blog built with Eleventy (11ty) static site generator and hosted on GitHub Pages. The blog documents software development projects and experiences in English.

## Development Commands

### Local Development
- **Start development server**: `npm run dev` or `npx @11ty/eleventy --serve`
  - Serves the site at http://localhost:8080 with hot reload
  - Watches for file changes and rebuilds automatically

### Build and Deploy
- **Build site**: `npx @11ty/eleventy`
  - Generates static files in `_site/` directory
- **Deploy**: Push to `main` branch - GitHub Actions automatically builds and deploys to GitHub Pages

### Testing and Quality
- No specific lint or typecheck commands are configured for this project
- Manual testing is done via local development server
- Content validation through preview before publishing

## Content Architecture

### Blog Post Structure
All blog posts are Markdown files located in the `/posts` directory with required front matter:

```yaml
---
layout: base.njk
title: "Post Title"
permalink: /blog/post-slug/
date: YYYY-MM-DD
tags: ["tag1", "tag2"] # Optional, for categorization
description: "Brief post description for SEO" # Optional
---
```

### Blog Structure
- All posts: `/posts/filename.md` → `/blog/post-slug/`
- Blog listing page: `/blog.md` → `/blog/` (shows all posts)
- Posts collection automatically created from `/posts/*.md` files
- Homepage: `index.md` with front matter and Markdown content

### Template System
- **Base template**: `_includes/base.njk` - Main HTML structure for all pages
- **CSS**: Single stylesheet at `/css/style.css` copied to output
- **Static assets**: Automatically copied via Eleventy passthrough

## File Organization

```
├── _includes/          # Nunjucks templates
│   └── base.njk       # Main page template
├── _site/             # Generated output (git ignored)
├── css/               # Stylesheets
│   └── style.css      # Main stylesheet
├── posts/             # Blog post Markdown files
├── .eleventy.js       # Eleventy configuration
├── blog.md            # Blog listing page
├── index.md           # Homepage content
├── package.json       # Node.js dependencies
└── README.md          # User-facing documentation
```

## Eleventy Configuration

The `.eleventy.js` configuration:
- Copies CSS files to output via passthrough copy
- Sets input directory to root (`.`)
- Uses `_includes` for templates
- Outputs to `_site` directory
- Creates posts collection from files in `/posts` directory
- Configures permalink structure for blog posts

## Content Creation Workflow

1. **Create post file**: Add new `.md` file in `/posts` directory
2. **Add front matter**: Include layout, title, permalink, and date
3. **Write content**: Use Markdown syntax for post body
4. **Test locally**: Run `npm run dev` to preview changes
5. **Deploy**: Commit and push to `main` branch for automatic deployment

## Best Practices

### When Working with Content
- Always preview posts locally before publishing
- Use consistent permalink structure: `/blog/post-slug/`
- Include proper front matter for all posts
- Follow existing file naming conventions

### When Making Changes
- Prefer editing existing files over creating new ones
- Don't create unnecessary documentation files
- Test changes locally before committing
- Use descriptive commit messages

## GitHub Pages Deployment

- **Site URL**: https://codemriya-droid.github.io
- **Deployment**: Automatic on push to `main` branch
- **Build process**: GitHub Actions handles Eleventy build and deployment
- **Branch**: All changes should be made to `main` branch