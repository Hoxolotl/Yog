# Yog
Yog-Sothoth knows the gate. Yog-Sothoth is the gate. Yog-Sothoth is the key and guardian of the gate. Past, present, future, all are one in Yog-Sothoth. He knows where the Old Ones broke through of old, and where They shall break through again. He knows where They have trod earth's fields, and where They still tread them, and why no one can behold Them as They tread.

# What is Yog?
"Your own git" IS a tool to see how the code of a git repository was built. It shows over time which files were made by whom. When used it will be possible to see how the code works and which parts of the codebase are being left alone.

# How to use?
Run the getData.sh shell script in the root of your git repository. It will create a log.json. This Log.json contains all the git history.
Run
```
node main.mjs
```
This will create a local express server on port 3000 where you can see a visualisation of the git history.


# WIP
* settings.json is used to configure the visualisation.
* there will be different visualisations available, architecture tbd.
