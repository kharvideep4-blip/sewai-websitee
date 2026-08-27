# Where to put your own PDFs

Drop any PDF file you own the rights to (or have permission to distribute) into
this folder, e.g.:

    public/assets/pdfs/temple-history-booklet.pdf
    public/assets/pdfs/hanuman-chalisa.pdf

Then in `src/data/scripturesData.js`, add an entry with:

    downloadUrl: '/assets/pdfs/temple-history-booklet.pdf'

The file will be served at that exact path and the "Download PDF" button on
the Media page will work immediately — no other code changes needed.

Do NOT add copyrighted books you don't have the rights to distribute
(scanned modern translations, publisher editions, etc.). For those, use an
`external: true` entry pointing to a legitimate public source instead (see
the same data file for examples using archive.org / sacred-texts.com /
Wikisource, which host public-domain scripture translations).
