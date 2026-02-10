# Fix Dev Server - Windows PowerShell Script
# Run this if dev server is hanging

Write-Host "🧹 Cleaning everything..." -ForegroundColor Yellow

# Kill any Node processes
Write-Host "Killing Node processes..." -ForegroundColor Cyan
Stop-Process -Name node -Force -ErrorAction SilentlyContinue

# Remove cache directories
Write-Host "Removing cache directories..." -ForegroundColor Cyan
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".turbo" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "✅ Cleaned! Now run: npm run dev:webpack" -ForegroundColor Green
