@echo off
rem This script copies all CSS files from src to dist
rem This is to avoid using complex build setups that makes things complicated for no reason
xcopy /s /y "src\*.css" "dist\"
