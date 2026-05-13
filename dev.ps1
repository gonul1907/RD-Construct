# dev.ps1 — Start de Next.js development server
# Gebruik: .\dev.ps1
# Nodig omdat de map '&' bevat die cmd.exe breekt

$nextBin = Join-Path $PSScriptRoot "node_modules\next\dist\bin\next"
& node $nextBin dev --turbopack
