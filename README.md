# Przepisownia  

## Opis projektu

Przepisownia to aplikacja webowa, która umożliwia użytkownikom przeglądanie przepisów kulinarnych, dodawanie własnych przepisów, a także komentowanie przepisów innych użytkowników.

## Technologie

* NestJS
* Vue 3 z TypeScript
* MySQL
* pnpm
* Docker
* Vitest
* Playwright

## Funkcjonalności

* Rejestracja i logowanie użytkowników
* Przeglądanie przepisów
* Dodawanie przepisów
* Komentowanie przepisów
* Edytowanie i aktualizowanie przepisów
* Usuwanie przepisów (tylko przez autora)

## Start aplikacji

Do uruchomienia aplikacji powinien wystarczyć docker-compose. Wystarczy wykonać polecenie:

```bash
docker-compose up -d
```

## Zmienne środowiskowe

Każda z aplikacji powinna korzystać ze zmiennych środowiskowych, któ®e obecnie są zlokalizowan w plikach `.env.example` w folderach `api` oraz `app`.

## Testy

API(`./api`) powinna zostać pokryta testami jednostkowymi, w przypadku aplikacji frontendowej(`.app`), powinny zostać zastosowane testy end-to-end oraz testy jednostkowe. 

## Uwagi
Zakończone repozytorium powinno zostać udostępnione na plaformie GitHub lub GitLab z dostępem publicznym. 
