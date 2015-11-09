const config = {
  listen,
  listenAll,
  queue,
  track,
  start
};
let queue = [];

function listen(element, event, cb) {
  element.addEventListener(event, cb);
}

function listenAll(elements, events, cbs) {
  events.map(function(event, index) {
    listen(element[index], event, cbs[index]);
  });
}

function queue(topic, data) {
  queue.push({
    topic,
    data
  });
}

function track(data, method, endpoint, headers=[]) {
  if (typeof XMLHttpRequest !== 'undefined') {
    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint);
    headers.map(function(h) {
      if (h[0] && h[1]) {
        xhr.setRequestHeader(h[0], h[1]);
      }
    });
    xhr.send(data);
  }
}

function start(method, endpoint, headers, interval) {
  if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
    window.setInterval(function() {
      if (queue.length > 0) {
        const tempQueue = queue;
        queue = [];
        const obj = JSON.stringify(tempQueue);
        track(obj['data'], obj['method'], obj['endpoint'], obj['headers']);
      }
    }, interval);
  }
}

module.exports = config;
window.BeaconSender = config;