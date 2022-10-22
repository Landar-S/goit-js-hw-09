import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      setTimeout(
        () =>
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          ),
        delay
      );
    })
    .catch(({ position, delay }) => {
      setTimeout(
        () =>
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          ),
        delay
      );
    });
}

function onSubmitForm(e) {
  e.preventDefault();

  const formData = {
    newDelay: Number(formEl.elements.delay.value),
    step: Number(formEl.elements.step.value),
    amount: Number(formEl.elements.amount.value),
  };

  if (formData.newDelay < 0 || formData.step < 0 || formData.amount < 1) {
    Notiflix.Report.warning('Warning', 'Enter the correct data', 'Ok');
    return;
  }

  for (let position = 1; position <= formData.amount; position += 1) {
    createPromise(position, formData.newDelay);

    formData.newDelay += formData.step;
  }
}
