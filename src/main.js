import BeaconSender from './beacon';

if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
  window.BeaconSender = new BeaconSender();
}

module.exports = new BeaconSender();
