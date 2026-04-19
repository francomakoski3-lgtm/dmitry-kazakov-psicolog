@echo off
title Push Dima Web
color 0A
echo.
echo  ================================
echo   Subiendo sitio de Dima...
echo  ================================
echo.

cd /d "C:\Users\franc_tcymweq\Desktop\dmitry-kazakov-psicolog"

git add -A -- ":!.claude" ":!.git"

git -c user.email="francomakoski3@gmail.com" -c user.name="francomakoski3-lgtm" commit -m "Deploy: sync latest web files" --allow-empty

git push origin main --force

echo.
echo  ================================
echo   Listo! Sitio actualizado.
echo   Hostinger redespliega en ~1 min
echo  ================================
echo.
pause
