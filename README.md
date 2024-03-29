# Bachelor-Thesis

Bachelor thesis at University of Palacky 2021/2022 až 2022/2023

**Vznik nápadu na bakálřskou práci** (spíš pro mě jako záznam)

Od začátku školního roku 2021/2022 se moje přítelkyně vydala cestou brigád na vlastní pěst a to tak, že začala doučovat Angličtinu. Když s tím začala, tak ze začátku používala aplikaci pro rozšíření jejího profilu mezi studenty, kteří hledají doučujícího (pro širší záběr zadala víc možností kontaktu od mobilu přes whatsup až po email). Ze začátku bylo fajn když ji studenti začali psát, ale postupem času bylo neúnosné udržovat s každým konverzaci na jiné platformě a domlouvat s každým individuálně hodiny, nebo řešit peníze skrz jiné sociální sítě. Napadlo mě tedy udělat informační systém, který by ji práci s domluvou a plánováním usnadnil při komunikaci se studenty. V dokumentu teď postupně rozeberu všechny aspekty tohoto informačního systému.

**Odkazy**

[PROTOTYP ve Figmě](https://www.figma.com/file/EsdxbekJrScMOYiIbjaQNq/Bachelor-Thesis?node-id=0%3A1)

[PÍSEMNÁ ČÁST v Overleaf](https://www.overleaf.com/read/btfcyfmwnmxq)

[VERCEL](https://vercel.com/3n0wd3n/batchelor-thesis-testing)

[MONGODB - ATLAS](https://cloud.mongodb.com/v2/6204f3dc0191d10e7ac6c9a2#/metrics/replicaSet/63ef6f8ae72b2571f7006764/explorer/BMEnglish/apologies/find)

**Rozdělení**

Do informačního systému by se přihlašovalo skrz standartní login. Žádná registrace by nebyla, protože by správce (Bára) každému novému příchozímu dala jeho přihlašovací jméno a heslo (mohl bych generovat). Po zadání přihlašovacích údajů by se rozeznávali tři typy uživatelů.

1. typ (správce/admin)

> - Mazání studentů (pouze zneviditelnit a znemožnit přístup, ale pro pořeby obnovení je student stále v databázi)
>
> - Jednotlivým studentům možnost zapisovat/shrnout co bylo tématem minulých hodiny
>
> - Jednotlivým studentům psát domácí úkoly
>
> - Přikládat individuálně .PDF studentům do sekce s materiály (obecně soubory)
>
> - Individuální osnova/plán pro studenta, který lze měnit správcem podle aktuální potřeby studenta po domluvě
>
> - Změnit čas následující výuky
>
> - Možnost změnit jméno, příjmení
>
> - Přidat odkaz na slovíčka (flash cards)

2. typ (student mladší 18 let)

> - Uvidí osnovu, která naznačuje cestu jakou studium bude probíhat
>
> - Krátké shrnutí hodin v sekci průběžné shrnutí
>
> - Uvidí domácí úkoly
>
> - Uvidí .PDF soubory pro tisk na hodiny
>
> - Uvidí čas následující, na kterém se domluvili, že hodina bude probíhat
>
> - Může se omluvit z hodiny
>
> - Může si změnit heslo

3. typ (student starší 18 let/rodič)

> - Uvidí všechno, co student mladší 18 let plus výčet věci, které jsou pod tímto odstavcem
>
> - Uvidí průběžné (nejespíš měsíční) zhodnocení práce studenta (jen v případě když to bude samozřejmě pro rodiče jinak studentovi staršímu 18 let to nemá moc vyznám tam psát, protože si za to zodpovídá sám).
>
> - Po zádání administrátorem/správcem kolik hodin týdně proběhlo by jednoduchý algoritmus pro výpočet trojčlenky měl vyhodi číslo, kolik to dělá za tu hodinu a posčíta s početem hodin, které proběhly --> závěrem se vždy ukáže v sekci pro administrativní informace počet kolonek (takový blok, který by měl hlavní viditelnou část právě nesplacené číslo a klidně i dole pak informace o tom za co rdič teda platí --> co proběhlo za hodiny) odpovídajících nesplaceným týdnům (je to spíš takových provizorní check-list pro rodiče aby věděli co už poplatili a co jim ještě zbývá, protože se často stává, že Bára, řeší, že si rodiče nepamatují, které týdny už zaplatilia které ne a dohledává se to v mailech).
>
> - Informace o č.ú

Pro všechny jsou samozřejmě jiná práva a každý uvidí něco jiného.

_Ještě přemýšlím jestli by nebylo lepší kdyby existovali jen dvě role a to správce, student s tím, že ve studentském režimu by bylo tlačítko, které odkazuje na stránku/sekci, kde jsou administrativní informace a když by student byl mladší 18 let, tak by musel zadat heslo, které zná jen zákonný zástupce, takže bychom předešli tomu aby si tam nastavoval to na co nemá oprávnění. Nápadá mě to z důvodu toho, aby správce nemusel vytvářet účet ještě rodičům + si správce bude spíš pamatovat při vyhledávání studentů, které učí co k němu má napsat a pamatovat si ještě všechny rodiče a jejich účty by možná bylo zbytečné --> Dalo by se to obejit tak, že by správce mohl pokládat dotaz na databází, který rodič je kterého dítěte a potom by měla informaci o tom komu má psát administrativní informace. Další nevýhodou tří rolí je také to, že student, který je starší osmnácti let by měl jak uživatelské jméno a heslo pro studentskou roli, tak i uživatelské jméno a heslo pro rodičovskou/studentskou starší 18ti let._

**Technologie**

Nad technologiemi ještě přemýšlím co by bylo lepší použít. Výhodou je(možná ne), že ještě na nic nejsem zvyklý a jsem v tomto tak trochu nepopsaná kniha, protože jsem ještě back-end, nebo tady ten server-site nikdy nedělal, takže když se do něčeho pustím, tak asi nebude problém s neustálým porovnávním syntaxí co je horší, nebo lepší. Vlastně teď uvažuju nad tím, u čeho se nejmíň můžu spálit. Přemýšlel jsem jak nad standartní cestou HTML5, CSS3, VanillaJS, SQL + PHP a školní server, tak i nad cestou ReactJS, MongoDB (MongoDB Atlas) + NodeJS (speciálně Express server) v kombinaci s hostingem na Heroku (--> nakonec to dopadlo tak, že využívám NextJS (pro klientskou a serverovou část) a MongoDB (s využítím MongoDB Atlas), kde to celé hostuju na Vercelu). Jednu z těchto serií technologií bych si rád vybral a teď zvažuju co bude nejlepší, protože je pravda, že pro menší aplikaci by ta druhá varianta mohla být trochu "overkill", ale zase když by se teda všechno objevovalo na jedné strance potom ta reaktivita a možnost generování akorát nového obsahu není špatný nápad. Nadruhou stranu co se týče PHP je tu všude plno dokumentace a je dost velká pravděpodobnost, že to co chci dělat už někdo dělal a na některé chyby narazil místo mě a jsou už vyřešené.

**Jak bych chtěl postupovat**

- [x] prokonzultovat rozdělení Informačního systému s vedoucím práce, tak abych věděl, že už od začátku nebudu dělat něco špatně
- [x] domluvit se na návrhu bakalářské práce
- [x] vygenerovat PDF dokument ze STAGU s formálním zadáním práce
- [x] vybrat technologie, které budou pro projekt a pro mě co nejvíce vhodné
  > technologie, které budou webovou aplikaci absluhovat jsou na straně clienta REACTJS a na straně serveru NODEJS, EXPRESS (bude běžet na HEROKU) + databáze MONGODB (běží na atlasu)
- [x] ve Figmě navrhnout design celé stránky (s viditelnou responzivitou a naznačenými klikacími úkony) --> pro možnost sledování průběhu návrhu přikládám odkaz na [PROTOTYP ve Figmě](https://www.figma.com/file/EsdxbekJrScMOYiIbjaQNq/Bachelor-Thesis?node-id=0%3A1)
- [x] postupně pomocí styled components začít stylovat stránky dle návrhu z figmy
- [x] nakonfigurovat server
- [x] rozvrhnout databáze
- [x] propojit databázi s MongoDB ATLAS
- [x] samotné propojení a naprogramování webové aplikace

**O CO BY SE DALA BAKÁLÁŘKA ROZŠÍŘIT**

- REACT NATIVE
- VYHLEDÁVÁNÍ V UŽIVATELÍCH
- PŘIDÁVÁNÍ SOUBORŮ A ODKAZŮ VŠEM (například spelling bee, woordle apod.)
- PLATEBNÍ BRÁNA
- ROZPOZNÁVÁNÍ JESTLI JE ÚLOHA HYPERTEXT A JESTLI ANO, TAK BY UKOL FUNGOVAL JAKO ODKAZ
- INTEGROVANÉ HRY (STORY DICE)
- KALENDÁŘ NA STRANĚ ADMINA, KDE BY VIDĚL VŠECHNY HODINY CO PŘES TÝDEN MÁ ABY VĚDĚL, NA KTERÉ DNY SI MŮŽU KDYŽTAK PŘIDAT STUDENTY
- DOČASNÁ OBNOVA HESLA PŘI ZAPOMENUTÍ ŽÁKA
- PŘIDÁNÍ LEKCE
- ZMĚNA LEKCE PERMANENTNĚ
- KDYŽ BARČA ZMĚNÍ HODINU, TAK UŽIVATEL NA EMAIL DOSTANE UPOZORNĚNÍ
- PŘÍDÁNÍ OKDAZŮ
- MOŽNOST PŘESUNOUT ZÁPISKY V SUMARIZACÍCH NAHORU A DOLU, PROTOŽE PO SMAZÁNÍ JEDNÉ SUMARIZACE Z NĚJAKÉHO DATA UŽ BY NEMUSELY DATUMY JÍT PO SOBĚ
- PŘI ZAKLÁDÁNÍ UŽIVATELE ŘÍCT ADMINOVI JESTLI NEDÁVÁ UŽIVATELE NA DATUM, KTERÉ UŽ MÁ NĚJAKÝ STUDENT ZABRANÉ
- V RODIČOVSKÉM MODU MÍT VŠECHNO V ČEŠTINĚ
- DODĚLAT UPOZORNĚNÍ KDYŽ SE BUDE JEDNAT O DESTRUKTIVNÍ AKCE (odstranění studenta například)
- KONTAKTNÍ INFORMACE NA DÍTĚ NEBO NA ZÁKONNÉHO ZÁSTUPCE
- PŘI ZMĚNNĚ HODINY KONTAKTOVAT UŽIVATELE O JEJÍ ZMĚNĚ
- PŘIDAT K INFORMACI O PLATBĚ HODINY DATUM KDY HODINU ČLOVĚK ZAPLATIL (KDY SE ZOBRAZILA INFORMACE O PLATBĚ V POŠTĚ) ABY ADMIN VĚDĚL, NA KTERÉ DATUM SE V BANKOVNICTVÍ ZAMĚŘIT
- INTEGROVANÉ CHATOVACÍ OKNO 

**TMP TO DO**

- [x] aktivovat atributy bez refreshe
- [x] přidat do uživatele atribut 'active/disabled', který bude reprezentovat jestli admin uvidí studenta nebo ne, protože admin může mít právo některého studenta odstranit (po konzultaci s vedoucím práce by ale takto adstraněný student měl zůstat v databázi pro případné znovu aktivování)
- [x] zahashovat heslat aby v databázi nebyla vidět (později)
- [x] lessons change
- [x] dodělat aktualizaci času nové hodiny jak u admina, tak u studenta (zkártka kdy bude další hodina)
- [x] udělat na straně studenta sumarizaci z hodiny (PŘIDAT TO I K RODIČI) (dodělat mazání sumarizace)
- [x] možnost mít jednoho rodiče, který má více dětí a zabrazuje si jejich profily
- [x] možnost studenta omluvit se z hodiny
- [x] zobrazit hodiny u studenta, které proběhly a které ještě nemá označené jako zaplacené
- [x] rodič a student starší 18 let budou mít možnost říct, že danou hodinu zaplatili
- [x] zobrazení omluvenek a plateb
- [x] vkládání a ukládání souborů
- [x] snímky podrobného rozjetí projektu -> github desktop, instalace balíčku a podobně
- [x] destruktivní akce by měli mít dotazovací okno (disablenout studenta, smazání souboru)

**REFACTOR**

- [ ] ve složce public zvážit název složky "images", protože už to není jen pro obrázky, ale pro různé dokumenty
- [ ] ve složce pages je složka api, která je zodpovědná za serverovou komunikaci, kde používám metody GET, POST, PUT, PATCH, DELETE a bylo by potřeba je trefactorovat, protože některé se nevyužívají úplně podle svého popisu
- [ ] obecně sjednotit css, protože se dost často opakují některé definice stylů (styled-components umožňují exportovat vyloženě celý nadefinovaný styl, takže by to mohlo opravdu zkrátit významně kod)
- [ ] v komponentách mám někde holé html tagy a bylo by dobré jim dát strukturu podle styled-components
- [ ] popsat kod a udělat více komentářů
- [ ] některé komponenty jsem nerozložil úpně dobře (myslím tím, že by se dalo rozkouskovat je ještě víc)
- [ ] sémantika HTML tagů
- [ ] vyřešit proč nejdou v NEXTJS dobře udělat formuláře
