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
      <meta property="og:description" content="Python Documentation in Vietnamese" />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
    </>
  ),
  i18n: [
    { locale: 'vi', text: 'Tiếng Việt' }
  ],
  sidebar: {
    defaultMenuCollapseLevel: 1,
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
