import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import QuizLogo from '../../components/QuizLogo';
import { M3 } from '../../styles/quizStyles';

export default function QuizResults() {
  const router = useRouter();
  const [results, setResults] = useState<{
    correct: number;
    total: number;
    wrongTopics: string[];
  } | null>(null);

  const topicMap: { [key: string]: string } = {
    'bien-so': 'Biến (Variable)',
    'gia-tri-va-kieu-du-lieu': 'Giá trị và Kiểu dữ liệu',
    'in-ket-qua-thong-tin-voi-ham-print': 'Hàm print()',
    'kieu-du-lieu-chuoi': 'Chuỗi ký tự (String)',
    'string-methods': 'Các phương thức của String',
    'ham-function': 'Hàm (Function)',
    'cau-truc-re-nhanh': 'Cấu trúc rẽ nhánh (If-Elif-Else)',
    'vong-lap-for-voi-ham-range': 'Vòng lặp for với hàm range()',
    'vong-lap-while': 'Vòng lặp while',
    'list': 'Danh sách (List)',
    'dictionary': 'Từ điển (Dictionary)',
    'tuple': 'Tuple',
    'set': 'Tập hợp (Set)',
    'list-comprehension': 'List Comprehension',
    'exception-handling': 'Exception Handling',
    'modules': 'Modules',
    'args-kwargs': '*args và **kwargs',
    'recursion': 'Đệ quy (Recursion)',
    'boolean': 'Boolean',
    'cac-toan-tu-so-hoc': 'Các toán tử số học',
    'toan-tu-logic': 'Toán tử logic',
    'break-continue-pass': 'Break, Continue và Pass',
    'file-operations': 'Đọc và Ghi File',
    'working-with-json': 'Làm việc với JSON',
    'decorators': 'Decorators',
    'generators-iterators': 'Generators và Iterators'
  };

  useEffect(() => {
    if (router.isReady) {
      const { correct, total, wrong } = router.query;

      if (!correct || !total) {
        router.push('/quiz');
        return;
      }

      setResults({
        correct: parseInt(correct as string),
        total: parseInt(total as string),
        wrongTopics: wrong ? (wrong as string).split(',').filter(t => t) : []
      });
    }
  }, [router.isReady]);

  const restartQuiz = () => {
    router.push('/quiz');
  };

  const reviewTopics = () => {
    if (results && results.wrongTopics.length > 0) {
      const firstTopic = results.wrongTopics[0];
      window.open(`/ngon-ngu-python/${firstTopic}`, '_blank');
    }
  };

  if (!results) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}>⚡</div>
        <div style={styles.loadingText}>Đang tải kết quả...</div>
      </div>
    );
  }

  const percentage = Math.round((results.correct / results.total) * 100);

  let performanceData = {
    message: '',
    emoji: '',
    color: ''
  };

  if (percentage === 100) {
    performanceData = { message: 'Hoàn hảo!', emoji: '🏆', color: '#f59e0b' };
  } else if (percentage >= 90) {
    performanceData = { message: 'Xuất sắc!', emoji: '🌟', color: '#10b981' };
  } else if (percentage >= 70) {
    performanceData = { message: 'Tốt lắm!', emoji: '👍', color: '#10b981' };
  } else if (percentage >= 50) {
    performanceData = { message: 'Cần cố gắng thêm!', emoji: '💪', color: '#f59e0b' };
  } else {
    performanceData = { message: 'Hãy ôn tập lại nhé!', emoji: '📚', color: '#ef4444' };
  }

  return (
    <div style={styles.container}>
      <QuizLogo />
      <div style={styles.content}>
        {/* Celebration Header */}
        <div style={styles.celebrationHeader}>
          <div style={styles.confetti}>🎊</div>
          <h1 style={styles.mainTitle}>Kết quả Trắc nghiệm</h1>
          <div style={styles.confetti}>🎉</div>
        </div>

        {/* Score Card */}
        <div style={styles.scoreCard}>
          <div style={{
            ...styles.performanceBadge,
            backgroundColor: performanceData.color
          }}>
            <span style={styles.performanceEmoji}>{performanceData.emoji}</span>
            <span style={styles.performanceText}>{performanceData.message}</span>
          </div>

          <div style={styles.scoreCircleContainer}>
            <div style={{
              ...styles.scoreCircle,
              borderColor: performanceData.color
            }}>
              <div style={{
                ...styles.scorePercentage,
                color: performanceData.color
              }}>
                {percentage}%
              </div>
              <div style={styles.scoreSubtext}>
                {results.correct}/{results.total} câu đúng
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div style={styles.statsRow}>
            <div style={styles.statBox}>
              <div style={{ ...styles.statIcon, backgroundColor: '#10b981' }}>✓</div>
              <div style={styles.statValue}>{results.correct}</div>
              <div style={styles.statLabel}>Đúng</div>
            </div>
            <div style={styles.statBox}>
              <div style={{ ...styles.statIcon, backgroundColor: '#ef4444' }}>✗</div>
              <div style={styles.statValue}>{results.total - results.correct}</div>
              <div style={styles.statLabel}>Sai</div>
            </div>
            <div style={styles.statBox}>
              <div style={{ ...styles.statIcon, backgroundColor: '#7c3aed' }}>📝</div>
              <div style={styles.statValue}>{results.total}</div>
              <div style={styles.statLabel}>Tổng số</div>
            </div>
          </div>
        </div>

        {/* Wrong Topics Section */}
        {results.wrongTopics.length > 0 && (
          <div style={styles.topicsCard}>
            <div style={styles.topicsHeader}>
              <span style={styles.topicsIcon}>📚</span>
              <h2 style={styles.topicsTitle}>Chủ đề cần ôn tập</h2>
            </div>
            <p style={styles.topicsDesc}>
              Hãy xem lại những chủ đề này để nắm vững kiến thức hơn nhé!
            </p>
            <div style={styles.topicsList}>
              {results.wrongTopics.map((topic, index) => (
                <a
                  key={index}
                  href={`/ngon-ngu-python/${topic}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.topicItem}
                >
                  <div style={styles.topicNumber}>{index + 1}</div>
                  <div style={styles.topicName}>{topicMap[topic] || topic}</div>
                  <div style={styles.topicArrow}>→</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Perfect Score Message */}
        {results.wrongTopics.length === 0 && (
          <div style={styles.perfectCard}>
            <div style={styles.perfectEmoji}>🎉</div>
            <h2 style={styles.perfectTitle}>Tuyệt vời quá!</h2>
            <p style={styles.perfectText}>
              Bạn đã trả lời đúng tất cả các câu hỏi! Hãy tiếp tục thử thách bản thân với các chủ đề khác hoặc tăng độ khó lên nhé! 🚀
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div style={styles.actionButtons}>
          <button onClick={restartQuiz} style={styles.primaryButton}>
            🔄 Làm bài mới
          </button>
          {results.wrongTopics.length > 0 && (
            <button onClick={reviewTopics} style={styles.secondaryButton}>
              📖 Ôn tập lại
            </button>
          )}
        </div>

        {/* Tips Section */}
        <div style={styles.tipsCard}>
          <h3 style={styles.tipsTitle}>💡 Mẹo học tập hiệu quả</h3>
          <div style={styles.tipsList}>
            <div style={styles.tipItem}>
              <span style={styles.tipBullet}>✨</span>
              <span>Làm trắc nghiệm thường xuyên để ghi nhớ tốt hơn</span>
            </div>
            <div style={styles.tipItem}>
              <span style={styles.tipBullet}>✨</span>
              <span>Đọc kỹ phần giải thích sau mỗi câu hỏi</span>
            </div>
            <div style={styles.tipItem}>
              <span style={styles.tipBullet}>✨</span>
              <span>Thực hành code thực tế để hiểu sâu hơn</span>
            </div>
            <div style={styles.tipItem}>
              <span style={styles.tipBullet}>✨</span>
              <span>Tăng dần độ khó khi đã nắm vững cơ bản</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: M3.spacing.lg,
    fontFamily: "'Space Grotesk', sans-serif"
  },
  loadingContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: "'Space Grotesk', sans-serif"
  },
  loadingSpinner: {
    fontSize: '64px',
    animation: 'pulse 1.5s ease-in-out infinite'
  },
  loadingText: {
    ...M3.typography.titleLarge,
    color: M3.colors.onPrimary,
    marginTop: M3.spacing.base
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  celebrationHeader: {
    textAlign: 'center',
    marginBottom: M3.spacing['2xl'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: M3.spacing.lg
  },
  confetti: {
    fontSize: '48px',
    animation: 'bounce 2s ease-in-out infinite'
  },
  mainTitle: {
    ...M3.typography.displayMedium,
    fontWeight: 'bold',
    color: M3.colors.onPrimary,
    textShadow: '0 4px 8px rgba(0,0,0,0.2)',
    margin: 0
  },
  scoreCard: {
    backgroundColor: M3.colors.surface,
    borderRadius: M3.radius.xl,
    padding: M3.spacing['3xl'],
    marginBottom: M3.spacing.xl,
    boxShadow: M3.elevation.level5,
    textAlign: 'center'
  },
  performanceBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: M3.spacing.md,
    padding: `${M3.spacing.md} ${M3.spacing['2xl']}`,
    borderRadius: M3.radius.full,
    marginBottom: M3.spacing['2xl'],
    boxShadow: M3.elevation.level2
  },
  performanceEmoji: {
    fontSize: '32px'
  },
  performanceText: {
    ...M3.typography.headlineSmall,
    fontWeight: '700',
    color: M3.colors.onPrimary
  },
  scoreCircleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: M3.spacing['2xl']
  },
  scoreCircle: {
    width: '220px',
    height: '220px',
    borderRadius: M3.radius.full,
    border: '12px solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: M3.colors.surfaceVariant
  },
  scorePercentage: {
    fontSize: '64px',
    fontWeight: 'bold',
    lineHeight: 1
  },
  scoreSubtext: {
    ...M3.typography.bodyLarge,
    color: M3.colors.onSurfaceVariant,
    fontWeight: '600',
    marginTop: M3.spacing.sm
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: M3.spacing.base
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: M3.spacing.sm
  },
  statIcon: {
    width: '48px',
    height: '48px',
    borderRadius: M3.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: M3.colors.onPrimary,
    fontWeight: 'bold'
  },
  statValue: {
    ...M3.typography.headlineMedium,
    fontWeight: 'bold',
    color: M3.colors.onSurface
  },
  statLabel: {
    ...M3.typography.labelLarge,
    color: M3.colors.onSurfaceVariant,
    fontWeight: '600'
  },
  topicsCard: {
    backgroundColor: M3.colors.surface,
    borderRadius: M3.radius.xl,
    padding: M3.spacing['2xl'],
    marginBottom: M3.spacing.xl,
    boxShadow: M3.elevation.level3
  },
  topicsHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: M3.spacing.md,
    marginBottom: M3.spacing.md
  },
  topicsIcon: {
    fontSize: '32px'
  },
  topicsTitle: {
    ...M3.typography.headlineMedium,
    fontWeight: '700',
    color: M3.colors.onSurface,
    margin: 0
  },
  topicsDesc: {
    ...M3.typography.bodyLarge,
    color: M3.colors.onSurfaceVariant,
    marginBottom: M3.spacing.xl,
    lineHeight: '1.6'
  },
  topicsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: M3.spacing.md
  },
  topicItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    textDecoration: 'none',
    color: '#111827',
    transition: 'all 0.3s',
    border: '2px solid transparent'
  },
  topicNumber: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#7c3aed',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
    flexShrink: 0
  },
  topicName: {
    flex: 1,
    fontSize: '16px',
    fontWeight: '600'
  },
  topicArrow: {
    fontSize: '20px',
    color: '#7c3aed',
    fontWeight: 'bold'
  },
  perfectCard: {
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '48px',
    marginBottom: '24px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    textAlign: 'center'
  },
  perfectEmoji: {
    fontSize: '80px',
    marginBottom: '16px'
  },
  perfectTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '12px'
  },
  perfectText: {
    fontSize: '18px',
    color: '#374151',
    lineHeight: '1.6',
    margin: 0
  },
  actionButtons: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap'
  },
  primaryButton: {
    flex: 1,
    minWidth: '200px',
    padding: '18px 32px',
    fontSize: '20px',
    fontWeight: '700',
    color: 'white',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 8px 20px rgba(245, 87, 108, 0.4)'
  },
  secondaryButton: {
    flex: 1,
    minWidth: '200px',
    padding: '18px 32px',
    fontSize: '20px',
    fontWeight: '700',
    color: '#7c3aed',
    backgroundColor: 'white',
    border: '3px solid #7c3aed',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
  },
  tipsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
  },
  tipsTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  tipsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  tipItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#374151',
    lineHeight: '1.6'
  },
  tipBullet: {
    fontSize: '18px',
    flexShrink: 0
  }
};
