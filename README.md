## Instalacja Angulara
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
  
