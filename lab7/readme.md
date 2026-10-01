# Frontend - Backend
1. create project folder(lab7)
2. create frontend, backend folder within project folder.
3. open terminal and split it into two.
4. open fronted into left side terminal.
5. open backend into right side terminal.
6. in backend
    a. initialize backend by `npm init -y`
    b. install nodemon by `npm i nodemon`
    c. open package.json from backend, update `type to module` and script
    d. create app.js
7. in frontend
    a. npm create vite@latest
    b. enter . as project name.
    c. enter framework as react from arrow key.
    d. select variant as javascript from arrow key.
    e. select esLint for linting from arrow key.
    f. select install and start the frontend.

## Components
1. Simple js functions return html directory.
2. It must starts with capital letter.
3. It should be treated as html tag.
4. It must be closed. 

rafce = creates arrow function
rfce = creates normal function

## Object destructure
`const { bname,price,quantity,rating,picUrl }=props.book;`
Does not depend on order, if property is not available then it is initialized with null.
2. Any components includes styles.
    a. External CSS
    create class in index.css and use in component.
    b. Internal css
    create property as object.Then apply with style attribute and pass the object.
    c. In this method, we use two curly bracket  with style attribute. All the css property must be single word(textAlign....not text-align).
