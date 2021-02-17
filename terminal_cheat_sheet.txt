# Terminal Cheat Sheet

pwd         # print working directory
ls          # list files in directory
cd          # change directory
~           # home directory
..          # up one directory
-           # previous working directory
help        # get help
-h          # get help
--help      # get help
man         # manual
cat         # output the contents of a file
mkdir       # create new directory
open        # open a file with the associated program, a directory with Finder, or a URL with the default web browser
ps          # list all running processes
kill        # terminate existing process
rmd         # permanently delete file
rmdir       # remove directory





## Working with Git

### Quick Start
git clone <url> 					# Clone directory
git checkout -b <new-branch> 		# Create new local branch
git push -u origin <new-branch> 	# Sync local branch with remote
git checkout <branch> 				# Checkout branch
git push origin <branch> 			# Push branch to remote

git branch -d <branchname>   	# deletes local branch
git push origin :<branchname>	# deletes remote branch

git subtree push --prefix docs origin gh-pages  # push docs as subtree to gh-pages



### Clone Directory
git clone <url>



### Create Project
cd project/
git init                    # initializes the repository
git add .                   # add those 'unknown' files
git commit                  # commit all changes, edit changelog entry
git rm --cached <file>...   # ridiculously complicated command to undo, in case you forgot .gitignore



### Branching and Merging
git branch                          # show list of all branches (* is active)
git checkout -b linux-work          # create a new branch named "linux-work"
<make changes>
git commit -a
git checkout master                 # go back to master branch
git merge linux-work                # merge changesets from linux-work (Git >= 1.5)
git pull . linux-work               # merge changesets from linux-work (all Git versions)
git branch -m <oldname> <newname>   # rename branch
git branch -m <newname>             # rename current branch



### Delete Project
git branch -d <branchname>   	# deletes local branch
git push origin :<branchname>	# deletes remote branch
git remote prune <branchname>	# update local/remote sync



### Merging Upstream

git remote -v 									# Get list of remote branches
git remote add upstream <upstream github url>	# Add original as upstream
git remote -v 									# Check upstream

git fetch upstream 								# Get original repo
git checkout development						# Switch to main branch in local fork
git merge upstream/development					# Merge original with fork

git diff --name-only | uniq | xargs subl		# Fix conflicts in Sublime Text



### Importing Patches
git apply < ../p/foo.patch
git commit -a



### Exporting Patches
<make changes>
git commit -a -m "commit message"
git format-patch HEAD^  # creates 0001-commit-message.txt
                        # (HEAD^ means every patch since one revision before the
                        # tip of the branch, also known as HEAD)




### Inspecting Revisions

# inspect history visually
gitk    # this opens a Tk window, and shows you how the revisions are connected

# inspect history
git log     # this pipes a log of the current branch into your PAGER
git log -p  # ditto, but append a patch after each commit message

# inspect a specific commit
git show HEAD   # show commit info, diffstat and patch
                # of the tip of the current branch



### Referring to Revisions

# by name
git log v1.0.0  # show history leading up to tag "v1.0.0"
git log master  # show history of branch "master"

# relative to a name
git show master^    # show parent to last revision of master
git show master~2   # show grand parent to tip of master
git show master~3   # show great grand parent to tip of master (you get the idea)

# by output of "git describe"
git show v1.4.4-g730996f    # you get this string by calling "git describe"

# by hash (internally, all objects are identified by a hash)
git show f665776185ad074b236c00751d666da7d1977dbe
git show f665776    # a unique prefix is sufficient

# tag a revision
git tag v1.0.0                      # make current HEAD known as "v1.0.0"
git tag interesting v1.4.4-g730996f # tag a specific revision (not HEAD)



### Comparing Revisions
# diff between two branches
git diff origin..master             # pipes a diff into PAGER
git diff origin..master > my.patch  # pipes a diff into my.patch

# get diffstat of uncommitted work
git diff --stat HEAD




## Sublime as default text editor
cd ~
mkdir bin
ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl
git config --global core.editor "subl -n -w"

### If that's not working
sudo rm -rf /usr/local/bin/subl
sudo ln -s /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl /usr/local/bin
