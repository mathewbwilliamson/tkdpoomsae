# TKD Poomsae Shuffling
## Build Steps for Netlify
- npm run build
- netlify deploy
    - Use the build folder when it asks
    - Check it over
- If it's good, then run netlify deploy --prod
- Update Google Firebase with the new URL (if needed)
- Done! 


# TODO
- Make CSS styling pretty, expecially for mobile
- Create actual layout that I want: This week's poomsae starting with today's. Gray out previous days and start on Monday. Display them vertically, and jump to today's. If today.day === Tuesday, jump to Tuesday then gray out monday. 

# Overview
The goal of this app is to shuffle all the TKD Poomsaes each week so that I can practice two of them each day, and there are no two that are the same from day-to-day. In order to accomplish this, I have created this app using Google Firebase and Local Storage to save the state, and I have made it into a PWA so that I can use the app when not around the internet. 

# How To Use
- It is hosted at tkd-poomsae.netlify.com
- There is no need to login currently. 

# Engineering Highlights
- Designed for Mobile first
- Persistant data storage using Google Firebase and Local Storage
- Exists as a PWA

# Technology Stack
## Front End
- HTML/CSS/Javascript
- Front end using React
- Hosting with Netlify
- Git/Github for version control

## Back End
- Done with Google Firebase