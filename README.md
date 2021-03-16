# NgGeneratorCycles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

It is a toy application that cycles through the prime roots of a provided number.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker image

internal port is an arg. map it to whatever, e.g. -p 80:80, and visit

http://localhost/

to build,

```
docker build --build-arg PORT=80 -t ariovistus/ng-generator-cycles .
```
