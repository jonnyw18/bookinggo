Instructions:

- To start the application run 'npm start' in the terminal.
- To run tests run 'npm run test' in the terminal.
- To manually fire the scss build compiler run 'npm run build-css'.
- To eject from the create-react-app configuration run 'npm eject'.

Tech stack:

1) Container/Presentational ( File structure )
    - Presentational components job is to render purely props/JSX.
    - Container components job is to hold all of the logic for the component and in turn hand down any data to the child component (presentational component) in the form of props.

2) Ui ( www.rentalcars.com )
    - Copied styling from the rental cars website.

3) Axios ( HTTP client )
    - Promised based HTTP client used to bring in external data to the application, in this case it is use to bring in the results from the FTSAutocomplete endpoint.

4) SCSS ( Style )
    - All styling has been achieved by using the SCSS syntax, created a watcher script to auto compile any changes made to any file with the extension of .scss.

5) Jest/Enyzme ( Testing )
    - Basic testing achieved using the Enzyme API.
    - Config file created 'setupTests' which is required to add 'enzyme-adapter-react-16' (npm package) to the Jest configuration, without this Enzyme will not work!
    - Created global variables inside setupTests file, removes the need to import boilerplate into each test file.

6) Redux ( Code commented out, ran out of time )
    - Created the store.
    - Created file structure (actions, reducers)
    - Added Provider to top level component
    - Initialised Store with Provider
    - Created functions that map props to state onto the container component (InputContainer)

7) CircleCi ( CD/CI )
    - Created CircleCi folder.
    - Created yml file.
    - Used boilerplate config.
    - Protected master branch.
    - Build will only complete if all tests pass.

8) Version control ( Github )
    - Created a repository on Github.