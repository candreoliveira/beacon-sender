import XHREvents from 'xhr-events';
import BeaconSender from './beacon';

if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
  window.BeaconSender = BeaconSender;
}

module.exports = BeaconSender;
