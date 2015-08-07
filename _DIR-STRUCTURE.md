client
 │   
 ├── public                     - publicly served files
 │    ├── index.html              - main html file
 │    └── dist                    - served dependencies
 │         ├── lib.min.js           - uglified concat-ed .js library file  
 │         ├── src.min.js           - uglified concat-ed .js app file
 │         └── styles.min.js        - minified .css file        
 │                                
 ├── styles                     - non-minified style files
 │    └── styles.css              - main css file (not bootstrap)
 │          
 ├── lib
 │    └── bower files                
 │
 ├── assets
 │    ├── image1.png                 
 │    └── image2.png
 │
 └── views
      ├── signin
      │   ├── signin.js                 
      │   └── signin.html
      │
      ├── signup
      │   ├── signup.js                 
      │   └── signup.html  
      │
      ├── main
      │   ├── main.js                 
      │   └── main.html 
      │
      └── send
          ├── send.js                 
          └── send.html      