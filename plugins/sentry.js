import Vue from 'vue';
import * as Sentry from '@sentry/vue';

Sentry.init({
    Vue,
    dsn: 'https://855c85bf071d4df4aa44b63c0a0ed54b@o717720.ingest.sentry.io/5793427',
    release: '5',
});
