import Raven from 'raven-js';

const sentry_key = 'b1ac0c3d823d488b91c362856507e131';
const sentry_app = '306335';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
