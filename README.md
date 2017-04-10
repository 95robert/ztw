WYMAGANA INSTALACJA WAMP-a LUB XAMPP-a! Jak nie ma, to standardowa instalacja, polecam WAMP-a. WYMAGANA INSTALACJA COMPOSER - https://getcomposer.org/doc/00-intro.md

    Odpalamy konsole w folderze z projektem.
    Sprawdzamy czy mamy globalnie zainstalowanego php i composera
        w konsoli wpisujemy: php -v
        jak nie ma(czyli wyrzuca 'php is not recognized as an internal or external command') to lipa i trzeba zrobić tak: 2.1 Panel sterowania 2.2 System 2.3 Zaawansowane ustawienia systemu 2.4 Zmienne środowiskowe 2.5 Wybieramy zmienną PATH 2.6 EDYTUJ 2.7 NOWY 2.8 i wklejamy ścieżkę do folderu z php-em u mnie jest to (C:\wamp\bin\php\php5.6.25) 2.9.1 OK, OK i OK 2.9.2 Robimy tak samo z composerem zaczynając od "composer -v" 2.10 Zamykany konsole, otwieramy ponownie, wchodzimy do folderu z projektem i sprawdzamy czy tym razem mamy php
    Sprawdzamy czy mamy composer - jak już jest to dajemy "composer install"
    Wchodzimy w app/config/ i mamy plik parameters.yml.dist i duplikujemy go i zmienamy nazwę na parameter.yml, tak żeby były oba pliki
    W konsoli wpisujemy: php bin/console server:run
    Serwer powinien wystartować i pod adresem "localhost:8000" powinniśmy zobaczyć stonę z napisem TA DAM

## Instalacja Angulara
###Instalacja
Wchodzimy w konsoli w `web/` i wpisujemy `npm install`.
### Uruchomienie
Wchodzimy w konsoli w `web/` i wpisujemy `npm start`. To uruchamia cały serwer z automatycznie kompilowanymi plikami TypeScripta w tle. To oznacza, że serwer Symfony powinien być uruchomiony przed uruchomieniem Angulara.


## Baza danych
### Tworzenie pustej bazy
W głównym katalogu projektu wpisujemy w konsoli: `php bin/console doctrine:create:datebase`
### Aktualizacja schematu bazy
W głównym katalogu projketu wpisujemy w konsoli: `php bin/console docrtine:schema:update --force`
