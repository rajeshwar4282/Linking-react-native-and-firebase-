# Linking-react-native-and-firebase-
this repository helps us to understand creating a react-native app and  using firebase authentication,cloud firestore i n the created react-native app
GETTING ERRORS WHILE LINKING REACT WITH FIREBASE NO PROBLEM I WILL GIVE U CLEAR EXPLANATION AND EXECUTABLE CODE FOR YOUR PROJECT.

GETTING STARTED:
1.CREATE A REACT-NATIVE PROJECT USING EPXO(BEACUASE MANY DESKTOPS ARE         NOT MAC HERE  NOT GOOD ENOUGH FOR TESTING AND FOR GOOD NATIVE ELEMENTS USE EXPO)   
 ->You can check the environment setup for expo project  at https://reactnative.dev/docs/environment-setup
   
        expo init projectname
 
  result:
   ->You can see diiferent folders and files in the created folder,they are
   ![](images/Screenshot%20from%202020-06-06%2001-28-17.png)
    2.RUNNING OUR PROJECT:

   ->Enter the created app directory and try npm start
              cd projectname
             npm start
   ->Download expo app in your mobile from app store and scan the QR CODE appeared in cmd

   ![](images/Screenshot%20from%202020-06-06%2001-28-48.png)

3.ADDING FIREBASE TO OUR PROJECT
      
    react-native add firebase
                  or
    expo install firebase
                  or 
     npm install –save firebase
   
 ->create a firebase project and add a web app in that project , copy the configuration file from the               
     console.
 ->Add config folder in root directory of the project and create a file name called Firebase.js
   
   config/Firebase.js
   
   ![](images/Screenshot%20from%202020-06-06%2001-31-04.png)

4.LETS START EDITING OUR APP FOR EMAIL AUTHENTICATION

   ->In the firebase console in authentication section ,in sign-in methods add email .
     

![](images/Screenshot%20from%202020-06-06%2001-30-48.png)













 ->Adding react-naviagtion for our project (it helps us to navigate between screens in our app)
            
              npm install –save react-navigation
                                     or
               expo install react-navigation
      ....Create a folder in root directory named navigation and add create file SwitchNavigator.js 
      
               navigation/Switchnavigation.js

 ->Adding the screens folder in root directory and create 4 files as shown below
            
                   screens/Signup.js
                 screens/Login.js
                 screens/Profile.js 
                   screens/Details.js
                     
       
5.RUNNING OUR  EMAIL-AUTHENTICATION PROJECT IN OUR MOBILE.
      


  save the files -> npm start -> open expo client ->scan QR code ->try our  
                
  amazing email-authentication app

lets see the app and details that entered by our user are updated in firebase or not

      screens/Signup.js
   
<img src="images/Screenshot_2020-06-06-00-26-04-21_f73b71075b1de7323614b647fe394240.png" width="230" height="400">

      screens/Details.js
<img src="images/Screenshot_2020-06-06-00-25-18-72_f73b71075b1de7323614b647fe394240.png" width="230" height="400">

         screens/Login.js
<img src="images/Screenshot_2020-06-06-00-26-22-71_f73b71075b1de7323614b647fe394240.png" width="230" height="400">

     screens/Profile.js
<img src="images/Screenshot_2020-06-06-00-26-29-08_f73b71075b1de7323614b647fe394240.png" width="230" height="400">

DATA SAVED TO FIREBASE:
  
  AUTHENTICATION:
![](images/Screenshot%20from%202020-06-06%2001-30-44.png)

  STORAGE:
![](images/Screenshot%20from%202020-06-06%2001-30-38.png)




























































