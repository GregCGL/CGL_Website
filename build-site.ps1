$ErrorActionPreference = "Stop"
$npm = (Get-Command npm.cmd).Source
& $npm run build
if ($LASTEXITCODE -ne 0) {
  throw "De website kon niet worden gebouwd."
}
Write-Host "Klaar: upload de inhoud van public-site naar de webroot van Combell of deploy de gh-pages branch."
