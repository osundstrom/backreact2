# Moment 2 Dt210G  - Koa backend

## Info
Uppgiften använder sig av MongoDB som databas, den är uppladdad via Render.

I databasen finns det en collection som ser ut enligt nedan.
 
### AllUsers

| id   | titel    | description    | status   | __v  | 
| ---- | -------------- | ---------- | ---------- | -------- |
| 1  | titel todo  | Beskrivning av todo   | status av todo    | 0 |



## Användning
 Hur man användet det:

| Metod   | Url ändelse    | Beskrivning   | 
| ---- | -------------- | ---------- | 
| GET   | /todo   | Hämtar alla todos  | 
| POST   | /todo    | Registrerar en ny produkt   | 
| PUT   | /todo:id    | Ändrar status baserat på id| 
| DELETE   | /todo:id    | Raderar  baserat på id | 



