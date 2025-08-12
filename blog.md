---
layout: base.njk
title: "Blog Posts"
permalink: /blog/
description: "All blog posts about software development, tutorials, and coding projects."
---

## All Blog Posts

<div class="blog-listing">
{% for post in collections.posts reversed %}
  <article class="blog-card">
    <h3 class="blog-card-title">
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </h3>
    
    <div class="blog-card-meta">
      <time datetime="{{ post.data.date | date: '%Y-%m-%d' }}" class="blog-card-date">
        {{ post.data.date | date: '%B %d, %Y' }}
      </time>
      
      {% if post.data.tags %}
      <div class="blog-card-tags">
        {% for tag in post.data.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    
    {% if post.data.description %}
    <p class="blog-card-description">{{ post.data.description }}</p>
    {% endif %}
    
    <a href="{{ post.url }}" class="blog-card-link">Read more →</a>
  </article>
{% endfor %}
</div>

{% if collections.posts.size == 0 %}
<div class="empty-state">
  <p>No blog posts yet. Check back soon for new content!</p>
</div>
{% endif %}