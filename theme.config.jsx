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
  navbar: {
    extraContent: (
      <a
        href="/quiz"
        style={{
          padding: '8px 16px',
          backgroundColor: '#7c3aed',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '14px',
          transition: 'all 0.2s',
          display: 'inline-block',
          boxShadow: '0 2px 4px rgba(124, 58, 237, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#6d28d9';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 8px rgba(124, 58, 237, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#7c3aed';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 4px rgba(124, 58, 237, 0.3)';
        }}
      >
        ⚡ Trắc nghiệm
      </a>
    )
  },
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
      <meta property="og:description" content="Python Documentation in Vietnamese" />
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
