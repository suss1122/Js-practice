GIT & GITHUB BEGINNER NOTES (VS CODE / TERMINAL)

Git = Version control system (local)
GitHub = Remote repository (cloud)

--------------------------------------------------
1) CLONE REPOSITORY (GitHub → Local)

Command:
git clone <repository-url> .

Note:
"." means clone the code into the current folder.

--------------------------------------------------
2) CHECK FILE STATUS

Command:
git status

Shows:
- modified files
- staged files
- untracked files

--------------------------------------------------
3) STAGE CHANGES

Stage all files:
git add .

Stage specific file:
git add filename.js

Staging means preparing files for commit.

--------------------------------------------------
4) COMMIT CHANGES

Command:
git commit -m "clear meaningful message"

Example:
git commit -m "added iife example"

Commit = snapshot of staged changes.

--------------------------------------------------
5) CHECK CURRENT BRANCH

Command:
git branch

* shows the active branch.

--------------------------------------------------
6) PUSH CHANGES TO GITHUB

Command:
git push origin <branch-name>

Example:
git push origin main

First time push:
git push -u origin main

--------------------------------------------------
7) CREATE NEW BRANCH

Method 1 (two steps):
git branch new-branch-name
git checkout new-branch-name

Method 2 (industry standard):
git checkout -b new-branch-name

Creates and switches to new branch together.

--------------------------------------------------
8) SWITCH BRANCH

Command:
git checkout branch-name

--------------------------------------------------
9) COMMON WORKFLOW

git clone <url>
git status
git add .
git commit -m "message"
git push origin main

--------------------------------------------------
10) COMMON MISTAKES

- Repo name ≠ branch name
- Always push branch name
- Use GitHub token, not password
- git add before git commit

--------------------------------------------------
REMEMBER:
Clone → Modify → Add → Commit → Push