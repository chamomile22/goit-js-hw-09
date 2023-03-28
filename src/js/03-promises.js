import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  let delay = Number(refs.delay.value);
  for (let i = 0; i < Number(refs.amount.value); i++) {
    createPromise(i, delay)
      .then(value => {
        Notify.success(value);
      })
      .catch(error => {
        Notify.failure(error);
      });
    delay = delay + Number(refs.step.value);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position + 1} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position + 1} in ${delay}ms`);
      }
    }, delay);
  });

  return promise;
}
