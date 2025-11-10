'useClient';

import React from 'react';
import styles from './Chat.module.scss';

export const Chat = () => {
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');

    try {
      let response: Response;

      if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
        response = await fetch(`https://david-oelfke-7972.vercel.app/ask/${encodeURIComponent(question)}`, { mode: 'cors' });
      } else {
        response = await fetch(`http://localhost/ask/${encodeURIComponent(question)}`, { mode: 'cors' });
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        setAnswer((prev) => prev + chunk);
      }
    } catch (error) {
      console.error('Error:', error);
      setAnswer('Sorry, there was an error processing your question.');
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleAsk();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.answerContainer}>
        {answer && (
          <div className={styles.answer}>
            <div className={styles.answerLabel}>Answer:</div>
            <div className={styles.answerText}>{answer}</div>
          </div>
        )}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.currentTarget.value)}
          onKeyDown={onKeyDown}
          disabled={isLoading}
          placeholder="Ask a question about David's experience..."
        />
        <button onClick={handleAsk} disabled={isLoading || !question.trim()}>
          {isLoading ? 'Asking...' : 'Ask'}
        </button>
      </div>
    </div>
  );
};
