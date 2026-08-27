// ============================================================
// SACRED TEXTS / SCRIPTURE LIBRARY DATA
// ============================================================
// Two kinds of entries:
//
// 1. LOCAL FILES — set `downloadUrl` to a path under /public/assets/pdfs/
//    (e.g. '/assets/pdfs/your-file.pdf') for a PDF you own the rights to.
//    See public/assets/pdfs/README.md for exact steps.
//
// 2. EXTERNAL LINKS — set `external: true` and `downloadUrl` to a
//    legitimate public-domain source (archive.org, sacred-texts.com,
//    Wikisource, etc). These open in a new tab instead of downloading
//    directly from this site. All the entries below are pre-filled with
//    genuine public-domain sources for well-known scriptures so the
//    library works out of the box — swap in your own local PDFs any time.

export const scriptureCategories = [
  { id: 'all', label: 'All Texts' },
  { id: 'scriptures', label: 'Scriptures' },
  { id: 'shlokas', label: 'Shlokas & Mantras' },
  { id: 'history', label: 'Temple History' },
]

export const scripturesData = [
  {
    id: 's1',
    title: 'Bhagavad Gita — The Song Celestial (Edwin Arnold)',
    description: 'The complete Bhagavad Gita in Sir Edwin Arnold\'s classic public-domain verse translation. Free EPUB, Kindle, HTML and plain-text downloads — no login or borrowing required.',
    category: 'scriptures',
    icon: '📖',
    external: true,
    downloadUrl: 'https://www.gutenberg.org/ebooks/2388',
  },
  {
    id: 's2',
    title: 'The Ramayana of Valmiki (Griffith Translation)',
    description: 'Ralph T. H. Griffith\'s complete English verse translation of the Ramayana. Free EPUB, Kindle, HTML and plain-text downloads on Project Gutenberg.',
    category: 'scriptures',
    icon: '📖',
    external: true,
    downloadUrl: 'https://www.gutenberg.org/ebooks/24869',
  },
  {
    id: 's3',
    title: 'The Upanishads (Max Müller Translation)',
    description: 'A public-domain translation of the principal Upanishads by F. Max Müller. Free EPUB, Kindle, HTML and plain-text downloads on Project Gutenberg.',
    category: 'scriptures',
    icon: '📖',
    external: true,
    downloadUrl: 'https://www.gutenberg.org/ebooks/3283',
  },
  {
    id: 's4',
    title: 'Rig Veda (Griffith Translation)',
    description: "Ralph T. H. Griffith's classic English translation of the Rig Veda, freely readable hymn-by-hymn on Sacred-Texts.com.",
    category: 'scriptures',
    icon: '📖',
    external: true,
    downloadUrl: 'https://sacred-texts.com/hin/rigveda/index.htm',
  },
  {
    id: 's5',
    title: 'Vishnu Purana (Wilson / Dutt Translation)',
    description: 'A public-domain English translation of the Vishnu Purana. Free EPUB, Kindle, HTML and plain-text downloads on Project Gutenberg.',
    category: 'scriptures',
    icon: '📖',
    external: true,
    downloadUrl: 'https://www.gutenberg.org/ebooks/66208',
  },

  // ---- Example "local file" entries (commented out until you add real
  // PDFs to public/assets/pdfs/ — see the README there) ----
  // {
  //   id: 'h1',
  //   title: 'Our Temple\'s History Booklet',
  //   description: 'A short illustrated history of our temple, its founding, and its restorations.',
  //   category: 'history',
  //   icon: '🏛️',
  //   external: false,
  //   downloadUrl: '/assets/pdfs/temple-history-booklet.pdf',
  // },
]

// A handful of short, well-known public-domain shlokas/mantras to display
// directly on the page (not full books — just the verse text + meaning).
export const featuredShlokas = [
  {
    id: 'sh1',
    title: 'Gayatri Mantra',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
    meaning: 'We meditate on the glory of the Creator; may He illuminate our intellect.',
  },
  {
    id: 'sh2',
    title: 'Mahamrityunjaya Mantra',
    sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्',
    meaning: 'We worship the three-eyed Lord who nourishes all; may He free us from bondage and grant liberation.',
  },
  {
    id: 'sh3',
    title: 'Shanti Mantra',
    sanskrit: 'ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै। तेजस्वि नावधीतमस्तु मा विद्विषावहै। ॐ शान्तिः शान्तिः शान्तिः',
    meaning: 'May we be protected together, nourished together; may our efforts be vigorous and enlightening. May there be peace.',
  },
]
