## `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Where I left off and how to pick up where I left off.
Navigate to `./src/components/Form.js` and `./src/components/formcomponents/Quotations.js`

### Explanation for Form.js
Within Form.js, there is this.state.count which holds the state for each component to render.
Everytime the form is clicked and updated, this.state stores the information of user input from each
component. The way that Form.js renders each subcomponent can be though of as a tree, this.state.count representing each level of the tree.
The picture below illustrates roughly how it can be visualized.
![alt text](https://media.geeksforgeeks.org/wp-content/uploads/Tree_level.png)

Every subcomponent is linked like a tree. For example "Malaysian" and "Non-Malaysian" are two sibling nodes.
Whenever the user submits information or hits the proceed button, this.state.count is incremented, moving the current node down the tree.

### Explanation for Quotations.js
You will need to add the API key for authorization to AXA's API. Under `async loginToAPI()` there is a `headers` object which requires the key to be in the format of `'Authorization': 'Basic XXXXXXXXXXXXXXX'` where the API key is Base64 encoded. I tried implementing my own small contained tree like in `Form.js` within Quotations.js, this section will require debugging.

### What's left to be done?
1. The height and weight calculation breakpoint for ineligibility for the insurance plan needs to be added, you will have to reach out to AXA to find out.
2. The final part of the form where user inputs all his sensitive information such as IC number etc for making an order is still unfinished and as well as the underlying logic of sending the details as an order in the form of a POST request.
3. UI/UX still can be improved further.
