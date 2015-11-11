export default class BeaconSender {
  constructor(eventsQueue=[]) {
    this.eventsQueue = eventsQueue;
  }

  queue(topic, data) {
    this.eventsQueue.push({
      topic,
      data
    });
  }

  send(data, method, endpoint, headers=[]) {
    if (typeof XMLHttpRequest !== 'undefined' && 'data' in data && 'topic' in data) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, endpoint);
      headers.map(function(h) {
        if (h[0] && h[1]) {
          xhr.setRequestHeader(h[0], h[1]);
        }
      });
      xhr.send(JSON.stringify(data));
      return xhr;
    }
  }

  start(method, endpoint, headers, interval) {
    if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
      const self = this;
      window.setInterval(function() {
        if (self.eventsQueue && self.eventsQueue.length > 0) {
          const tempQueue = self.eventsQueue;
          self.eventsQueue = [];
          tempQueue.map(function(element) {
            self.send(element, method, endpoint, headers);
          });
        }
      }, interval);
    }
  }
}
