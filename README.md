# RepairedPaint
This repository was transferred over from the repository I started in, due to accidentally forgetting to untrack node_modules with .gitignore.
This was the original repository https://github.com/DataPlant/paintappback

and this was the error I got :

....
Enumerating objects: 1020, done.
Counting objects: 100% (1020/1020), done.
Delta compression using up to 12 threads
Compressing objects: 100% (958/958), done.
Writing objects: 100% (1014/1014), 44.59 MiB | 3.70 MiB/s, done.
Total 1014 (delta 133), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (133/133), completed with 2 local objects.
remote: error: Trace: 5bc87b1f4e8c88b21d951c2c64ce8926268430d19689edbc665b686f1c595c0c
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File node_modules/canvas/build/Release/librsvg-2.so.2 is 100.20 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
To https://github.com/DataPlant/paintappback.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://github.com/DataPlant/paintappback.git'
....

tried both soft and hard resets, but the local repository still contained unpushed commits of node_modules
(another lesson learned, adding and committing multiple times to try to fix the problem worsens it and prevents resets from being effective.)
