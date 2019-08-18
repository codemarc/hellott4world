# hello-t4-world
A repo to hold tt4 PoC test code

# steps to package

1. Generate code from template
    > I have my vscode rigged to run TextTransform.exe  
    > on my mac I use mono to run it in vscode on save

2. Commit the changes
    > git commit -m "added some actual generated enum style code"

3. Update the package version with npm
    > npm version 0.0.3

4. Push the changes
    > git push

5. [Publish and check](https://www.npmjs.com/package/hello-t4-world)
    > npm publish  
    > npm view hello-t4-world
