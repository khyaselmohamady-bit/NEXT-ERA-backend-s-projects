# NEXTPATH Backend

This is the NEXTPATH backend application. It begins with the deterministic eligibility engine because that is the product's trust boundary: AI may explain a verdict, but only explicit rules decide it.

## First runnable slice

```text
GET /api/health
        -> verifies the backend process is alive

Eligibility profile + opportunity requirements
        -> pure eligibility engine
        -> four-state, structured result
        -> Vitest unit tests
```

## Local setup

1. Copy `.env.example` to `.env.local` when the team has created its Supabase project.
2. Install packages with `pnpm install`.
3. Run `pnpm test` to test the engine.
4. Run `pnpm dev` and open `http://localhost:3000/api/health`.

No Supabase credentials are needed for the current eligibility tests. Database wiring begins after the shared schema proposal is aligned with the database/AI teammate.

## Study order

1. `src/core/eligibility/types.ts`: the vocabulary and data contracts.
2. `src/core/eligibility/evaluate.ts`: the pure rule engine.
3. `src/core/eligibility/evaluate.test.ts`: proof that the rules behave correctly.
4. `src/app/api/health/route.ts`: the smallest complete API route.
