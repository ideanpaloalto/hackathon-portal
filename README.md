Hackathon Portal
================

This project is a web portal for the Ericsson CES Portal Demo.

_Check out the portal running at [ideanpaloalto.github.io/hackathon-portal](http://ideanpaloalto.github.io/hackathon-portal/)_

These companion repositories contain sample applications for the three main platforms:

- Android Application: [github.com/ideanpaloalto/asdp-api-sampler-android](https://github.com/ideanpaloalto/asdp-api-sampler-android)
- iOS Application: [github.com/ideanpaloalto/asdp-api-sampler-ios](https://github.com/ideanpaloalto/asdp-api-sampler-ios)
- Web Application: [github.com/ideanpaloalto/asdp-api-sampler-javascript](https://github.com/ideanpaloalto/asdp-api-sampler-javascript)

### Where the Portal is Hosted

This is designed to be hosted using GitHub Pages. But, it can certainly be hosted locally or elsewhere.

If you would like to host this somewhere else, you will need to change the URL path at two places within the portal code:  
  - src/common/_vars.scss
  - gulpfile.js

### Dev Setup

1. `git clone https://github.com/ideanpaloalto/hackathon-portal.git`
2. `cd hackathon-portal/`
3. `npm install`
4. `gulp`
5. Point your browser to: http://localhost:3000/
6. If you have any issues, be sure to update the _'rootPath'_ paths in the files noted above from `rootPath = '/hackathon-portal'` to: `rootPath = ''`, but be sure to change it back before re-committing any changes.
