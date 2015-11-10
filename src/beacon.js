let eventsQueue = [];
const config = {
  queue: queue,
  send,
  start
};

function queue(topic, data) {
  eventsQueue.push({
    topic,
    data
  });
}

function send(data, method, endpoint, headers=[]) {
  if (typeof XMLHttpRequest !== 'undefined' && 'data' in data && 'topic' in data) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint);
    headers.map(function(h) {
      if (h[0] && h[1]) {
        xhr.setRequestHeader(h[0], h[1]);
      }
    });
    xhr.send(JSON.stringify(data));
  }
}

function start(method, endpoint, headers, interval) {
  if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {
    window.setInterval(function() {
      if (eventsQueue && eventsQueue.length > 0) {
        const tempQueue = eventsQueue;
        eventsQueue = [];
        tempQueue.map(function(element) {
          send(element, method, endpoint, headers);
        });        
      }
    }, interval);
  }
}

module.exports = config;
window.BeaconSender = config;
