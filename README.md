## FLOW - A STATIC TYPE CHECKER FOR JAVASCRIPT
- https://flow.org/en/
- mkdir flowapp
- npm install --save-dev babel-cli babel-preset-flow
- Update package.json for compilation (<code>babel src/ -d dist/</code>) and publish (<code>npm run build</code>)
- npm install --save-dev flow-bin
- npm install -g flow-bin
- flow init
- flow
- flow status
- Add <code>// @flow</code> in the ES6 JS file
- Check compilation errors using command "flow status" 
- ES5 javascript will be ready to use in "dist" folder mapped in package.json

