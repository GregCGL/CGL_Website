# GitHub en Combell

> Let op: de bestandsnaam is historisch. De actuele hostinginstructies hieronder zijn voor **Combell**.

## GitHub-repository

De broncode wordt bewaard in de bestaande repository:

`https://github.com/GregCGL/CGL_Website`

Gebruik de branch `main` als hoofdbranch. Maak geen nieuwe repository aan voor deze website.

## Nieuwe websiteversie bouwen

1. Open een terminal of PowerShell in deze map.
2. Installeer dependencies wanneer nodig:

```bash
npm install
```

3. Bouw de productieversie:

```bash
npm run build
```

De volledige uploadklare website verschijnt in `public-site`.

## Publiceren via Combell

Upload de **inhoud** van `public-site` naar de webroot van het domein bij Combell.

Controleer na upload minimaal:

- `index.html` staat rechtstreeks in de webroot;
- `assets` staat rechtstreeks in de webroot;
- `fonts` staat rechtstreeks in de webroot;
- `robots.txt`, `sitemap.xml` en `og-v2.png` staan ook in de webroot.

Upload niet de ontwikkelmap `src`, `node_modules`, `.env`-bestanden of lokale cache-/logbestanden naar de publieke webroot.
