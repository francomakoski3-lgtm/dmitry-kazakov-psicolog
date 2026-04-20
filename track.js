(function () {
  'use strict';

  var API_BASE = (window.TRACK_API != null ? window.TRACK_API : '');

  function send(endpoint, payload) {
    try {
      fetch(API_BASE + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(function () {});
    } catch (e) {}
  }

  function trackPageView() {
    send('/track', {
      page: window.location.pathname,
      referrer: document.referrer || '',
      language: navigator.language || ''
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageView);
  } else {
    trackPageView();
  }

  window.trackEvent = function (eventName, elementLabel) {
    send('/event', {
      page: window.location.pathname,
      event: eventName || 'click',
      element: elementLabel || ''
    });
  };
}());
