# rc-cms

CMS App for XML editing

Dependencies:
- Newest node 6

Run app on localhost:3000:
- Set `photsRoot` variable in server\config.json to folder with 'photos' folder.
'min', 'max', and 'preview' folders will be created inside photos folder. if photos doesn't exist, it will be created
- Set `xmlRoot` to target XML files folder.
- Run `npm start`

Application will save its current state to localStorage every minute. Saving files to disk creates backup of current files inside xmlRoot/Archive folder.
On linux and os x it may be necessary to rebuild native sharp module, try `npm install` or if this doesn't do the work use `npm install sharp`.