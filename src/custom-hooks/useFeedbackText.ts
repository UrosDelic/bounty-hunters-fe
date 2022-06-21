import { useEffect, useState } from 'react';

export function useFeedbackText(dependency: boolean) {
  const [isFeedbackTime, setIsFeedbackTime] = useState(false);
  const feedbackTranslate = isFeedbackTime
    ? 'translateY(0%)'
    : 'translateY(-100%)';
  const feedbackOpacity = isFeedbackTime ? 1 : 0;

  useEffect(() => {
    if (dependency) {
      setIsFeedbackTime(true);
      const feedBackTimeout = setTimeout(() => setIsFeedbackTime(false), 3000);
      return () => clearTimeout(feedBackTimeout);
    }
  }, [dependency]);

  return { feedbackTranslate, feedbackOpacity };
}
