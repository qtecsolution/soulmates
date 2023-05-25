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

let radios = Array.from(document.getElementsByName('theme'));

radios.forEach((radio) => {
	radio.addEventListener('change', e => {
    if(e.target.checked) {
      let value = e.target.getAttribute('value');
      document.querySelector('html').setAttribute('data-theme', value);
    }
	});
});

const resetBtn = document.querySelector('#btn-reset');

resetBtn.addEventListener('click', () => {
  document.querySelector('html').setAttribute('data-theme', 'light');
})