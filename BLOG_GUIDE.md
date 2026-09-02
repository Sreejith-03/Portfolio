# How to publish a new blog every day

Open `src/data/blogPosts.js` and copy one complete post object. Paste the copy at
the top of the `blogPosts` array, then update its values.

```js
{
  id: "unique-blog-url-name",
  title: "Your Blog Title",
  excerpt: "A short summary displayed on the blog card.",
  date: "2026-08-26",
  readTime: "5 min read",
  category: "Data Science",
  content: [
    "Your first paragraph.",
    "Your second paragraph.",
    "Your third paragraph."
  ]
},
```

Rules:

1. Every `id` must be different.
2. Write the date as `YYYY-MM-DD`.
3. Put a comma after the closing `}` when more posts follow it.
4. Save the file and run `npm run dev` to preview the new article.
5. Commit and push the update to publish it on your hosted portfolio.

The **Blogs** link in the website header opens the separate \`#/blogs\` page.
Hash-based navigation is used so the page also works when hosted on GitHub Pages.
