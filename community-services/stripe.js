if (Meteor.isClient) {
  Meteor.linkWithStripe = function (options, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(402, 'Please login to an existing account before link.');
    }
    if (!Package['secretninjaman:meteor-accounts-stripe-connect'] ) {
      throw new Meteor.Error(403, 'Please include secretninjaman:meteor-accounts-stripe-connect')
    }

    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
      Package['secretninjaman:meteor-accounts-stripe-connect'].StripeOAuth.requestCredential(options, credentialRequestCompleteCallback);
  };
}
