# APP-ROZVRŽENÍ README

Webová aplikace je co se týče složek rozdělena na COMPONENTS, PAGES, PUBLIC, STYLES a soubory, které se nachází mimo tyto složky jako .gitignore, next.config.js, package-lock.json, package.json. Níže budu popisovat jednotlivé složky a soubory a kním jejich význam

## COMPONENTS

Ve složce __*components*__  se nachází další podsložky __*ADMIN*__ , __*LOGIN*__ , __*STUDENT*__  -> dvě hlavní role, které se na stránce objevují + přihlášení. Každá z nich má jednoduchý vyznám: je zde hlavní soubor, který se volá někde výš a je poskládaný z koponent, které se nacházejí ve stejné složce. Například ve složce __*COMPONENTS*__  je další složka __*STUDENT*__  a v ní je soubor __*Student.js*__ , ale taky několi dalších souborů s příponou .js. Pro nás je hlavní soubor __*Student.js*__ , který poskládáme z těch ostatních .js souborů. 

![image](https://user-images.githubusercontent.com/47132583/230056249-cf667689-bfb5-444b-839e-d448ed31cbd2.png)

![image](https://user-images.githubusercontent.com/47132583/230056396-0b48500f-d420-4959-b2ff-5f027c0f7e36.png)

![image](https://user-images.githubusercontent.com/47132583/230056492-a281cfd2-9238-4fd6-9fe7-9249c57a3496.png)

## MODELS

Ve složce __*models*__  se nachází soubory se schématy databázových kolekcí.

![image](https://user-images.githubusercontent.com/47132583/230056612-602c0ea4-d5a3-44a2-893b-8578a22c3971.png)

## PAGES

Ve složce __*pages*__ najdeme jednak další složku s názvem __*api*__ , ve které běží náš server, ale dále ve složce pages najdeme čtyři důležité soubory a výčtově se jedná o __*_app.js*__, __*_document.js*__, __*dashboard.js*__, __*index.js*__, kde __*_app.js*__ je soubor, který je hlavním v celé struktuře a stará se o změnu rolí. Dallé je tu __*_document.js*__, což je speciáln soubor z NEXTJS frameworku, který nám umožňuje updatovat tagy v HTML. Tenhle soubor má úžasnou vlastnost a to tu, že tah <head /> uvnitř tohoto souboru není stejný jako v ostatních. Používáme tento souboru a speciálně hlavičkovou část pro importování kodu, který je stejný pro všechny stránky. Například když si tady nalinkujeme nějaký font můžeme ho používat pak ve všech souborech. Dalším v pořadí je soubor __*dashboard.js*__, který podle role, která přijde ze serveru vegeneruje buď komponentu s adminem, nebo ze studentem (zkrátka slouží jako rozcestník). Poslední v pořadí je __*index.js*__, který slouží jako nultá stránka, neboli login -> generují se zde komponenty pro přihlášení uživatele. 

![image](https://user-images.githubusercontent.com/47132583/230056696-5700d58a-6d85-421b-a62f-7eab4657fc8e.png)

## PUBLICK

Složka __*publick*__ slouží jako místo, kde jsou soubory týkající se obrázků a pod.

![publick](https://user-images.githubusercontent.com/47132583/195807038-9d50d3e9-63c3-40a5-b6aa-d719b0f048b6.png)

## STYLES

Složka __*styles*__ má jediný účel a to ten, že v ní definujeme stylování, které je pro celý projekt stejné (nastavujeme zde default).

![styles](https://user-images.githubusercontent.com/47132583/195807404-c363f29c-985b-4bbd-88f0-0b26fcd9c997.png)

## UTILS

Složka __*utils*__ obsahuje dva soubory, kde první z nich __*Colors.js*__ slouží pro definování barev použitých v aplikaci a druhý __*dbMongo.js*__ obsahuje funkce, které se používají na serveru pro práci s databází.

![image](https://user-images.githubusercontent.com/47132583/230057117-aaa029b9-4f8f-49d1-82fe-f65eba7af56a.png)

## OSTATNÍ SOUBORY VE SLOŽCE APP

Jedná se o soubory __*.gitignore*__, __*.next.config.js*__, __*package-lock.json*__, __*package.json*__. Soubor __*.gitignore*__ slouží pro blokování určitých věcí, pří komitování na Git. Dále soubor __*.next.config.js*__ nám umožňuje zvolit si, které věci budeme chtít navíc používat v NEXTJS (například já používám styledcomponents, které umožňují vytvářet si vlastní HTML tagy už s nadefinovaným stylování, které se programátor vytvoří). V neposlední řadě tu jsou dva .json soubory, z nichž jeden hlídá verze balíčků (__*package-lock.json*__) a druhý v sobě má seznam těch balíčků (__*package.json*__). 

![files](https://user-images.githubusercontent.com/47132583/195809618-ff0989c8-9f3b-4125-8640-8c3919b88675.png)

## SPOUŠTĚNÍ APLIKACE NA LOCALU

> - Je potřeba nakolonovat si celý projekt k sobě. Já osobně rád používám GitHub desktop [Instalace GitHub Desktop](https://desktop.github.com/). Naklonovat projekt je potřeba celý, takže půjdeme na stránku celého projektu [PROJEKT](https://github.com/3n0wd3n/Bachelor-Thesis) a stískneme CODE, kde vybereme možnost "Clone with GitHub Desktop" ![image](https://user-images.githubusercontent.com/47132583/232567829-c727d965-1e75-43e5-b7e2-242c2b4e8e47.png)
>
> - Budeme potřebova potřebovat prostředí, ve kterém si kod zobrazíme. Já jsem celou bakalářskou práci psal ve Visual Studio Code a odkaz na stažení je zde [VS CODE](https://code.visualstudio.com/download) 
>
> - Teď je potřeba aplikaci otevřít, takže najedeme do GitHub Desktop a vybereme adresář "Batchelor-Thesis" a pravým vybereme "Open in Visual Studio Code" ![image](https://user-images.githubusercontent.com/47132583/232568957-fe49eedf-ac11-460b-b585-acddd0f13a0b.png)
> 
> - Ještě předtím, než budeme pokračovat dál, je potřeba stáhnout ještě jednu věc, a to je Node.js [NodeJS](https://nodejs.org/en/download)
>
> - Teď když máme otevřené VS CODE a stažený NODEJS, tak přejdeme do terminálu, který je ve VS CODU zabudovaný ![image](https://user-images.githubusercontent.com/47132583/232570676-d0aa6c30-3298-47f7-b870-c3d8497e7476.png) a začneme stahovat potřebné balíčky. To jak a co budeme stahovat už se nachází pod tímto úvodním manuálem.

První příkaz, který je třeba udělat je:

    cd BT-master(nextjs)/app

protože budeme instalovat baláčky z __*package.json*__ , které je možné vidět v souboru.
 
Pro spuštění aplikace je nutné mít stažené všechny potřebné baličky které lze najít v souboru __*package.json*__, který se nachází v adresáří __*~/BT-master(nextjs)/app/package.json*__. Je potřeba stahovat tyto balíčky do cesty __*BT-master(nextjs)/app*__

![image](https://user-images.githubusercontent.com/47132583/230058864-d9761c91-ffa6-43bd-abd0-922f62596e33.png)


Stahujeme je pomocí příkazu:

    npm install <název balíčku> 
    (taky je možnost použít --> npm i <název balíčku> <název balíčku> --- <název balíčku> pro stahování více balíčku současně)
    
Potom už jen stačí dostat se na již zmíněnou cestu __*~/BT-master(nextjs)/app/*__, kde zadáme do konzole příkaz 
    
    npm run dev 

a můžeme do webového prohlížeče napsat URL http://localhost:3000, která nám zobrazí naši webovou aplikaci.

**Přihlašovací údaje pro testování**

-Přihlášení do admina-

    username: admin
    passwd: admin

-Přihlášení do usera-

    username: jakhaj
    passwd: kuba

-Přihlášení do rodiče-

    phone: 604929978
    passwd: radka

---
    SECTION BREAK
---

# NEXTJS README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
