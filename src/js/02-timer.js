import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timerElements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const inputDate = document.querySelector('#datetime-picker');
const btnStartTimer = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      btnStartTimer.disabled = true;
      return;
    }

    btnStartTimer.addEventListener('click', () => {
      btnStartTimer.disabled = true;
      const { days, hours, minutes, seconds } = convertMs(
        selectedDates[0] - new Date()
      );
      console.log(selectedDates[0] - new Date());
      timerElements.days.textContent = addLeadingZero(days);
      timerElements.hours.textContent = addLeadingZero(hours);
      timerElements.minutes.textContent = addLeadingZero(minutes);
      timerElements.seconds.textContent = addLeadingZero(seconds);
      let timerId = setInterval(() => {
        if (selectedDates[0] - new Date() <= 1000) {
          clearInterval(timerId);
        }
        const { days, hours, minutes, seconds } = convertMs(
          selectedDates[0] - new Date()
        );
        timerElements.days.textContent = addLeadingZero(days);
        timerElements.hours.textContent = addLeadingZero(hours);
        timerElements.minutes.textContent = addLeadingZero(minutes);
        timerElements.seconds.textContent = addLeadingZero(seconds);
      }, 1000);
    });
  },
};

flatpickr(inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
