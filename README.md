# jest-bug

## Code

```js
test('error', (done) => {
    setTimeout(() => {
        expect(1).toEqual(2);

        done();
    }, 1000);
});
```

## Result

```bash
$ yarn run test
yarn run v0.24.5
$ jest
 FAIL  ./index.test.js (5.213s)
  ● error

    Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.

      at pTimeout (node_modules/jest-jasmine2/build/queueRunner.js:53:21)
      at ontimeout (timers.js:488:11)
      at tryOnTimeout (timers.js:323:5)
      at Timer.listOnTimeout (timers.js:283:5)

  ✕ error (5008ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        6.036s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
