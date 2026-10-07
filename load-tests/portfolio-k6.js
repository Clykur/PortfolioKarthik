import http from 'k6/http';
import { check, sleep } from 'k6';

// k6 Load & Scalability Test Suite for Karthik Naramala Portfolio
// Scenarios:
// 1. Smoke test: 50 VUs (1m)
// 2. Average load: 500 VUs (3m)
// 3. Stress / Spike load: 1,000 VUs (2m)

export const options = {
  stages: [
    { duration: '30s', target: 50 },    // Ramp up to 50 users (smoke)
    { duration: '1m', target: 500 },    // Ramp up to 500 concurrent users
    { duration: '2m', target: 500 },    // Sustained 500 concurrent users
    { duration: '30s', target: 1000 },  // Peak load spike to 1,000 users
    { duration: '1m', target: 1000 },   // Sustained 1,000 users
    { duration: '30s', target: 0 },     // Ramp down gracefully
  ],
  thresholds: {
    // 95% of requests must complete below 200ms
    http_req_duration: ['p(95)<200', 'p(99)<400'],
    // Error rate must remain under 0.5% under 1000 users
    http_req_failed: ['rate<0.005'],
  },
};

const BASE_URL = __ENV.TARGET_URL || 'http://localhost:8080';

export default function () {
  // 1. Home page request
  const homeRes = http.get(`${BASE_URL}/`);
  check(homeRes, {
    'home status is 200': (r) => r.status === 200,
    'home has doctype': (r) => r.body && r.body.includes('<!doctype html>'),
  });

  // 2. Health probe request
  const healthRes = http.get(`${BASE_URL}/health.json`);
  check(healthRes, {
    'health status is 200': (r) => r.status === 200,
    'health payload status ok': (r) => r.body && r.body.includes('"status": "healthy"'),
  });

  // 3. Resume view request
  const resumeRes = http.get(`${BASE_URL}/resume.html`);
  check(resumeRes, {
    'resume status is 200': (r) => r.status === 200,
    'resume contains name': (r) => r.body && r.body.includes('Karthik Naramala'),
  });

  // 4. Sitemap & robots check
  const sitemapRes = http.get(`${BASE_URL}/sitemap.xml`);
  check(sitemapRes, {
    'sitemap status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
