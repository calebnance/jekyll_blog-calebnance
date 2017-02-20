# blog.calebnance.com

Originally my blog was a Joomla 1.5 website, I've recently converted it to [Jekyll](https://github.com/jekyll). I took into account almost all pages, and redirected or re-created the original url for posts/categories with ease. I have been so impressed with Jekyll and have wanted to share my findings here, and I'll probably write some blog posts about them as well.  

### Plugins & Gems
Below are the plugins and gems I've used to accomplish the things I needed to:  
- [jekyll-feed](https://github.com/jekyll/jekyll-feed)  
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)  
- [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from)  
- [octopress-minify-html](https://github.com/octopress/minify-html)  

#### Serve & Build Commands
**Serve Locally**  
`$ jekyll serve --incremental`  
`$ bundle exec jekyll serve --incremental`  

**Build Locally**  
`$ jekyll build`  

**Build for Production**  
`$ JEKYLL_ENV=production bundle exec jekyll build`  
