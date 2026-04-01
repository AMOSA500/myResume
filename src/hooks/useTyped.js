import { useState, useEffect } from 'react';

const roles = [
  'Full-Stack Software Engineer',
  'Backend Developer',
  'Python & Django Developer',
  'React & Node.js Engineer',
  'Cybersecurity Enthusiast',
];

export function useTyped() {
  const [text, setText] = useState('');

  useEffect(() => {
    let timer;
    let roleIndex = 0, charIndex = 0, deleting = false;

    function type() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timer = setTimeout(type, deleting ? 50 : 90);
    }

    timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  return text;
}
