/*
@ABOUT_ROUTES:
Ref: ✈️🔗https://expressjs.com/en/5x/api.html#router

-----------------NEW--------------------
@SECTION:Injecting Docs and MIDDLEWARE
@ABOUT: All about Inject MIDDLEWARE
@TITLE:
@LOCATION:🗃️App.js

@OVERVIEW:->
@REQUERE
-🎗️Need Body-parser for handle JSON
-🎗️Need cookie-parser,swagger,morgan

@ABOUT_MORGAN
Ref: ✈️🔗 https://www.npmjs.com/package/morgan
SCROLL ON till Bottom ...above link
😗@NOTE: NEEDs to be come befour route it's convection

@INVITE_&_INSTALL:-> MORGAN,cookieParser,fileUpload,swaggerUi & some REGULAR MIDDLEWARE like json & urlencoded 

-----------------NEW--------------------
@SECTION: BASIC CONFIG & CONTROLLER 
@TITLE: CUSTOM ERROR HANDLERS
@ABOUT: All about Inject MIDDLEWARE
@LOCATION: 🗃️utils/customError.js 
@REF: ✈️🔗https://nodejs.org/api/errors.html#class-error
@OVERVIEW:->
-It an Node Js error Handling it's very POWERFUL
-create error base on class & exports(Production use)
-customize Error A/C to Ref Link 

-----------------NEW--------------------
@SECTION: BASIC CONFIG & CONTROLLER 
@TITLE: THE Big PROMISE 
@ABOUT: All About DB Connetion(Which Problebly take time) 
@LOCATION: 🗃️middleware/bigPromise.js

@OVERVIEW:
-Concern About weather the Connetion Connect or Not to DB 
-use funtional Programming 
-In Order to Clear More Take Refference of LOCATION & visit file 

-----------------NEW--------------------
@SECTION: USER MODEL & SIGNUP 
@TITLE: CREATING A USER MODEL & VALIDATOR
@ABOUT:user schema 
@LOCATION: 🗃️models/user.js
@OVERVIEW:
-🎯Why🤔?? unique:true - mongoose will automatically look in backend weather this email is exits or not in my DB Additional feature that mongoose provide us;
-🎯password: never ever save password confirm field in database no matter which language;
-🎯why🤔?? select:false: it's because it saves or time instead one user.password = undefined;
-🎯photo : - inside one we hold Id itself which will get from cloudinary 2nd one is secure URL 
-🎯default: Date.now() don't mention like that in createdAt because we want to run it when this field is getting executed; instead use default: Date.now,

-----------------NEW--------------------
@SECTION: USER MODEL & SIGNUP 
@TITLE: PASSWORD ENCRYPTION AND MONGOOSE PROTOTYPES & VALIDATING THE PASSWORD 
@ABOUT:user schema 
@LOCATION: 🗃️models/user.js
@OVERVIEW: 

REF: ✈️🔗https://stackoverflow.com/questions/50581825/ismodified-and-pre-save-mongoose-nodejs
REF: ✈️🔗https://mongoosejs.com/docs/api/document.html#Document.prototype.isInit()

@Note: Encrypt password befour Saving
🥊🥊ENCRYPT PASSWORD BEFOUR SAVE  - H.W (On:Testing)

@ABOUT: VALIDATING THE PASSWORD 
@OVERVIEW: 
IN this we'r discussing about methods for VALIDATING the password that were pass by him;
-It just return true & false value weather you login or not !!

-----------------NEW--------------------
@SECTION: USER MODEL & SIGNUP 
@TITLE: CREATING JWT TOKEN 
@LOCATION: 🗃️models/user.js
@OVERVIEW: 
-🎯first Need to go in .env file 
-🎯Need to mention JWT_SECRET & JWT_EXPIRY
-🎯NEED to require 'jsonwebtoken' with Id which easy querry to DB 
-🎯then define methode "getJwtToken" with optionaly Asynchronously but don't use 
-🎯create function into it 
-🎯generate token via 'sign'
-🎯pass id REMEMBER {id:this._id} first id(we'created) & : + this._id(generated via mongoose & we'r accessing);
-🎯By the term it mean: whenever save data in mongodb + automatically generate (._id(field- This is not JSON it's BSON Field)) + Access via only only _id underscore ID O.w NOT 
-🎯OPTIONAlY YOU Can PASS LIKE THAT ALSO : email:this.email 
---------
-🎯Then provide secrete Come from .env 
-🎯Then pass expiry time 

*/
