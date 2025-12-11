import { useRouter } from 'next/router';
import { M3 } from '../styles/quizStyles';

export default function QuizLogo() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <button
      onClick={goHome}
      style={styles.logoButton}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.opacity = '1';
      }}
    >
      <img
        src="/logo.svg"
        alt="Bumbii Academy"
        style={styles.logo}
      />
      <span style={styles.logoText}>Bumbii Academy</span>
    </button>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  logoButton: {
    display: 'flex',
    alignItems: 'center',
    gap: M3.spacing.md,
    padding: M3.spacing.md,
    backgroundColor: M3.colors.surfaceVariant,
    border: `1px solid ${M3.colors.outlineVariant}`,
    borderRadius: M3.radius.md,
    cursor: 'pointer',
    transition: 'all 0.18s ease',
    marginBottom: M3.spacing.xl,
    boxShadow: M3.elevation.level2
  },
  logo: {
    height: '40px',
    width: 'auto'
  },
  logoText: {
    ...M3.typography.titleLarge,
    color: M3.colors.onSurface,
    fontFamily: "'Space Grotesk', sans-serif",
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    margin: 0
  }
};
