# start.ps1 — Start de productie-server (run build.ps1 eerst)
# Gebruik: .\start.ps1

$nextBin = Join-Path $PSScriptRoot "node_modules\next\dist\bin\next"
& node $nextBin start
