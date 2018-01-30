# ExpenseTracker 

# Used AS MEAN / Angular4 Starter template

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:1978/`. The app will automatically reload if you change any of the source files.

To run the code in local environment please change the http url in below file as:-
1)auth.services.ts
2)UserService.ts
3)ExpenseService.ts

Example:-

                       //CHANGE IN DEVELOPMENT MODE TO LOCALHOST!!!!
        // return this.http.post('http://localhost:1978/api/login', JSON.stringify(oUser), options)
        to
               return this.http.post('/api/login', JSON.stringify(oUser), options)


## database server
set the parameters for DATABASEURL.
create mongo database in any website like mlab.
Note down the user,db link and password of db.
update config folder->config.js file with DB url from mlabs or local mongod refernce .

## Note:-
1)The angular application is in dist in parent directory folder.So any changes to angular application,the code should be build inside angular folder which will be "dist" folder.The contents then should be then copied to "dist" folder of parent directory.And then deployed to server.


You can view the Blog here live:-<a href="https://intelligent-fromage-53814.herokuapp.com/login">View Live</a>
username:demo
password:Password@123

                      
![alt tag](https://user-images.githubusercontent.com/25265882/28238217-919278cc-696c-11e7-94d7-1634b7d24d8a.png "Home Page")
![alt tag](https://user-images.githubusercontent.com/25265882/28238234-ce2a041c-696c-11e7-9a89-efc56c30012f.png "Dashboard")

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.




