# ardiebarrysailis.com

Personal academic website of Ardie Barry Sailis, built with Jekyll and the al-folio theme. GitHub Actions builds the site and publishes it to GitHub Pages every time something changes on the `main` branch.

## Add a new paper

1. Open `_data/papers.yml`.
2. Copy an existing entry and paste it at the top of the list.
3. Change the details: title, authors, journal, year, published date, DOI, project, short name and abstract.
4. Commit the change. The site updates in a few minutes.

The paper count, Publications page, CV, CV PDF, Projects page, journal charts and Latest News all update from that one file. If the paper is in a journal that isn't listed yet, also add the journal to `_data/journals.yml`.

## Other things you can edit

- `_data/news.yml`: news that isn't a new paper
- `_data/talks.yml`: talks, conferences and workshops (Talks page and CV)
- `_data/socials.yml`: email and profile links
- `_pages/`: the text on each page

## License

The site code is based on [al-folio](https://github.com/alshedivat/al-folio) (MIT License, see `LICENSE`). The writing, photos and papers belong to Ardie Barry Sailis.
