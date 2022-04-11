# ROZVRŽENÍ

Webová aplikace je rozdělena obecně na dvě složky CLIENT a SERVER, přičemž na straně serveru jsou zastoupeny technologie MONGODB (databáze), NODEJS (systém, pro psaní serverů), EXPRESS (back-endový webový aplikační framework pro Node.js). Na straně clienta je potom REACTJS.

## SERVER

Ve složce __*server*__ jsou složky __*handlers*__ a __*models*__ + soubory __*gitignore, index.js, package-lock.json a package.json*__. Po stažení obou hlavních souborů (__*client*__ a __*server*__) do svého pc by člověk měl v příkazové řádce použít __*npm i*__ v každé složce, která obsahuje __*package.json*__ což jednoduše dělá to, že stáhne všechny __*dependecies*__, které projekt vyžaduje uložené právě v tom __*package.json*__ souboru do složky (která se vygeneruje) zvané __*node_modules*__ --> pokusím se rozebrat všechny

**package.json (v server složce)**
--

__*Package.json*__ nedělá nic jiného, než, že si v sobě uchovává __*dependencies*__, které jsou nutné pro správné fungování toho našeho serveru (pozor jsou tu jen  __*dependencies*__, které se týkají __*serveru*__, ne složky __*client*__ --> tam je zase jiný package.json). V __*package.json*__ se dají dělat i drobné scripty, které nám třeba při nějákem __*command*__ spustí __*npm i*__ v obou složkách (__*client*__ a __*server*__). V našel serverovém __*package.json*__ máme tyhle __*dependencies*__ :

* bcrypt --> stará se o hashování hesel
* cors --> node.js package, který zajišťuje správné komunikování v HTTPS
* dotenv --> v překladu environmental variables, nejčástěji využiváno pro uložení proměnné nutné pro funkci databázového serveru
* express --> to je ten malý vysoce škálovatelný framework, který nám poskytuje soubor nějákých funkcionalit pro konstrukci toho serveru
* mongoose --> knihovna pro MongoDB a Node.js, která spravuje vazby mezi daty a poskytnutými schématy, často se používá jako překladač mezi objekty použítými v kodu a jejich reprezentaci v MongoDB

**package-lock.json (v server složce)**
--

Uzamyká jednotlivé verze těch našich __*dependencies*__, pro případ, že by se přešlo na verzi, která havaruje abychom se mohli rátit k poslední, která byla __OK__

**index.js**
--

Tak tady je definovaný náš server. Obecně se dost často dělá to, že se zde definujou i __*routy*__, ale abychom předešli pádu celého serveru v případě drobné chyby v definování jednotlivých __*rout*__, tak uděláme odkaz na soubor __*const router = require("./handlers/routes");*__, kde se routy budou psát aby nám, kdyžtak spadly jen ty cesty, kde se dopustíme chyby.

**.gitignore**
--

Stará se o to, aby se na github __*nepushovali*__ soubory a složky, které obsahuji buď obrovské množství lokálních proměnných (nebo jen zbytečných dat) a nebo modulů, které si pak mužeme stáhnout sami (automaticky), když už víme jaké (díky __*package.json*__) přes __*npm i*__.

**models (složka)**
--

Ve složce model jsou deifnované kolekce dat (a každé kolekce má v sobě schéma toho dokumnetu --> v SQL databázích je to to stejné co schéma tabulky), tak jak je uvidíme pak v MongoDB ATLAS a jak s nimi budeme pracovat.

**handlers (složka)**
--

Složka obsahuje dva soubory __*mongo.js*__ a __*routes.js*__. Ten první soubor __*mongo.js*__ nám pomáhá utvářet dotazy na data z databáze --> tvoříme si zde funkce na práci s databází. Soubor __*routes.js*__ tvoří na základě těchto dotazů cesty.

## CLIENT

Ve složce __*client*__ jsou složky __*public*__ a __*src*__ + soubory __*gitignore, package-lock.json a package.json*__. Po stažení obou hlavních souborů (__*client*__ a __*server*__) do svého pc by člověk měl v příkazové řádce použít __*npm i*__ v každé složce, která obsahuje __*package.json*__ což jednoduše dělá to, že stáhne všechny __*dependecies*__, které projekt vyžaduje uložené právě v tom __*package.json*__ souboru do složky (která se vygeneruje) zvané __*node_modules*__ --> pokusím se rozebrat všechny

O souborech __*package.json*__ a __*package-lock.js*__ už jsem mluvil, ale rozdil tu i tak je. Zatímco ve složce __*server*__ jsme v dependencies měli knihovny zaměřené na serverovou část, tak v případě __*package.json*__ v rámci __*client*__ složky máme knihovny pro část klientskou.

**package.json (v client složce)**
--

* axios --> novější náhrada za defaultní __*fetch*__, který je vrámci javascriptu již implementovaný (axios a fetch dostaávají data ze serverové části do klientské)
* react --> javascriptová knihovna, pro tvorbu uživatelského rozhranní
* styled-components --> je to knihovna pro React, která nám umožňuje stylovat komponenty v naší aplikaci

> Odbočka k __JSX__. Je to rozšíření React sysntaxe jazyka JavaScript, které poskytuje způsob, jak strukturovat vykreslování komponent pomocí syntaxe známé mnoha vývojářům. Vzhledem se podobá HTML. React komponenty jsou obvykle psány pomocí JS, ikdyž to tak nemusí být, protože je můžeme psát klidně ve VanillaJS. 
 
# SCRIPTS for running servers

    $ cd BT-main/server
    $ npm run server (ve složce server --> localhost3000)
    $ cd ..
    $ cd client
    $ npm start (ve složce client --> localhost:4000)

