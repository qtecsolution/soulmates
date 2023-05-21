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