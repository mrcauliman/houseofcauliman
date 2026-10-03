"use strict";
document.querySelectorAll('.quiz-question').forEach((question, index) => {
  const feedback = document.createElement('p');
  feedback.className = 'quiz-feedback';
  feedback.id = `quiz-feedback-${index}`;
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  question.append(feedback);
  question.querySelectorAll('.quiz-options button').forEach(button => {
    button.type = 'button';
    button.setAttribute('aria-describedby', feedback.id);
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      question.querySelectorAll('.quiz-options button').forEach(item => {
        item.classList.remove('correct', 'wrong');
        item.setAttribute('aria-pressed', 'false');
      });
      const correct = button.dataset.correct === 'true';
      button.classList.add(correct ? 'correct' : 'wrong');
      button.setAttribute('aria-pressed', 'true');
      feedback.textContent = (correct ? 'Correct. ' : 'Not yet. ') + (question.dataset.explanation || (correct ? 'Keep going.' : 'Review the lesson and try again.'));
    });
  });
});
document.querySelectorAll('.checklist').forEach(list => {
  const status = list.parentElement.querySelector('.progress-note');
  const update = () => { status.textContent = `${list.querySelectorAll('input:checked').length} of ${list.querySelectorAll('input').length} practice steps checked. This page only; reloading resets them. This is not certification.`; };
  list.addEventListener('change', update);
  update();
});
