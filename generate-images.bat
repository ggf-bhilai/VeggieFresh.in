@echo off
echo Generating images.js ...

(
echo const images = [
for %%f in (products\*.png products\*.jpg products\*.jpeg) do echo "%%~nxf",
echo ];
) > images.js

echo.
echo images.js generated successfully!
pause
