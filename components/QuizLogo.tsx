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
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: 'none',
    borderRadius: M3.radius.md,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backdropFilter: 'blur(10px)',
    marginBottom: M3.spacing.xl,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  logo: {
    height: '40px',
    width: 'auto'
  },
  logoText: {
    ...M3.typography.titleLarge,
    color: 'white',
    fontFamily: "'Space Grotesk', sans-serif",
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    margin: 0
  }
};
