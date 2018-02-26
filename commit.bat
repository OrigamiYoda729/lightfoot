@echo off
set /p update="Enter Changes: "
cls
git config --global user.email 33796301+OrigamiYoda729@users.noreply.github.com
cls
git config --global user.name OrigamiYoda729
cls
git init
cls
git pull https://github.com/OrigamiYoda729/lightfoot.git master
cls
git add --all
cls
git commit -m "Update: %update%"
cls
git push https://github.com/OrigamiYoda729/lightfoot.git master