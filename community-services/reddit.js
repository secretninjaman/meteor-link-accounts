if(Meteor.isClient){
  Meteor.linkWithReddit = function(options, callback){
    if(!Meteor.userId()){
      throw new Meteor.Error(402, "You must be logged in to link an account.");
    }
    if(!Package["pandawhisperer:accounts-reddit"]){
      throw new Meteor.Error(403, "Required package for discord OAuth is missing. Install vincentp:accounts-discord on server.");
    }
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
    Package["pandawhisperer:accounts-reddit"].RedditOauth.requestCredential(options, credentialRequestCompleteCallback);
  }
}
