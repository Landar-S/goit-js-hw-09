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

  let position = 1;
  let newDelay = Number(formEl.elements.delay.value);

  for (let i = 0; i < formEl.elements.amount.value; i += 1) {
    createPromise(position, newDelay);
    position += 1;
    newDelay += Number(formEl.elements.step.value);
  }
}
