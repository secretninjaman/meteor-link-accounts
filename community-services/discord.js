if(Meteor.isClient){
  Meteor.linkWithDiscord = function(options, callback){
    if(!Meteor.userId()){
      throw new Meteor.Error(402, "You must be logged in to link an account.");
    }
    if(!Package["vincentp:accounts-discord"]){
      throw new Meteor.Error(403, "Required package for discord OAuth is missing. Install vincentp:accounts-discord on server.");
    }
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
    Package['vincentp:accounts-discord'].Discord.requestCredential(options, credentialRequestCompleteCallback);
  }
}
