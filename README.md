# TDABench 2026 Workshop Website

Project site: https://tdabench.github.io/TDABench2026/
Repository: https://github.com/TDABench/TDABench2026

## Local Development

```bash
# Requires Ruby + Bundler + Jekyll
bundle install
bundle exec jekyll serve --livereload
```

If you don't plan to develop locally, you can edit files directly on GitHub and GitHub Pages will rebuild automatically.

## Where to Edit

- **Program**: `_data/schedule.yml` (this drives `/program/`).
- **Participants**: `_data/participants.yml` (this drives `/participants/`).
- **Home text**: `index.md`.
- **Travel**: `travel.md`.
- **Contact**: `contact.md`.
- **Styles**: `assets/css/style.css`.

## Deploy

1. Push to `main` branch.
2. In **Settings → Pages**, select **Deploy from a branch** → Branch: `main` / folder: `/ (root)`.
3. Your site will be at `https://tdabench.github.io/TDABench2026/`.

> Links use `{{ site.baseurl }}` so the site works correctly as a project site.
