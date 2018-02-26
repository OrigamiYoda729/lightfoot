@echo off
set /p id="Enter Version: "
git config --global user.email 33796301+OrigamiYoda729@users.noreply.github.com
git config --global user.name OrigamiYoda729
git init
git pull https://github.com/OrigamiYoda729/lightfoot.git master
git add --all
git commit -m "Update: %id%"
git push https://github.com/OrigamiYoda729/lightfoot.git master