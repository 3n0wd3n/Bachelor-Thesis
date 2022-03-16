# Bachelor-Thesis
Bachelor thesis at University of Palacky

**Vznik nápadu na bakálřskou práci** (spíš pro mě jako záznam)

Od začátku školního roku 2021/2022 se moje přítelkyně vydala cestou brigád na vlastní pěst a to tak, že začala doučovat Angličtinu. Když s tím začala, tak ze začátku používala aplikaci pro rozšíření jejího profilu mezi studenty, kteří hledají doučujícího (pro širší záběr zadala víc možností kontaktu od mobilu přes whatsup až po email). Ze začátku bylo fajn když ji studenti začali psát, ale postupem času bylo neúnosné udržovat s každým konverzaci na jiné platformě a domlouvat s každým individuálně hodiny, nebo řešit peníze skrz jiné sociální sítě. Napadlo mě tedy udělat informační systém, který by ji práci s domluvu a plánováním usnadnil při komunikaci se studenty. V dokumentu teď postupně rozeberu všechny aspekty tohoto informačního systému.

**Rozdělení**

Do informačního systému by se přihlašovalo skrz standartní login. Žádná registrace by nebyla, protože by správce (Bára) každému novému příchozímu dala jeho přihlašovací jméno a heslo (mohl bych generovat). Po zadání přihlašovacích údajů by se rozeznávali tři typy uživatelů. 

1. typ (správce)

> * Mazání studentů
> 
> * Jednotlivým studentům možnost zapisovat/shrnout co bylo tématem minulé hodiny
> 
> * Jednotlivým studentům psát domácí úkoly na další hodinu
> 
> * Přikládat individuálně .PDF studentům do sekce s materiály
>
> * Individuální osnova/plán pro studenta, který lze měnit správcem podle aktuální potřeby studenta po domluvě

2. typ (student starší 18 let/rodič)

> * Uvidí průběžné (nejespíš měsíční) zhodnocení práce studenta (jen v případě když to bude samozřejmě pro rodiče jinak studentovi staršímu 18 let to nemá moc vyznám tam psát, protože si za to zodpovídá sám).
> 
> * Po zádání administrátorem/správcem kolik hodin týdně proběhlo by jednoduchý algoritmus pro výpočet tojčlenky měl vyhodi číslo, kolik to dělá za tu hodinu a posčíta s početem hodin, které proběhly --> závěrem se vždy ukáže v sekci pro administrativní informace počet kolonek (takový blok, který by měl hlavní viditelnou část právě nesplacené číslo a klidně i dole pak informace o tom za co rdič teda platí --> co proběhlo za hodiny) odpovídajících nesplaceným týdnům (je to spíš takových provizorní check-list pro rodiče aby věděli co už poplatili a co jim ještě zbývá, protože se často stává, že Bára, řeší, že si rodiče nepamatují, které týdny už zaplatilia které ne a dohledává se to v mailech).
> 
> * Omluvenky na hodiny (maximálně týden dopředu)
> 
> * Požadavek na přehození hodiny (opět maximálně týden dopředu)
> 
> * Informace o č.ú a Bářín kalendář aby věděli na jaké dny už Bára někoho má a Bárou vyznačené dny, kdy si studenti mohou nahradit, nebo přesunout hodinu <-- tady toto je potřeba brát s rezervou a neřadil bych to do jednoho z bodů bakalářské práce pro případ, že by se mi to nepovedlo implementovat.

3. typ (student mladší 18 let)

> * Uvidí osnovu, která naznačuje cestu jakou studium bude probíhat
>
> * Krátké shrnutí minulé hodiny
> 
> * Domácí úkoly
> 
> * PDF soubory pro tisk na hodiny
>
> * Čas na kterém se domluvili, že hodina bude probíhat 

Pro všechny jsou samozřejmě jiná práva a každý uvidí něco jiného.

*Ještě přemýšlím jestli by nebylo lepší kdyby existovali jen dvě role a to správce, student s tím, že ve studentském režimu by bylo tlačítko, které odkazuje na stránku/sekci, kde jsou administrativní informace a když by student byl mladší 18 let, tak by musel zadat heslo, které zná jen zákonný zástupce, takže bychom předešli tomu aby si tam nastavoval to na co nemá oprávnění. Nápadá mě to z důvodu toho, aby správce nemusel vytvářet účet ještě rodičům + si správce bude spíš pamatovat při vyhledávání studentů, které učí co k němu má napsat a pamatovat si ještě všechny rodiče a jejich účty by možná bylo zbytečné --> Dalo by se to obejit tak, že by správce mohl pokládat dotaz na databází, který rodič je kterého dítěte a potom by měla informaci o tom komu má psát administrativní informace. Další nevýhodou tří rolí je také to, že student, který je starší osmnácti let by měl jak uživatelské jméno a heslo pro studentskou roli, tak i uživatelské jméno a heslo pro rodičovskou/studentskou starší 18ti let.*



