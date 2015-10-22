Posts.update(currentPostId, {$set: postProperties}, function(error) {
  if (error) {
    // display the error to the user
    Errors.throw(error.reason);
