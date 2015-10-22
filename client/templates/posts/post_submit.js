Meteor.call('postInsert', post, function(error, result) {
  if (error) {
    // display the error to the user
    Errors.throw(error.reason);
