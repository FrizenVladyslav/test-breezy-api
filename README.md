# Test Breezy API

## Installation

```bash
$ pnpm install
```

## Running the Database
```bash
$ docker-compose up -d db
```

## Running the Database Migrations
```bash
$ yarn migration:run
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Migrations

```bash
# run migrations
$ pnpm migration:run

# generate migration
$ pnpm migration:generate ./typeorm/migrations/<migration-name>

# create new migration
$ pnpm migration:create ./typeorm/migrations/<migration-name>
```