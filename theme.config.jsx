export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src="/logo.svg"
        alt="Bumbii Academy Logo"
        style={{ height: '40px', width: 'auto' }}
      />
      <span style={{ fontWeight: 600, fontSize: '18px' }}>Lập trình Python</span>
    </div>
  ),
  project: {
    link: 'https://www.youtube.com/@bumbii.academy',
    icon: (
      <img src="/youtube.svg" alt="YouTube" style={{ width: '48px', height: '48px' }} />
    )
  },
  docsRepositoryBase: 'https://github.com/your-username/python_gitbook/tree/main',
  footer: {
    text: 'Lập trình Python - Bumbii Academy'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Lập trình Python'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Lập trình Python" />
      <meta property="og:description" content="Tài liệu & bài tập Python Tiếng Việt" />
      <meta property="og:image" content="https://python.bumbii.tech/facebook-banner.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Lập trình Python - Bumbii Academy" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://python.bumbii.tech/facebook-banner.png" />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
    </>
  ),
  i18n: [
    { locale: 'vi', text: 'Tiếng Việt' }
  ],
  sidebar: {
    defaultMenuCollapseLevel: Infinity,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  }
}
