# CGL — Change & Growth Leadership

Dit repository bevat de volledige, zelfstandig onderhoudbare broncode van de website van **CGL – Change & Growth Leadership**.

CGL ondersteunt organisaties en leiders bij verandering, groei en leiderschap. De website is een statische React/Vite-website zonder database of serverproces. De lokale map is de leidende bronversie; de productiebuild wordt gegenereerd naar `public-site`.

## Installatie

1. Installeer Node.js 22 of hoger.
2. Clone of open dit repository lokaal.
3. Installeer de dependencies:

```bash
npm install
```

## Website lokaal starten

Start de ontwikkelserver met:

```bash
npm run dev
```

Vite toont daarna de lokale URL waarop de website bekeken kan worden.

## Productieversie bouwen

Maak de productiebuild met:

```bash
npm run build
```

De uploadklare productieversie wordt aangemaakt in de map:

```text
public-site
```

## Publiceren bij Combell

Upload de **inhoud** van `public-site` naar de webroot van Combell.

Belangrijk:

- `public-site/index.html` moet als `index.html` rechtstreeks in de webroot staan.
- De map `public-site/assets` moet als `assets` rechtstreeks in de webroot staan.
- Ook andere bestanden uit `public-site`, zoals `robots.txt`, `sitemap.xml`, `og-v2.png` en `fonts`, moeten mee naar de webroot.
- Upload niet de ontwikkelmap `src`, `node_modules`, `.env`-bestanden of lokale configuratiebestanden naar de publieke webroot.

GitHub is het bronarchief. Combell serveert uitsluitend de gegenereerde inhoud van `public-site`.
