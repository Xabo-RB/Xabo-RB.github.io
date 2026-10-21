# xabo · Xabier Rey Barreiro

English academic profile for GitHub Pages, built with the repository's existing Jekyll setup. Content is based on the supplied November 2026 curriculum vitae and the existing researcher profile. The profile includes the postdoctoral appointment beginning in September 2026, the completed doctorate, and the latest teaching, supervision, publications and outreach. Teaching and undergraduate thesis supervision use formal tables.

## Edit the site

- `_includes/academic/`: biography, research, publications, experience, education, teaching, training and talks.
- `_layouts/academic.html`: shared document, navigation and footer.
- `_pages/`: a concise homepage (profile, research and GitHub link) and separate Publications and Conferences, Teaching, and Curriculum tabs. The complete CV includes section links for experience, education, projects, publications, teaching, training and outreach.
- `assets/css/academic.css`: responsive styling and A4 print layout.
- `assets/js/academic.js`: publication year filters and CV printing.

No frontend build or external font service is needed. All content and navigation remain available without JavaScript. The CV page has a **Print / Save as PDF** button; the browser's print command also works.

## Preview with Jekyll

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000. GitHub Pages can build the site from the root of the existing publishing branch. Push the reviewed changes using the repository's normal workflow to publish them.

Legacy Academic Pages examples are retained in the repository but excluded from the site. Existing `/about/`, `/about.html`, `/resume`, `/resume/` and `/curriculum/` links redirect to their current pages. The legacy `/projects/` route redirects to the projects section of `/cv/`. Publications and conferences remain at `/publications/`, and teaching at `/teaching/`. The original template license remains in `LICENSE`.
