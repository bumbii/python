import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db, initializeQuizDatabase } from '../../lib/db';
import QuizLogo from '../../components/QuizLogo';
import { M3 } from '../../styles/quizStyles';

interface TopicInfo {
  id: string;
  title: string;
  count: { easy: number; medium: number; hard: number };
}

export default function QuizSetup() {
  const router = useRouter();
  const [topics, setTopics] = useState<TopicInfo[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(['easy', 'medium', 'hard']);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState(true);
  const [maxAvailable, setMaxAvailable] = useState<number>(0);

  useEffect(() => {
    initializeDatabase();
  }, []);

  useEffect(() => {
    calculateMaxQuestions();
  }, [selectedTopics, selectedLevels, topics]);

  const initializeDatabase = async () => {
    try {
      await initializeQuizDatabase();

      // Get unique topics with counts
      const allQuestions = await db.questions.toArray();
      const topicMap = new Map<string, TopicInfo>();

      allQuestions.forEach(q => {
        if (!topicMap.has(q.topic)) {
          topicMap.set(q.topic, {
            id: q.topic,
            title: q.topicTitle,
            count: { easy: 0, medium: 0, hard: 0 }
          });
        }
        const topic = topicMap.get(q.topic)!;
        topic.count[q.level]++;
      });

      setTopics(Array.from(topicMap.values()));
      setIsLoading(false);
    } catch (error) {
      console.error('Error initializing database:', error);
      setIsLoading(false);
    }
  };

  const calculateMaxQuestions = () => {
    if (selectedTopics.length === 0 || selectedLevels.length === 0) {
      setMaxAvailable(0);
      return;
    }

    const selectedTopicData = topics.filter(t => selectedTopics.includes(t.id));
    let total = 0;

    selectedTopicData.forEach(topic => {
      selectedLevels.forEach(level => {
        total += topic.count[level as keyof typeof topic.count] || 0;
      });
    });

    setMaxAvailable(total);

    // Adjust question count if it exceeds available
    if (questionCount > total) {
      setQuestionCount(total);
    }
  };

  const toggleTopic = (topicId: string) => {
    setSelectedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(t => t !== topicId)
        : [...prev, topicId]
    );
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const selectAllTopics = () => {
    setSelectedTopics(topics.map(t => t.id));
  };

  const deselectAllTopics = () => {
    setSelectedTopics([]);
  };

  const startQuiz = () => {
    if (selectedTopics.length === 0 || selectedLevels.length === 0) {
      alert('Vui lòng chọn ít nhất một chủ đề và một cấp độ!');
      return;
    }

    if (questionCount === 0) {
      alert('Vui lòng chọn số lượng câu hỏi!');
      return;
    }

    const queryParams = new URLSearchParams({
      topics: selectedTopics.join(','),
      levels: selectedLevels.join(','),
      count: questionCount.toString()
    });

    router.push(`/quiz/take?${queryParams.toString()}`);
  };

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}>⚡</div>
        <div style={styles.loadingText}>Đang tải dữ liệu...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Logo */}
        <QuizLogo />

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            <span style={styles.emoji}>⚡</span>
            Trắc nghiệm Python
          </h1>
          <p style={styles.subtitle}>
            Luyện tập và củng cố kiến thức Python của bạn!
          </p>
        </div>

        {/* Question Count Selector */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIcon}>🎯</span>
            Số câu hỏi
          </h2>
          <div style={styles.questionCountGrid}>
            {[5, 10, 15, 20, 30, 50].map(count => {
              const isDisabled = count > maxAvailable && maxAvailable > 0;
              const isSelected = questionCount === count && !isDisabled;
              return (
                <button
                  key={count}
                  onClick={() => !isDisabled && setQuestionCount(count)}
                  disabled={isDisabled}
                  style={{
                    ...styles.countButton,
                    ...(isSelected ? styles.countButtonSelected : {}),
                    ...(isDisabled ? styles.countButtonDisabled : {})
                  }}
                >
                  <div style={styles.countNumber}>{count}</div>
                  <div style={styles.countLabel}>câu</div>
                </button>
              );
            })}
          </div>
          {maxAvailable > 0 && (
            <div style={styles.availableInfo}>
              Có <strong>{maxAvailable}</strong> câu hỏi khả dụng với lựa chọn hiện tại
            </div>
          )}
        </div>

        {/* Level Selection */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIcon}>📊</span>
            Chọn cấp độ
          </h2>
          <div style={styles.levelGrid}>
            {[
              { id: 'easy', label: 'Dễ', emoji: '😊', color: '#10b981' },
              { id: 'medium', label: 'Trung bình', emoji: '🤔', color: '#f59e0b' },
              { id: 'hard', label: 'Khó', emoji: '🔥', color: '#ef4444' }
            ].map(level => {
              const isSelected = selectedLevels.includes(level.id);
              return (
                <button
                  key={level.id}
                  onClick={() => toggleLevel(level.id)}
                  style={{
                    ...styles.levelButton,
                    backgroundColor: isSelected ? level.color : '#ffffff',
                    color: isSelected ? '#ffffff' : level.color,
                    borderColor: level.color,
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <div style={styles.levelEmoji}>{level.emoji}</div>
                  <div style={styles.levelLabel}>{level.label}</div>
                  {isSelected && <div style={styles.checkmark}>✓</div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Selection */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionIcon}>📚</span>
              Chọn chủ đề ({selectedTopics.length}/{topics.length})
            </h2>
            <div style={styles.buttonGroup}>
              <button onClick={selectAllTopics} style={styles.selectButton}>
                Tất cả
              </button>
              <button onClick={deselectAllTopics} style={styles.selectButton}>
                Bỏ chọn
              </button>
            </div>
          </div>

          <div style={styles.topicGrid}>
            {topics.map(topic => {
              const isSelected = selectedTopics.includes(topic.id);
              return (
                <label
                  key={topic.id}
                  style={{
                    ...styles.topicCard,
                    backgroundColor: isSelected ? M3.colors.primaryContainer : M3.colors.surface,
                    borderColor: isSelected ? M3.colors.primary : M3.colors.outlineVariant
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleTopic(topic.id)}
                    style={styles.topicCheckbox}
                  />
                  <div style={styles.topicContent}>
                    <div style={{
                      ...styles.topicTitle,
                      color: isSelected ? M3.colors.onPrimaryContainer : M3.colors.onSurface
                    }}>
                      {topic.title}
                    </div>
                    <div style={styles.topicCount}>
                      <span style={{
                        ...styles.miniCountBadge,
                        backgroundColor: isSelected
                          ? M3.colors.successContainer
                          : M3.colors.success,
                        color: isSelected ? M3.colors.onSuccessContainer : M3.colors.onSuccess
                      }}>
                        <span style={styles.badgeIcon}>😊</span> {topic.count.easy}
                      </span>
                      <span style={{
                        ...styles.miniCountBadge,
                        backgroundColor: isSelected
                          ? M3.colors.warningContainer
                          : M3.colors.warning,
                        color: isSelected ? M3.colors.onWarningContainer : M3.colors.onWarning
                      }}>
                        <span style={styles.badgeIcon}>🤔</span> {topic.count.medium}
                      </span>
                      <span style={{
                        ...styles.miniCountBadge,
                        backgroundColor: isSelected
                          ? M3.colors.errorContainer
                          : M3.colors.error,
                        color: isSelected ? M3.colors.onErrorContainer : M3.colors.onError
                      }}>
                        <span style={styles.badgeIcon}>🔥</span> {topic.count.hard}
                      </span>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Start Button */}
        <button onClick={startQuiz} style={styles.startButton}>
          <span style={styles.startButtonText}>Bắt đầu ngay! 🚀</span>
        </button>
      </div>
    </div>
  );
}

// Material 3 compliant styles with responsive design
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: M3.spacing.base,
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
    ...M3.typography.titleMedium,
    color: 'white',
    marginTop: M3.spacing.base
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: M3.spacing['3xl'],
    color: 'white'
  },
  title: {
    ...M3.typography.displaySmall,
    fontWeight: '700',
    marginBottom: M3.spacing.md,
    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
  },
  emoji: {
    display: 'inline-block',
    marginRight: M3.spacing.md
  },
  subtitle: {
    ...M3.typography.titleMedium,
    opacity: 0.95,
    margin: 0
  },
  section: {
    backgroundColor: M3.colors.surface,
    borderRadius: M3.radius.lg,
    padding: M3.spacing['2xl'],
    marginBottom: M3.spacing.xl,
    boxShadow: M3.elevation.level3
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: M3.spacing.xl,
    flexWrap: 'wrap',
    gap: M3.spacing.md
  },
  sectionTitle: {
    ...M3.typography.headlineSmall,
    color: M3.colors.onSurface,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: M3.spacing.sm
  },
  sectionIcon: {
    fontSize: '28px'
  },
  buttonGroup: {
    display: 'flex',
    gap: M3.spacing.sm
  },
  selectButton: {
    padding: `${M3.spacing.sm} ${M3.spacing.base}`,
    ...M3.typography.labelLarge,
    backgroundColor: '#f3f4f6',
    border: '2px solid #d1d5db',
    borderRadius: M3.radius.sm,
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  questionCountGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    gap: M3.spacing.base,
    marginBottom: M3.spacing.base
  },
  countButton: {
    padding: M3.spacing.lg,
    border: '3px solid #e5e7eb',
    borderRadius: M3.radius.md,
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textAlign: 'center'
  },
  countButtonSelected: {
    backgroundColor: '#7c3aed',
    borderColor: '#7c3aed',
    color: 'white',
    transform: 'scale(1.05)',
    boxShadow: M3.elevation.level4
  },
  countButtonDisabled: {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
  countNumber: {
    ...M3.typography.headlineMedium,
    fontWeight: 'bold',
    marginBottom: M3.spacing.xs
  },
  countLabel: {
    ...M3.typography.labelMedium
  },
  availableInfo: {
    textAlign: 'center',
    ...M3.typography.bodyMedium,
    color: '#6b7280',
    padding: M3.spacing.md,
    backgroundColor: '#f9fafb',
    borderRadius: M3.radius.sm
  },
  levelGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: M3.spacing.base
  },
  levelButton: {
    padding: M3.spacing.xl,
    border: '3px solid',
    borderRadius: M3.radius.md,
    cursor: 'pointer',
    transition: 'all 0.3s',
    textAlign: 'center',
    position: 'relative',
    ...M3.typography.titleMedium
  },
  levelEmoji: {
    fontSize: '40px',
    marginBottom: M3.spacing.sm
  },
  levelLabel: {
    fontWeight: '600'
  },
  checkmark: {
    position: 'absolute',
    top: M3.spacing.sm,
    right: M3.spacing.sm,
    fontSize: '24px',
    fontWeight: 'bold'
  },
  topicGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: M3.spacing.base
  },
  topicCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: M3.spacing.md,
    padding: M3.spacing.base,
    border: '2px solid',
    borderRadius: M3.radius.md,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'left'
  },
  topicCheckbox: {
    width: '20px',
    height: '20px',
    marginTop: M3.spacing.xs,
    cursor: 'pointer',
    accentColor: M3.colors.primary,
    flexShrink: 0
  },
  topicContent: {
    flex: 1,
    minWidth: 0
  },
  topicTitle: {
    ...M3.typography.titleSmall,
    marginBottom: M3.spacing.sm,
    fontWeight: '600'
  },
  topicCount: {
    display: 'flex',
    gap: M3.spacing.sm,
    flexWrap: 'wrap'
  },
  miniCountBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: M3.spacing.xs,
    padding: `${M3.spacing.xs} ${M3.spacing.sm}`,
    ...M3.typography.labelSmall,
    borderRadius: M3.radius.full,
    fontWeight: '600',
    transition: 'all 0.2s'
  },
  badgeIcon: {
    fontSize: '14px',
    lineHeight: 1
  },
  startButton: {
    width: '100%',
    padding: M3.spacing.xl,
    ...M3.typography.headlineSmall,
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    border: 'none',
    borderRadius: M3.radius.lg,
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: M3.elevation.level4,
    marginTop: M3.spacing.xl
  },
  startButtonText: {
    display: 'inline-block',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
  }
};

// Responsive styles - adjust for mobile
if (typeof window !== 'undefined') {
  const isMobile = window.innerWidth < 640;
  if (isMobile) {
    styles.title = {
      ...styles.title,
      ...M3.typography.headlineLarge
    };
    styles.section = {
      ...styles.section,
      padding: M3.spacing.base
    };
    styles.questionCountGrid = {
      ...styles.questionCountGrid,
      gridTemplateColumns: 'repeat(3, 1fr)'
    };
    styles.topicGrid = {
      ...styles.topicGrid,
      gridTemplateColumns: '1fr'
    };
  }
}
