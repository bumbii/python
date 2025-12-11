import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { db, Question } from '../../lib/db';
import QuizLogo from '../../components/QuizLogo';
import { M3 } from '../../styles/quizStyles';

interface QuizState {
  questions: Question[];
  currentIndex: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  answers: { questionId: number; correct: boolean }[];
}

const ANSWER_COLORS = [
  { bg: M3.colors.error, hover: '#d13847', name: 'Đỏ' }, // Red (M3 error color)
  { bg: M3.colors.tertiary, hover: '#026ec1', name: 'Xanh dương' }, // Blue (M3 tertiary color)
  { bg: M3.colors.warning, hover: '#e6a700', name: 'Vàng' }, // Yellow (M3 warning color)
  { bg: M3.colors.success, hover: '#0ea509', name: 'Xanh lá' } // Green (M3 success color)
];

export default function TakeQuiz() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentIndex: 0,
    selectedAnswer: null,
    showExplanation: false,
    answers: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      loadQuestions();
    }
  }, [router.isReady]);

  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiAnimRef = useRef<number | null>(null);

  useEffect(() => {
    if (!showConfetti) return;

    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<any> = [];
    const DPR = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [M3.colors.success, M3.colors.primary, M3.colors.secondary, M3.colors.tertiary, M3.colors.warning, M3.colors.error];

    const createParticle = () => {
      const x = Math.random() * window.innerWidth;
      const y = -10 - Math.random() * 60;
      const size = 6 + Math.random() * 14;
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      const vx = Math.cos(angle) * speed;
      const vy = 2 + Math.random() * 6;
      const wobble = Math.random() * 0.02 + 0.01;
      return {
        x, y, vx, vy, size, wobble,
        rotation: Math.random() * 360,
        angularVel: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.7 ? 'circle' : 'rect',
        ttl: 2000 + Math.random() * 1400,
        born: performance.now()
      };
    };

    for (let i = 0; i < 80; i++) particles.push(createParticle());

    const start = performance.now();

    const tick = (now: number) => {
      const dt = now - (confettiAnimRef.current as any || now);
      if (particles.length < 220 && Math.random() > 0.5) particles.push(createParticle());

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const age = now - p.born;
        if (age > p.ttl) { particles.splice(i, 1); continue; }

        p.vy += 0.06;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.angularVel * 0.02;
        p.x += Math.sin((now + i) * p.wobble) * 0.6;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = 1 - (age / p.ttl) * 0.9;
        ctx.fillStyle = p.color;
        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        }
        ctx.restore();
      }

      if (now - start < 2200) {
        confettiAnimRef.current = requestAnimationFrame(tick);
      } else {
        if (particles.length > 0) {
          confettiAnimRef.current = requestAnimationFrame(tick);
        } else {
          setShowConfetti(false);
        }
      }
    };

    confettiAnimRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      if (confettiAnimRef.current) cancelAnimationFrame(confettiAnimRef.current);
      confettiAnimRef.current = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [showConfetti]);

  const loadQuestions = async () => {
    try {
      const { topics, levels, count } = router.query;

      if (!topics || !levels || !count) {
        router.push('/quiz');
        return;
      }

      const topicArray = (topics as string).split(',');
      const levelArray = (levels as string).split(',') as ('easy' | 'medium' | 'hard')[];
      const questionCount = parseInt(count as string);

      // Fetch questions matching the criteria
      const allQuestions = await db.questions
        .where('topic')
        .anyOf(topicArray)
        .and(q => levelArray.includes(q.level))
        .toArray();

      // Shuffle questions
      const shuffled = allQuestions.sort(() => Math.random() - 0.5);

      // Take requested number of questions
      const selectedQuestions = shuffled.slice(0, questionCount);

      if (selectedQuestions.length === 0) {
        alert('Không tìm thấy câu hỏi phù hợp!');
        router.push('/quiz');
        return;
      }

      setQuizState(prev => ({
        ...prev,
        questions: selectedQuestions
      }));
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading questions:', error);
      alert('Có lỗi xảy ra khi tải câu hỏi!');
      router.push('/quiz');
    }
  };

  const selectAnswer = (answerIndex: number) => {
    if (quizState.showExplanation) return;
    setQuizState(prev => ({ ...prev, selectedAnswer: answerIndex }));
  };

  const submitAnswer = () => {
    if (quizState.selectedAnswer === null) {
      alert('Vui lòng chọn một câu trả lời!');
      return;
    }

    const currentQuestion = quizState.questions[quizState.currentIndex];
    const isCorrect = quizState.selectedAnswer === currentQuestion.correctAnswer;

    setQuizState(prev => ({
      ...prev,
      showExplanation: true,
      answers: [
        ...prev.answers,
        { questionId: currentQuestion.id!, correct: isCorrect }
      ]
    }));

    if (isCorrect) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1400);
    }
  };

  const nextQuestion = () => {
    if (quizState.currentIndex < quizState.questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        selectedAnswer: null,
        showExplanation: false
      }));
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    const correctCount = quizState.answers.filter(a => a.correct).length;
    const totalCount = quizState.questions.length;

    // Get wrong topics for recommendations
    const wrongTopics = new Set<string>();
    quizState.answers.forEach((answer, index) => {
      if (!answer.correct) {
        wrongTopics.add(quizState.questions[index].topic);
      }
    });

    // Save result to database
    await db.results.add({
      date: new Date(),
      topics: Array.from(new Set(quizState.questions.map(q => q.topic))),
      levels: Array.from(new Set(quizState.questions.map(q => q.level))),
      totalQuestions: totalCount,
      correctAnswers: correctCount,
      wrongTopics: Array.from(wrongTopics),
      timestamp: Date.now()
    });

    router.push(`/quiz/results?correct=${correctCount}&total=${totalCount}&wrong=${Array.from(wrongTopics).join(',')}`);
  };

  if (isLoading || quizState.questions.length === 0) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}>⚡</div>
        <div style={styles.loadingText}>Đang tải câu hỏi...</div>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentIndex];
  const progress = ((quizState.currentIndex + 1) / quizState.questions.length) * 100;

  return (
    <div style={styles.container}>
      <canvas ref={confettiCanvasRef} style={styles.confettiCanvas} />
      <QuizLogo />
      <div style={styles.content}>
        {/* Header with Progress */}
        <div style={styles.header}>
          <div style={styles.progressInfo}>
            <span style={styles.questionNumber}>
              Câu {quizState.currentIndex + 1}/{quizState.questions.length}
            </span>
            <span style={styles.levelBadge(currentQuestion.level)}>
              {currentQuestion.level === 'easy' ? '😊 Dễ' : currentQuestion.level === 'medium' ? '🤔 Trung bình' : '🔥 Khó'}
            </span>
          </div>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>
        </div>

        {/* Question Card */}
        <div style={styles.questionCard}>
          <div style={styles.topicBadge}>{currentQuestion.topicTitle}</div>
          <h2 style={styles.questionText}>{currentQuestion.question}</h2>
        </div>

        {/* Kahoot-style Answer Grid */}
        {!quizState.showExplanation ? (
          <div style={styles.answerGrid}>
            {currentQuestion.options.map((option, index) => {
              const colorScheme = ANSWER_COLORS[index];
              const isSelected = quizState.selectedAnswer === index;
              const isHovered = hoverIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    ...styles.answerButton,
                    backgroundColor: isSelected
                      ? colorScheme.bg
                      : isHovered
                        ? M3.colors.surfaceVariant
                        : M3.colors.surface,
                                    border: isSelected ? 'none' : `1px solid ${M3.colors.outlineVariant}`,
                                    color: isSelected ? M3.colors.onPrimary : colorScheme.bg,
                                    transform: isSelected ? 'scale(1.03)' : isHovered ? 'scale(1.01)' : 'scale(1)',
                                    boxShadow: isSelected
                                      ? `0 12px 26px rgba(16,185,129,0.12)`
                                      : M3.elevation.level1
                  }}
                >
                  <div style={{
                    ...styles.answerShape,
                    color: isSelected ? M3.colors.onPrimary : colorScheme.bg
                  }}>
                    {index === 0 && '◆'}
                    {index === 1 && '●'}
                    {index === 2 && '▲'}
                    {index === 3 && '■'}
                  </div>
                  <div style={styles.answerText}>{option}</div>
                  {isSelected && (
                    <div className="popBadge" style={styles.selectedBadge}>✓</div>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          /* Result View */
          <div style={styles.resultView}>
            {/* Answer Options with Results */}
            <div style={styles.answerGrid}>
              {currentQuestion.options.map((option, index) => {
                const colorScheme = ANSWER_COLORS[index];
                const isCorrect = index === currentQuestion.correctAnswer;
                const isSelected = quizState.selectedAnswer === index;
                const showAsCorrect = isCorrect;
                const showAsWrong = isSelected && !isCorrect;

                let overlayColor = 'transparent';
                if (showAsCorrect) overlayColor = 'rgba(22, 198, 12, 0.9)';
                if (showAsWrong) overlayColor = 'rgba(231, 72, 86, 0.9)';

                const displayBg = showAsCorrect
                  ? M3.colors.successContainer
                  : showAsWrong
                    ? M3.colors.errorContainer
                    : M3.colors.surface;

                const borderStyle = showAsCorrect
                  ? `3px solid ${M3.colors.success}`
                  : showAsWrong
                    ? `3px solid ${M3.colors.error}`
                    : `1px solid ${M3.colors.outlineVariant}`;

                const textColor = showAsCorrect
                  ? M3.colors.onSuccessContainer
                  : showAsWrong
                    ? M3.colors.onErrorContainer
                    : M3.colors.onSurface;

                const faded = !(showAsCorrect || showAsWrong);

                return (
                  <div
                    key={index}
                    style={{
                      ...styles.answerButton,
                      backgroundColor: displayBg,
                      position: 'relative',
                      cursor: 'default',
                      border: borderStyle,
                      color: textColor,
                      opacity: faded ? 0.5 : 1
                    }}
                  >
                    <div style={styles.answerShape}>
                      {index === 0 && '◆'}
                      {index === 1 && '●'}
                      {index === 2 && '▲'}
                      {index === 3 && '■'}
                    </div>
                    <div style={styles.answerText}>{option}</div>
                    {/* badges removed for cleaner result appearance */}
                  </div>
                );
              })}
            </div>

            {/* Explanation Box */}
            <div style={styles.explanationCard}>
              <div style={styles.explanationHeader}>
                {quizState.selectedAnswer === currentQuestion.correctAnswer ? (
                  <>
                    <span style={styles.resultEmoji}>🎉</span>
                    <span style={styles.resultTitle}>Chính xác!</span>
                  </>
                ) : (
                  <>
                    <span style={styles.resultEmoji}>💡</span>
                    <span style={styles.resultTitle}>Giải thích</span>
                  </>
                )}
              </div>
              <p style={styles.explanationText}>{currentQuestion.explanation}</p>
              <a
                href={currentQuestion.relatedTopicUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.topicLink}
              >
                📖 Xem lại bài học: {currentQuestion.topicTitle} →
              </a>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div style={styles.actionContainer}>
          {!quizState.showExplanation ? (
            <button
              onClick={submitAnswer}
              style={{
                ...styles.actionButton,
                ...styles.submitButton
              }}
              disabled={quizState.selectedAnswer === null}
            >
              Kiểm tra câu trả lời
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              style={{
                ...styles.actionButton,
                ...styles.nextButton
              }}
            >
              {quizState.currentIndex < quizState.questions.length - 1
                ? 'Câu tiếp theo →'
                : 'Xem kết quả 🎯'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#ffffff',
    padding: M3.spacing.base,
    fontFamily: "'Space Grotesk', sans-serif",
    color: M3.colors.onSurface
  } as React.CSSProperties,
  loadingContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffffff',
    fontFamily: "'Space Grotesk', sans-serif",
    color: M3.colors.onSurface
  } as React.CSSProperties,
  loadingSpinner: {
    fontSize: '64px',
    animation: 'pulse 1.5s ease-in-out infinite'
  } as React.CSSProperties,
  loadingText: {
    ...M3.typography.titleLarge,
    color: M3.colors.onSurface,
    marginTop: M3.spacing.base
  } as React.CSSProperties,
  content: {
    maxWidth: '920px',
    margin: '0 auto',
    paddingBottom: M3.spacing.base
  } as React.CSSProperties,
  header: {
    marginBottom: M3.spacing.md
  } as React.CSSProperties,
  progressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: M3.spacing.md
  } as React.CSSProperties,
  questionNumber: {
    ...M3.typography.titleMedium,
    fontWeight: '700',
    color: M3.colors.onSurface,
    textShadow: '0 1px 2px rgba(0,0,0,0.04)'
  } as React.CSSProperties,
  levelBadge: (level: string) => ({
    padding: `${M3.spacing.sm} ${M3.spacing.base}`,
    borderRadius: M3.radius.full,
    ...M3.typography.labelLarge,
    fontWeight: '700',
    color: M3.colors.onSurface,
    backgroundColor: level === 'easy' ? M3.colors.successContainer : level === 'medium' ? M3.colors.warningContainer : M3.colors.errorContainer,
    boxShadow: M3.elevation.level1
  } as React.CSSProperties),
  progressBar: {
    height: M3.spacing.md,
    backgroundColor: M3.colors.surfaceVariant,
    borderRadius: M3.radius.sm,
    overflow: 'hidden',
    boxShadow: M3.elevation.level1
  } as React.CSSProperties,
  progressFill: {
    height: '100%',
    background: `linear-gradient(90deg, ${M3.colors.success} 0%, ${M3.colors.successContainer} 100%)`,
    transition: 'width 0.3s ease',
    borderRadius: M3.radius.sm
  } as React.CSSProperties,
  questionCard: {
    backgroundColor: M3.colors.surface,
    borderRadius: M3.radius.lg,
    padding: M3.spacing.lg,
    marginBottom: M3.spacing.md,
    boxShadow: M3.elevation.level1,
    textAlign: 'center'
  } as React.CSSProperties,
  topicBadge: {
    display: 'inline-block',
    padding: `${M3.spacing.xs} ${M3.spacing.base}`,
    backgroundColor: M3.colors.primary,
    color: M3.colors.onPrimary,
    borderRadius: M3.radius.md,
    ...M3.typography.labelLarge,
    fontWeight: '600',
    marginBottom: M3.spacing.base
  } as React.CSSProperties,
  questionText: {
    ...M3.typography.titleLarge,
    fontWeight: '700',
    color: M3.colors.onSurface,
    lineHeight: '1.3',
    whiteSpace: 'pre-wrap',
    margin: 0
  } as React.CSSProperties,
  answerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: M3.spacing.sm,
    marginBottom: M3.spacing.md,
    alignItems: 'stretch'
  } as React.CSSProperties,
  answerButton: {
    minHeight: '110px',
    padding: `${M3.spacing.md} ${M3.spacing.lg}`,
    borderRadius: M3.radius.lg,
    cursor: 'pointer',
    transition: 'all 0.22s',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: M3.spacing.md,
    ...M3.typography.bodyLarge,
    fontWeight: 800,
    position: 'relative',
    overflow: 'hidden'
  } as React.CSSProperties,
  answerShape: {
    fontSize: '26px',
    fontWeight: '800',
    width: '56px',
    textAlign: 'center'
  } as React.CSSProperties,
  answerText: {
    textAlign: 'center',
    lineHeight: '1.4',
    fontSize: '18px'
  } as React.CSSProperties,
  resultView: {
    marginBottom: M3.spacing.xl
  } as React.CSSProperties,
  resultOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: M3.radius.lg,
    zIndex: 1
  } as React.CSSProperties,
  resultIcon: {
    fontSize: '64px',
    fontWeight: 'bold',
    textShadow: '0 4px 8px rgba(0,0,0,0.3)'
  } as React.CSSProperties,
  explanationCard: {
    backgroundColor: M3.colors.surface,
    borderRadius: M3.radius.lg,
    padding: M3.spacing.lg,
    boxShadow: M3.elevation.level3,
    marginTop: M3.spacing.base
  } as React.CSSProperties,
  explanationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: M3.spacing.md,
    marginBottom: M3.spacing.base
  } as React.CSSProperties,
  resultEmoji: {
    fontSize: '32px'
  } as React.CSSProperties,
  resultTitle: {
    ...M3.typography.headlineSmall,
    fontWeight: '700',
    color: M3.colors.onSurface
  } as React.CSSProperties,
  explanationText: {
    ...M3.typography.bodyLarge,
    lineHeight: '1.6',
    color: M3.colors.onSurfaceVariant,
    marginBottom: M3.spacing.base
  } as React.CSSProperties,
  topicLink: {
    display: 'inline-block',
    color: M3.colors.primary,
    textDecoration: 'none',
    ...M3.typography.labelLarge,
    fontWeight: '600',
    padding: `${M3.spacing.md} ${M3.spacing.lg}`,
    backgroundColor: M3.colors.primaryContainer,
    borderRadius: M3.radius.sm,
    transition: 'all 0.2s'
  } as React.CSSProperties,
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: M3.spacing.md
  } as React.CSSProperties,
  actionButton: {
    padding: `${M3.spacing.md} ${M3.spacing['2xl']}`,
    ...M3.typography.titleMedium,
    fontWeight: 800,
    color: M3.colors.onPrimary,
    border: 'none',
    borderRadius: M3.radius.lg,
    cursor: 'pointer',
    transition: 'all 0.22s',
    minWidth: '220px',
    boxShadow: M3.elevation.level4,
    fontFamily: "'Space Grotesk', sans-serif"
  } as React.CSSProperties,
  submitButton: {
    backgroundColor: M3.colors.success,
    color: M3.colors.onSuccess,
    padding: `${M3.spacing.md} ${M3.spacing['2xl']}`,
    minWidth: '220px',
    boxShadow: `0 10px 30px rgba(16,185,129,0.14)`,
    border: 'none'
  } as React.CSSProperties,
  nextButton: {
    background: `linear-gradient(135deg, ${M3.colors.secondary} 0%, #f5576c 100%)`
  } as React.CSSProperties
  ,selectedBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 44,
    height: 44,
    borderRadius: '50%',
    backgroundColor: M3.colors.success,
    color: M3.colors.onSuccess,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: '18px',
    boxShadow: '0 8px 22px rgba(0,0,0,0.12)'
  } as React.CSSProperties
  ,confettiCanvas: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    overflow: 'visible',
    zIndex: 9999
  } as React.CSSProperties
};
