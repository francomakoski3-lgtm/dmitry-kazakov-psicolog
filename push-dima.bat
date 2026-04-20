@echo off
setlocal EnableDelayedExpansion
title Dima Therapy -- Deploy
color 07

set "REPO_DIR=C:\Users\franc_tcymweq\Desktop\dmitry-kazakov-psicolog"
set "GIT_EMAIL=francomakoski3@gmail.com"
set "GIT_NAME=francomakoski3-lgtm"

cls

powershell -NoProfile -Command "Write-Host; Write-Host '  +----------------------------------------------+' -ForegroundColor Cyan; Write-Host '  |    DIMA THERAPY ONLINE  --  Deploy Tool      |' -ForegroundColor Cyan; Write-Host '  +----------------------------------------------+' -ForegroundColor Cyan; Write-Host"

:: Verificar repo
if not exist "%REPO_DIR%\.git" (
  powershell -NoProfile -Command "Write-Host '  [X] Repositorio no encontrado.' -ForegroundColor Red"
  goto :esperar
)

cd /d "%REPO_DIR%"

:: Staging
git add -A .
if exist ".claude" git restore --staged .claude >nul 2>&1

:: Ver si hay cambios
git diff --cached --quiet
if not errorlevel 1 (
  powershell -NoProfile -Command "Write-Host '  [!] Sin cambios nuevos. El sitio ya esta al dia.' -ForegroundColor Yellow; Write-Host"
  goto :sync
)

:: Mostrar lista de archivos
powershell -NoProfile -Command "$lines = git diff --cached --name-status; $count = 0; Write-Host '  Archivos a subir:' -ForegroundColor White; Write-Host '  ------------------------------------------------' -ForegroundColor DarkGray; foreach ($line in $lines) { $parts = $line -split [char]9; $s = $parts[0].Trim()[0]; $f = $parts[-1]; $count++; if ($s -eq 'M') { Write-Host '    ~ ' -ForegroundColor Yellow -NoNewline; Write-Host $f -ForegroundColor Gray } elseif ($s -eq 'A') { Write-Host '    + ' -ForegroundColor Green -NoNewline; Write-Host $f -ForegroundColor Gray } elseif ($s -eq 'D') { Write-Host '    - ' -ForegroundColor Red -NoNewline; Write-Host $f -ForegroundColor Gray } else { Write-Host ('    ? ' + $f) -ForegroundColor Gray } }; Write-Host '  ------------------------------------------------' -ForegroundColor DarkGray; Write-Host ('  Total: ' + $count + ' archivo(s)') -ForegroundColor White; Write-Host; Write-Host '  Leyenda:  ~ Modificado   + Nuevo   - Eliminado' -ForegroundColor DarkGray; Write-Host"

:: Confirmar
set /p "CONFIRM=  Subir estos cambios? [S/n]: "
if /i "!CONFIRM!"=="n" (
  powershell -NoProfile -Command "Write-Host; Write-Host '  Cancelado.' -ForegroundColor Yellow; Write-Host"
  goto :esperar
)
echo.

:: Commit
powershell -NoProfile -Command "Write-Host '  [1/2] Creando commit...' -ForegroundColor Cyan"
for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd HH:mm'"`) do set "STAMP=%%i"
if not defined STAMP set "STAMP=manual"
git -c user.email="%GIT_EMAIL%" -c user.name="%GIT_NAME%" commit -m "Deploy: sync web files !STAMP!" >nul 2>&1
if errorlevel 1 goto :git_error
powershell -NoProfile -Command "Write-Host '        OK  Commit creado' -ForegroundColor Green; Write-Host"
timeout /t 1 /nobreak >nul

:sync
:: Push
powershell -NoProfile -Command "Write-Host '  [2/2] Subiendo a GitHub...' -ForegroundColor Cyan"
git pull --rebase origin main >nul 2>&1
git push origin main
if errorlevel 1 goto :git_error
powershell -NoProfile -Command "Write-Host '        OK  Push exitoso' -ForegroundColor Green; Write-Host"
timeout /t 1 /nobreak >nul

powershell -NoProfile -Command "Write-Host '  +----------------------------------------------+' -ForegroundColor Green; Write-Host '  |  SITIO ACTUALIZADO EN GITHUB                 |' -ForegroundColor Green; Write-Host '  |  Hostinger redeploy automatico en ~1 minuto  |' -ForegroundColor Green; Write-Host '  +----------------------------------------------+' -ForegroundColor Green; Write-Host"
goto :esperar

:git_error
powershell -NoProfile -Command "Write-Host; Write-Host '  [X] Error en Git. Lee el mensaje de arriba.' -ForegroundColor Red"

:fail
powershell -NoProfile -Command "Write-Host; Write-Host '  +----------------------------------------------+' -ForegroundColor Red; Write-Host '  |  DEPLOY FALLIDO                              |' -ForegroundColor Red; Write-Host '  +----------------------------------------------+' -ForegroundColor Red; Write-Host"

:esperar
powershell -NoProfile -Command "Write-Host '  Cierra esta ventana con la X cuando quieras.' -ForegroundColor DarkGray; Write-Host"
:loop
timeout /t 3600 /nobreak >nul
goto :loop
