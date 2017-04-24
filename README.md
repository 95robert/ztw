## Instalacja
Aby zainstalować Bettinger, należy posiadać: composer do obsługi paczek php oraz node do zarządzania paczkami JavaScript. Wymagane jest również PHP oraz baza danych MySQL.
### Instalacja Symfony
* W głównym katalogu wpisujemy w konsoli: `composer install`
* Duplikujemy plik `app/config/parameters.yml.dist`go i zmienamy nazwę na `parameter.yml` (należy dostosować parametry do własnego systemu)
* W konsoli wpisujemy: `php bin/console server:run` i serwer powinien wystartować pod adresem `localhost:8000`

### Instalacja Angulara
* Wchodzimy w konsoli do `web/` i wpisujemy `npm install`
* Aby zbudować Front-End, wpisujemy w `web/`: `npm run build`
* Aby włączyć automatyczne bodowanie aplikacji przy każdej zmianie plików, wpisujemy w `web/`: `npm run build:watch`

### Baza danych
#### Tworzenie pustej bazy
W głównym katalogu projektu wpisujemy w konsoli: `php bin/console doctrine:create:datebase`
#### Aktualizacja schematu bazy
W głównym katalogu projketu wpisujemy w konsoli: `php bin/console doctrine:schema:update --force`

## Angular
###i18n, Internationalization
Aby przeszukać aplikację angulara w poszukiwaniu plików językowych, należy w /web wpisać:
`npm run i18n -- -p src/tsconfig.json`
Następnie przetłumaczyć `messages.xlf` na odpowiedni język i zapisać w formacie: `web/src/locale/messages.pl.xlf`

## Komendy
### Pobieranie meczów
Komenda: `php bin/console bettinger:download:matches`   
Działanie: póki co ładuje przykładowe mecze/drużyny/ligii, pózniej będzie pobierać dane o przyszłych meczach z innej strony

## API
### Rejestracja
Ścieżka: `api/register`  
Wymagane dane:  
*  email  
*  login 
*  password  
*  repassword

Zwracane dane:  
*    ok - określa, czy udało się zarejestrować 
*    error_code - kod błędu(  
        1 - login jest zajęty  
        2 - email jest zajety  
        3 - hasła się nie zgadzają  
        4 - hasło za krótkie  
)  
*    error_msg - opis błędu   
      
### Logowanie  
Ścieżka: `api/login`  
Wymagane dane:   
* username - login lub adres e-mail  
* password - hasło  
Zwracane dane:  
* ok - określa, czy udało się zalogować  
* error_code - kod błędu(  
            1 - użytkownik nie istnieje  
            2 - hasło się nie zgadza  
        )  
* error_msg - opis błędu  

### Wylogowywanie  
Ścieżka: `api/logout`  
Brak wymaganych danych  
Zwracane dane:  
*    1 - udało się wylogować  
*    0 - nie udało się wylogować  


## API - Ligi  
Ścieżka: `api/league`  
Brak wymaganych danych  
Zwracane dane:  
*    array - obiektów lig {id, name} 


## API - Drużyny
Ścieżka: `api/team`  
Brak wymaganych danych  
Zwracane dane:  
*    array - obiektów drużyn {id, name} 

## API - Mecze
### Mecze - tablica wszystkich meczy
Ścieżka: `api/game`  
Brak wymaganych danych  
Zwracane dane:  
*    array - obiektów meczy {id, date, teamOneScore, teamTwoScore, league, teamOne, teamTwo} 

### Mecze - tablica przefiltrowanych meczy
Ścieżka: `api/game/filter`  
Dane (wszystkie opcjonalnie):  
*  league - id ligi 
*  team - id drużyny
*  minDate - format (01-01-2000)
*  maxDate - format (01-01-2000)  

Zwracane dane:  
*    array - obiektów meczy {id, date, teamOneScore, teamTwoScore, league, teamOne, teamTwo} 

## API - Typy
### Typy - tablica wszystkich typów
Ścieżka: `api/bet`  
Brak wymaganych danych  

Zwracane dane:  
*    array - obiektów typów {id, cost, odds, stake, result, status, user, game} - gdy zalogowany użytkownik nie ma uprawnień do zobaczenia co obstwił typer, wtedy nie w tablicy nie ma zmiennej "result"

### Typy - tablica przefiltrowanych typów
Ścieżka: `api/bet/filter`  
Dane (wszystkie opcjonalnie):  
*  id - id typu 
*  game - id meczy
*  user - id typera
*  cost - maksymalny koszt  

Zwracane dane:  
*    array - obiektów typów {id, cost, odds, stake, result, status, user, game} - gdy zalogowany użytkownik nie ma uprawnień do zobaczenia co obstwił typer, wtedy w tablicy nie ma zmiennej "result"

### Typy - dodawanie typów
Ścieżka: `api/bet/add`  
Dane (wszystkie wymagane):  
*  cost - cena typu 
*  odds - kurs
*  stake - stawka
*  result - (0-remis, 1 - wygrywa gospodarz, 2-wygrywa gość)
*  game - id meczu  

Zwracane dane:  
*    ok - true/false - czy udało się dodać
  
