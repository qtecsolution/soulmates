const btnSetting = document.querySelector('#btn-settings');
btnSetting.addEventListener('click', toggleSettings);

function toggleSettings() {
  const settingicon = document.querySelector('#settingicon');
  const closeicon = document.querySelector('#closeicon');
  const settings = document.querySelector('#mysettings');

  settingicon.classList.toggle('d-none')
  closeicon.classList.toggle('d-none')

  settings.classList.toggle('is-active');
}

let radios = document.getElementsByName('theme');

Array.from(radios).forEach( (el, i) => {
	el.addEventListener('change', e => {
			if(e.target.checked) {
				let value = e.target.getAttribute('value');
				document.querySelector('html').setAttribute('data-theme', value);
				document.documentElement.classList.add('in-transition');
        window.setTimeout(function() {
          document.documentElement.classList.remove('color-theme-in-transition')
        }, 1000);
			}
	});
});

const resetBtn = document.querySelector('#btn-reset');

resetBtn.addEventListener('click', () => {
  document.querySelector('html').setAttribute('data-theme', 'light');
})

const whiteBtn = document.querySelector('#btn-white');

whiteBtn.addEventListener('click', () => {
  document.querySelector('html').setAttribute('data-theme', 'light');
})