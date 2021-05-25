const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const daysArray = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const monthsArray = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

toggleEl.addEventListener('click', (e) => {
	const html = document.querySelector('html');

	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light Mode';
	}
});

const getDate = () => {
	const time = new Date();
	const hour = time.getHours();
	const shortHour = hour % 12;
	const minute = time.getMinutes();
	const second = time.getSeconds();
	const day = time.getDay();
	const month = time.getMonth();
	const date = time.getDate();

	const hourNeddleRotation = scale(shortHour, 0, 11, 0, 360);
	const minuteNeddleRotation = scale(minute, 0, 59, 0, 360);
	const secondNeddleRotation = scale(second, 0, 59, 0, 360);

	hourEl.style.transform = `translate(-50%, -100%) rotate(${hourNeddleRotation}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteNeddleRotation}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${secondNeddleRotation}deg)`;
};

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(() => {
	getDate();
}, 1000);
