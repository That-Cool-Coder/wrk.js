## The cdn folder of wrk.js

[Back to README](/README.md)  
[Back to editor documentation contents](MAIN.md)

#### Brief Description
The ```/cdn``` folder is a folder for a repl-based cdn. It holds subfolders which correspond to the github wrk.js releases. Each subfolder should be names along the lines of ```0.1.0```. Don't put a 'v' at the start of the folder name. There should also be a subfolder called `latest` which contains the most recent release of wrk.js. Each subfolder should hold a file called ```wrk.js```, which is the main compiled file. It should be identical to the version on the github release. There should also be a file called ```wrk.min.js```, which is a minified version (see [minifying wrk.js](minifying.md)) of ```wrk.js```, also identical to the github release.