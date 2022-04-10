# ROZVRŽENÍ

Webová aplikace je rozdělena obecně na dvě složky CLIENT a SERVER, přičemž na straně serveru jsou zastoupeny technologie MONGODB (databáze), NODEJS (systém, pro psaní serverů), EXPRESS (back-endový webový aplikační framework pro Node.js). Na straně clienta je potom REACTJS.

## SERVER

Ve složce __*server*__ jsou složky __*handlers a models*__ + soubory __*gitignore, index.js, package-lock.json a package.json*__. Po stažení obou hlavních souborů (__*client*__ a __*server*__) do svého pc by člověk měl v příkazové řádce použít __*npm i*__ v každé složce, která obsahuje __*package.json*__ což jednoduše dělá to, že stáhne všechny __*dependecies*__, které projekt vyžaduje uložené právě v tom __*package.json*__ souboru do složky (která se vygeneruje) zvané __*node_modules*__ --> pokusím se rozebrat všechny

**index.js**
--

Tak tady je definovaný náš server. Obecně se dost často dělá to, že se zde definujou i __*routy*__, ale abychom předešli pádu celého serveru v případě drobné chyby v definování jednotlivých __*rout*__, tak uděláme odkaz na soubor __*const router = require("./handlers/routes");*__, kde se routy budou psát aby nám, kdyžtak spadly jen ty cesty, kde se dopustíme chyby.
