# BT-master(nextjs)

Rozhodl jsem se, že namísto čísté React aplikace vyzkouším informační systém, který mám zadaný jako bakalářskou praci napsat ve Nextjs frameworku, postaveném na prostředí Node.js, který rozšiřuje funkcionalitu webových aplikací vytvořených v knihovně React o další funkce jako například: vykreslování na straně serveru a generování statických webových stránek.

React a Next.js jsou oba nástroje používané pro tvorbu webových aplikací, nicméně mají několik důležitých rozdílů.

React je knihovna pro tvorbu uživatelských rozhraní, která se používá pro tvorbu interaktivních webových stránek a aplikací. React poskytuje mnoho funkcí, jako je například JSX syntaxe pro psaní komponent, virtual DOM pro efektivní aktualizaci uživatelského rozhraní a mnoho dalších.

Next.js je framework pro tvorbu React aplikací, který poskytuje několik funkcí, které React sám o sobě nemá. Například Next.js poskytuje serverové vykreslování (SSR), statické generování (SSG), automatickou kódovou rozdělení (code splitting) a mnoho dalších funkcí, které usnadňují tvorbu webových aplikací. SSR a SSG jsou zvláště užitečné pro zlepšení výkonu a SEO.

Dalšími rozdíly mezi Reactem a Next.js jsou:

> Konfigurace: Při tvorbě aplikace v Reactu je třeba vytvořit celou konfiguraci aplikace ručně, zatímco Next.js má vestavěné konfigurační soubory, které umožňují snadnější nastavení aplikace.

> Routing: V Reactu musí být routing aplikace řešen pomocí třetích stran knihoven, zatímco Next.js obsahuje vlastní vestavěný router.

> Struktura adresářů: Next.js má vlastní strukturu adresářů, která poskytuje základní strukturu pro tvorbu aplikací, zatímco v Reactu si musíte tuto strukturu vytvořit ručně.

Závěrem lze říci, že Next.js může být výhodnou volbou pro tvorbu webových aplikací, protože poskytuje mnoho užitečných funkcí, které React sám o sobě nemá. Nicméně, pro jednoduché aplikace, kde nejsou potřeba tyto funkce, může být React dostačující.

## dokumentace.txt

Jedná se o textový soubor, ve kterém se snažím při postupu ráce ukládat nějaké poznámky a důležité odkazy, nebo postupy.

## struktura.js

V souboru se nachází role uživatelů s jejich daty, které očekávám, že vytvořím z příchozích dat ze serveru. Rozhodl jsem se totiž nejdřív nasimulovat data, která budu dostávat o jednotlivých uživatelích a na základě nich vytvořit vzhled stránky navržený ve [Figmě](https://www.figma.com/file/EsdxbekJrScMOYiIbjaQNq/Bachelor-Thesis?node-id=0%3A1) a nazávěr si nechat vytváření komunikace ze serverem, databází a klientem. V tuto chvíli (4.5.2023) už bude dokument nejspíše zastaralý oproti struktuře, která je použivaná teď, jelikož slo jen o představu toho, jak uživatele a jejich data budou vypadat. 

## app

V této složce se nachází samotná aplikace. Její dělení uvádím jako obrázek níže.

![struktura](https://user-images.githubusercontent.com/47132583/230054405-19174441-49eb-48ba-b904-db7fc3f62cb9.png)

## rozkliknutí components

![components](https://user-images.githubusercontent.com/47132583/230055009-47c32c75-990d-47c3-861b-0102a66b8c89.png)

## rozkliknutí content of students 

![content of student](https://user-images.githubusercontent.com/47132583/230055370-345d216b-3456-4772-8135-29876e55013f.png)

## rokliknutí models 

![models](https://user-images.githubusercontent.com/47132583/230055622-0fbd248d-5343-4af4-ac75-081d988af6c7.png)

## rozkliknutí pages 

![pages](https://user-images.githubusercontent.com/47132583/230055732-973b180b-309b-4f85-8315-5a9ca5f173d5.png)

## rozklinutí styles & utils

![mix](https://user-images.githubusercontent.com/47132583/230055925-4a51a412-1d1e-4ce4-9d21-1af0c145eaa7.png)






