import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
    thresholds: {
        errors: ['rate<0.1'], // threshold for the error rate metric
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    },
    scenarios: {
        constant_users: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
        },
        ramping_users: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '10s', target: 20 },
                { duration: '10s', target: 10 },
            ],
            gracefulRampDown: '0s',
        },
    },
};

export default function () {
    group('API test', function () {
        let res = http.get('https://jsonplaceholder.typicode.com/posts');
        let result = check(res, {
            'is status 200': (r) => r.status === 200,
            'response body is not empty': (r) => r.body.length > 0,
        });
        errorRate.add(!result);
        sleep(1);
    });
}
