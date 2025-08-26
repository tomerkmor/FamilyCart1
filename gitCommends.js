// Daily workflow
/*

The height of the description is high, hence making the error message blend inside it! - FIX

*/

// Pull the latest Project
git pull
git rebase --abort
git reset --hard origin/main


// Update the project from WORK
git add .
git commit -m "Updated work changes"
git push


// Update the project from HOME
git add .
git commit -m "Updated home changes"
git push 

