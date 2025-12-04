import React from 'react';

export default function YouTube({ id, title = "YouTube video" }) {
  // Extract video ID from various YouTube URL formats
  const getVideoId = (input) => {
    if (!input) return '';

    // If it's already just an ID (11 characters)
    if (input.length === 11 && !input.includes('/')) {
      return input;
    }

    // Handle various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
      /youtube\.com\/embed\/([^&\s]+)/,
      /youtube\.com\/v\/([^&\s]+)/,
    ];

    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return input;
  };

  const videoId = getVideoId(id);
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{ margin: '2rem 0' }}>
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{
        marginTop: '0.5rem',
        textAlign: 'center',
        fontSize: '0.875rem'
      }}>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0070f3',
            textDecoration: 'none',
            fontWeight: 500
          }}
        >
          ▶ Xem trên YouTube
        </a>
      </div>
    </div>
  );
}
