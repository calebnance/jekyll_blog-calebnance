# blog.calebnance.com

Originally my blog was a Joomla 1.5 website, I've recently converted it to [Jekyll](https://github.com/jekyll). I took into account almost all pages; I was able to redirect or re-create the original urls for posts/categories with ease. I am so impressed with Jekyll and wanted to share my findings here. I'll probably write some blog posts about them as well.

### [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) Score

<p align="left">
  <img src="lighthouse-score.png?raw=true" width="800" />
</p>

- Performance: **99/100**
- Progressive Web App: **100/100**
- Accessibility: **100/100**
- Best Practices: **100/100**
- SEO: **100/100**

### View This Code To See Examples Of:

- Environment handling builds
- Templating with Jekyll
  - Multiple layout usage
  - Layouts & Includes broken out
  - Post layout type
  - Flat tutorial layout type
- Post tags
- Post Category(ies)
- Post Disqus Comment implementation
- Google Analytics
- Related posts
- Posted and Updated date support
- Progressive Web App

### Plugins & Gems

Below are the plugins and gems I've used:

- [jekyll-feed](https://github.com/jekyll/jekyll-feed)
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)
- [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from)
- [octopress-minify-html](https://github.com/octopress/minify-html)

### Syntax Highlighter

- [Rouge](https://github.com/jneen/rouge)

### Requirements

- Brew
  - [Install Brew](https://brew.sh/)
  - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Ruby
  - `brew install ruby`

### Jekyll Commands

**Install Bundler and Jekyll Gems**
`gem install jekyll bundler`

**Bundle**  
`bundle install`

**Serve Locally**  
`jekyll serve --incremental`  
`bundle exec jekyll serve --incremental`  
`jekyll serve --livereload`

**Build Locally**  
`jekyll build`  
`jekyll build --watch`

**Update Jekyll**
`bundle update jekyll`

**Build for Production**

**_remember to comment out minify_html in config.xml_**

`JEKYLL_ENV=production jekyll build`

`JEKYLL_ENV=production bundle exec jekyll build`

prepend `exec jekyll` as needed
