# Stack
- NextJS 13
- Prisma
- Tailwind
- Jest
- Cypress + axe-core

### Path aliases
    @db  => server/db/*
   
### Tests
    pnpm run jest
    pnpm run jest:watch
    pnpm run cypress:open
    pnpm run cypress:run

### Husky
    before every commit run: linter and prettier
    before every push run: jest and cypress
