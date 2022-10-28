# Getting Started #


// [ Inside `./public/index.html` ]


1. Update the <title> of your web app.

2. Update Fav Icon and manifest.json.


--------------------------------------------------------------------------------------


// [ Inside `./src/components/Home.js` ]


=> Inside div className = 'hero'

3. Change 'Your Name' and provide a social link in the anchor tag. 

- 3.1. Make sure the whole h1 tag containing your name does not excede 35 chars for better site responsiveness.

4. Update your role inside the '<p>' tag right below the name '<h1>' tag.

5. Update the profile picture.


--------------------------------------------------------------------------------------


=> Inside div className = 'skills'

6. Update your skills with a logo (inside <li className='skill-li-front'> ) and name (inside <li className='skill-li-back'>)

7. You can also change filter headings and their state value for more personalised view.


--------------------------------------------------------------------------------------


=> Inside div className = 'projects'

<+++>     Inherited from `Projects.js` inside the same directory.     <+++>

8. GoTo `Projects.js` and under an object named <itemData> update <img:> links as per your need.

9. You can also add or remove project-items.


--------------------------------------------------------------------------------------


=> Inside div className = 'projects'

10. Just upload your pdf in `./src/images/docs` and update the path of the imported object named <resume> at the top of of `Home.js` file.


--------------------------------------------------------------------------------------


// [ Inside `./src/components/MediaHub.js` ]

11. Update all the social media links of each '<a>' tag inside a '<div className='connection-wraper'>' 

------------------------------
For More Details (or reporting bugs or any other issues), Contact Me.
------------------------------



--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------



# For running or building the web app. #


## Available Scripts

In the project directory, you can run:



### `npm install`

Installs the node_modules folder which is required* to run the development server on your local network.



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
