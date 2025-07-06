# Clover XP

App Frontend for Clover XP

## Playwright End-to-End Testing

This project uses [Playwright](https://playwright.dev) for end-to-end (E2E) testing. Playwright is already included as a dev dependency.

### Install Playwright Browsers

Before running tests for the first time, install the required browsers

```bash
npx playwright install
```

### Run All Playwright Tests

```bash
npm run test:e2e
# or
yarn test:e2e
# or
pnpm test:e2e
```

### Run a specific Test File

```bash
npx playwright test src/tests/home.spec.ts
```

## Open Playwright Test Runner UI

```bash
npx playwright test --ui
```

### Generate a new test

```bash
npx playwright codegen http://localhost:3000
```

### Debug tests in Headed Mode

```bash
npx playwright test --headed --debug
```

### View HTML Test Report

After running tests, view the report with:

```bash
npx playwright show-report
```

### Unit Testing with Jest
