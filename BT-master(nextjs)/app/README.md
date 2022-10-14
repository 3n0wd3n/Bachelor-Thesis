# APP-ROZVRŽENÍ README

Webová aplikace je co se týče složek rozdělena na COMPONENTS, PAGES, PUBLIC, STYLES a soubory, které se nachází mimo tyto složky jako .gitignore, next.config.js, package-lock.json, package.json. Níže budu popisovat jednotlivé složky a soubory a kním jejich význam

## COMPONENTS

Ve složce __*components*__  se nachází další podsložky__*ADMIN*__ , __*LOGIN*__ , __*STUDENT*__  -> tři hlavní role, které se na stránce objevují. Každá z nich má jednoduchý vyznám: je zde hlavní soubor, který se volá někde výš a je poskládaný z koponent, které se nacházejí ve stejné složce. Například ve složce __*COMPONENTS*__  je další složka __*STUDENT*__  a v ní je soubor __*Student.js*__ , ale taky několi dalších souborů s příponou .js. Pro nás je hlavní soubor __*Student.js*__ , který poskládáme z těch ostatních .js souborů. 

![components](https://user-images.githubusercontent.com/47132583/195803207-3ec83d83-5cc0-4364-bad9-9f065084c452.png)


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
