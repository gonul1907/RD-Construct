# build.ps1 — Maak een productie-build
# Gebruik: .\build.ps1

$nextBin = Join-Path $PSScriptRoot "node_modules\next\dist\bin\next"
& node $nextBin build
