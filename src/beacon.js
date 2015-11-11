export default class BeaconSender {
  constructor(eventsQueue=[]) {
    this.eventsQueue = eventsQueue;
  }

  queue(data) {
    if ((data instanceof Object) && ('data' in data && 'topic' in data)) {
      this.eventsQueue.push({
        topic: data['topic'],
        data: data['data']
      });
    }
  }

  queueBatch(data) {
    const self = this;
    if ((data instanceof Array) && (data.length > 0)) {
      data.map(function(element) {
        self.queue(element);
      });
    }
  }

  send(data, method, endpoint, headers=[]) {
    if (typeof XMLHttpRequest !== 'undefined' && data) {
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
    const self = this;
    if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
      window.setInterval(function() {
        if (self.eventsQueue && self.eventsQueue.length > 0) {
          const tempQueue = self.eventsQueue;
          self.eventsQueue = [];
          self.send(tempQueue, method, endpoint, headers);
        }
      }, interval);
    }
  }
}
