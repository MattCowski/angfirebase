'use strict';

  // version of this seed app is compatible with angularFire 0.6
  // see tags for other versions: https://github.com/firebase/angularFire-seed/tags
angFbKtsApp.constant('angularFireVersion', '0.6')

  // where to redirect users if they need to authenticate (see module.routeSecurity)
  .constant('loginRedirectPath', '/login')

  // which login service we're using
  .constant('loginProviders', 'facebook,twitter,password')

  // your Firebase URL goes here
  .constant('FBURL', 'https://kts032014.firebaseio.com');