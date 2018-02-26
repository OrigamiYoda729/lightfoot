@echo off
set /p update="Enter Changes: "
git config --global user.email 33796301+OrigamiYoda729@users.noreply.github.com
git config --global user.name OrigamiYoda729
@echo on
git init
git pull https://github.com/OrigamiYoda729/lightfoot.git master
git add --all
git commit -m "Update: %update%"
git push https://github.com/OrigamiYoda729/lightfoot.git master