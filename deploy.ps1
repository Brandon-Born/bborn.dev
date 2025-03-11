# PowerShell script for deploying bborn.dev

Write-Host "Starting production deployment process for bborn.dev..." -ForegroundColor Yellow

# Check if Angular CLI is installed
try {
    ng --version | Out-Null
} catch {
    Write-Host "Error: Angular CLI is not installed." -ForegroundColor Red
    Write-Host "Please install it globally with: npm install -g @angular/cli"
    exit 1
}

# Step 1: Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm ci
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "Dependencies installed successfully." -ForegroundColor Green

# Step 2: Build for production
Write-Host "Building application for production..." -ForegroundColor Yellow
ng build --configuration production --aot --optimization --output-hashing=all
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "Build completed successfully." -ForegroundColor Green

# Step 3: Create a distribution package
Write-Host "Creating distribution package..." -ForegroundColor Yellow
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$deployName = "bborn-dev-$timestamp.zip"

# Check if Compress-Archive is available (PowerShell 5.0+)
if (Get-Command Compress-Archive -ErrorAction SilentlyContinue) {
    Compress-Archive -Path .\dist\bborn-dev\* -DestinationPath $deployName
} else {
    # Fallback to using .NET directly
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::CreateFromDirectory("$PWD\dist\bborn-dev", "$PWD\$deployName")
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to create distribution package" -ForegroundColor Red
    exit 1
}
Write-Host "Distribution package created: $deployName" -ForegroundColor Green

# Completion message
Write-Host "=====================================" -ForegroundColor Green
Write-Host "Deployment package prepared successfully!" -ForegroundColor Green
Write-Host "You can deploy the following files:" -ForegroundColor Green
Write-Host "1. Full build: dist\bborn-dev\browser\" -ForegroundColor Yellow
Write-Host "2. Packaged version: $deployName" -ForegroundColor Yellow
Write-Host "=====================================" -ForegroundColor Green
Write-Host "Remember to update your AI disclaimer before deploying." 