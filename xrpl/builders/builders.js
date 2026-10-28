"use strict";

function xrplT(key, fallback, vars) {
  if (window.XRPL_I18N && window.XRPL_I18N.t) return window.XRPL_I18N.t(key, fallback, vars);
  var text = fallback;
  if (vars) {
    Object.keys(vars).forEach(function (name) {
      text = text.split("{" + name + "}").join(String(vars[name]));
    });
  }
  return text;
}

document.querySelectorAll(".quiz-question").forEach((question, index) => {
  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";
  feedback.id = `quiz-feedback-${index}`;
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  question.append(feedback);
  const renderFeedback = () => {
    const choice = question.dataset.lastChoice;
    if (!choice) return;
    const button = question.querySelector('[data-choice-id="' + choice + '"]');
    if (!button) return;
    const correct = button.dataset.correct === "true";
    const lead = correct
      ? xrplT("quiz.feedback.correct", "Correct.")
      : xrplT("quiz.feedback.notYet", "Not yet.");
    const extra = question.dataset.explanation || (correct
      ? xrplT("quiz.feedback.keepGoing", "Keep going.")
      : xrplT("quiz.feedback.review", "Review the lesson and try again."));
    feedback.textContent = lead + " " + extra;
  };
  question.querySelectorAll(".quiz-options button").forEach(button => {
    button.type = "button";
    button.setAttribute("aria-describedby", feedback.id);
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      question.querySelectorAll(".quiz-options button").forEach(item => {
        item.classList.remove("correct", "wrong");
        item.setAttribute("aria-pressed", "false");
      });
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      button.setAttribute("aria-pressed", "true");
      question.dataset.lastChoice = button.dataset.choiceId || "";
      renderFeedback();
    });
  });
  document.addEventListener("xrpl:language", renderFeedback);
});

document.querySelectorAll(".checklist").forEach(list => {
  const status = list.parentElement.querySelector(".progress-note");
  if (!status) return;
  const update = () => {
    status.textContent = xrplT(
      "builders.progress",
      "{checked} of {total} practice steps checked. This page only; reloading resets them. This is not certification.",
      {
        checked: list.querySelectorAll("input:checked").length,
        total: list.querySelectorAll("input").length
      }
    );
  };
  list.addEventListener("change", update);
  document.addEventListener("xrpl:language", update);
  update();
});
