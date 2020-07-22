# 30days - CSE 115 Project 

30days is an Android app for individuals want to learn new skills, but have a hard time keeping up with their goals over time. We saw an opportunity to help users build better habits sustainably, with 30 days of fun tasks based on a set goal. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Install Firebase, React Native, 
```

### Installing

Installation Guide for 30day Application for Android

For MacOS installation
1. First you must install the react native framework using this install guide: 
https://reactnative.dev/docs/environment-setup#:~:text=and%20Android%20Studio.-,Installing%20dependencies,React%20Native%20app%20for%20Android.

2. Then you must setup your react native firebase connection from here: https://console.firebase.google.com/u/0/

3. Next you will call 

```
yarn add @react-native-firebase/app
```

4. On the Firebase console, add a new Android application and enter your projects details. The "Android package name" must match your local projects package name which can be found inside of the manifest tag within the /android/app/src/main/AndroidManifest.xml file within your project.

5. Download the google-services.json file and place it inside of your project at the following location: /android/app/google-services.json.

6. To allow Firebase on Android to use the credentials, the google-services plugin must be enabled on the project. This requires modification to two files in the Android directory.

First, add the google-services plugin as a dependency inside of your /android/build.gradle file:

```
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.2.0'
    // Add me --- /\
  }
}
```
Lastly, execute the plugin by adding the following to your /android/app/build.gradle file:

```
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```

7. Since this program contains many dependencies, you will also need to enable multidexing. 

Do that by using this site: https://rnfirebase.io/enabling-multidex

8. Now it will be necessary to install the dependencies used for style and functional components using npm or yarn as follows:
```
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```





## Built With

* [ReactNative](https://reactnative.dev/) - The Javascript framework used
* [Firebase](https://firebase.google.com/) - Database 

## Authors

* **30 Day Challenge Repo Product Owner: Samantha Teo 
* **Developer: Tanner Muirhead (Scrum Master) 
* **Developer: Junyang Li 
* **Developer: Mianzhi Zhu 
* **Developer: Zijun Lin
