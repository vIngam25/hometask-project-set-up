# Hometask: #project setup #unit tests #integration tests

```text
With this task you will go through the process of a project creation, setting up the basic structure for writing both code and tests.
```

#### Step 1: GitHub repository

Go to your personal GitHub accocunt and create a new repository. 
By opening the corresponding page 'github.com/new' you will need to specify the following parameters in order to create a project:

```text
- Repository name
- Description (optional)
- Make a 'Public' repository
- Add a README file - yes
```

When all the parameters are filled in, hit the button 'Create repository'. Repository should be created.
After completing all the steps mentioned above, you need to clone the newly created repository to our local machine. 

#### Step 2: Make a project structure

1. Open terminal and navigate to the project root
2. Initialize the project with the following command 'yarn init'. 

```json
{
  "name": "hometask-project-set-up",
  "version": "1.0.0",
  "description": "this is my first project",
  "main": "index.js",
  "repository": "https://github.com/vIngam25/hometask-project-set-up",
  "author": "Inga Muitiniece",
  "license": "MIT",
  "private": true
}
```

3. Check that the 'package.json' has been created and added to the repository
4. Add the following files and folders to your project
- 'README.md' file
- '.gitignore' file
- 'js' folder 
- 'tests' folder 

So far the project structure should look like this:

```text
project_name
    - js (folder)
    - tests (folder)
    - .gitignore (file)
    - package.json (file)
```

#### Step 3: Project confguration

Since the project will contain javascript functions and the tests as well, it is needed to add the testing library, that we have discovered so far "JEST".

1. Let's add JEST as development dependency with the command:
- Open https://jestjs.io/docs/getting-started
- Copy the command 'yarn add --dev jest'
- Execute the command from the repository root
2. Check the 'package.json' file if the dev dependency was added

```json
  "devDependencies": {
    "jest": "^29.2.2"
  }
```
3. 'package.json' file should be updated with the the command, which will trigger test execution

```json
  "scripts": {
    "test": "jest"
  }
```

4. The following text lines should be added to the '.gitignore' file.

**A gitignore file specifies intentionally untracked files that Git should ignore.**

During development inside the project can appear files, that shouldn't be tracked by git, because they are generated automatically by different reasons e.g. code editor, node, frameworks, etc. Thet are not affecting the code, but they are updating constantly, which forces you manually skip them during commit, so it can be easily skipped by adding them to .gitigore.

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependency directories
node_modules/

#IntelliJ
.idea
```

Add above mentioned text part into the .gitignore file

#### Step 4: Add JavaScript functions

- Add '.js' file inside the 'js' folder. Name it 'rectangle.js'
- Add the following functions: 

```javascript
function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function getRectangleArea(length, width) {
    return length * width;
}

function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
}
module.exports = {getRectanglePerimeter,getRectangleArea,getRectangleInfo}
```
#### Step: 5 Create tests file 

- Create folder named tests
- Create inside folder 'tests' a tests file 'rectangle.tests.js' with the functions provided in the 'rectangle.js' file
- Content of rectangle.tests.js file see below

```javascript
const  {getRectanglePerimeter,getRectangleArea,getRectangleInfo} = require('../js/rectangle');

test('check perimeter: 2*(3+4)=14', () => {
    expect(getRectanglePerimeter(3, 4)).toBe(14);
  });

test('check area: 4*2=8', () => {
    expect(getRectangleArea(4, 2)).toBe(8);
  });

  test ('check rectangle info', ()=> {
    const console_text = jest.spyOn(console, "log").mockImplementation(() => {});
   getRectangleInfo(1,5);
   expect (console_text).toBeCalledWith("The perimeter of a rectangle is 12 and the area is 5")
});
```
#### Step: 6 Execute tests 
To execute tests navigate to project root folder and run `yarn test` command 
Below is the result of tests
```text
~/git/hometask-project-set-up main* ⇡                                                                                                                        22:44:24
❯ yarn test
yarn run v1.22.19
$ jest
 PASS  tests/rectangle.test.js
  ✓ check perimeter: 2*(3+4)=14 (1 ms)
  ✓ check area: 4*2=8
  ✓ check rectangle info (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.18 s, estimated 1 s
Ran all test suites.
✨  Done in 0.81s.
```


