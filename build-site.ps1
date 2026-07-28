$ErrorActionPreference = "Stop"
$node = (Get-Command node.exe).Source
& $node ".\node_modules\vite\bin\vite.js" build
if ($LASTEXITCODE -ne 0) {
  throw "De website kon niet worden gebouwd."
}
Write-Host "Klaar: upload de inhoud van public-site naar de webroot van Combell."
