# Front-End-Capstone
FEC

## Setup
Clone to local machine
```sh
git clone git@github.com:plankton2305/Front-End-Capstone.git
```


## Git Workflow
https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

Checkout and sync main
```
git checkout main
git fetch origin
git reset --hard origin/main
```

Create a new branch from main for the feature
```
git checkout -b new-feature
```

Once work is complete stage/commit on the feature branch
``` sh
git status
git add <files>
git commit
```

Push the changes to the repo
```
git push -u origin new-feature
```

. Create a pull request to merge feature branch to main
From Git create a pull request to merge the branches


### Example Workflow
* git clone git@github.com:plankton2305/Front-End-Capstone.git
* git checkout -b newcomponent
* newcomponent.js << console.log('hello world')
* git add newcomponent.js
* git commit -m "new component created"
* git push -u origin newcomponent
* -- go to Git --
* create new pull request master << newcomponent
* resolve merge conflicts