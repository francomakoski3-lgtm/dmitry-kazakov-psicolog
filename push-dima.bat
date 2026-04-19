@echo off
setlocal EnableDelayedExpansion
title Push Dima Web
color 0A

set "REPO_DIR=C:\Users\franc_tcymweq\Desktop\dmitry-kazakov-psicolog"
set "GIT_EMAIL=francomakoski3@gmail.com"
set "GIT_NAME=francomakoski3-lgtm"

echo.
echo  ================================
echo   Subiendo sitio de Dima...
echo  ================================
echo.

git --version >nul 2>&1
if errorlevel 1 (
  echo  Error: Git no esta instalado o no esta en PATH.
  goto :fail
)

if not exist "%REPO_DIR%\.git" (
  echo  Error: no se encontro un repositorio Git en:
  echo  %REPO_DIR%
  goto :fail
)

cd /d "%REPO_DIR%"
if errorlevel 1 (
  echo  Error: no se pudo abrir la carpeta del proyecto.
  goto :fail
)

echo  Agregando cambios del proyecto...
git add -A .
if errorlevel 1 goto :git_error

if exist ".claude" (
  git restore --staged .claude >nul 2>&1
)

git diff --cached --quiet
if errorlevel 1 (
  for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd HH:mm'"`) do set "STAMP=%%i"
  if not defined STAMP set "STAMP=manual"
  set "COMMIT_MSG=Deploy: sync web files !STAMP!"

  echo  Creando commit...
  git -c user.email="%GIT_EMAIL%" -c user.name="%GIT_NAME%" commit -m "!COMMIT_MSG!"
  if errorlevel 1 goto :git_error
) else (
  echo  No hay cambios nuevos para commitear.
)

echo  Sincronizando con origin/main...
git pull --rebase origin main
if errorlevel 1 goto :git_error

echo  Enviando cambios a GitHub...
git push origin main
if errorlevel 1 goto :git_error

echo.
echo  ================================
echo   Listo! Sitio actualizado.
echo   Hostinger redespliega en ~1 min
echo  ================================
echo.
pause
exit /b 0

:git_error
echo.
echo  Error: Git devolvio un problema durante el push.
goto :fail

:fail
echo.
echo  El deploy no se completo.
echo.
pause
exit /b 1
