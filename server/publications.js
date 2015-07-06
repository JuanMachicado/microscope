

/*
// on the server
Meteor.publish('posts', function() {
	return Posts.find();
});

// on the server
Meteor.publish('allPosts', function() {
	return Posts.find();
});

Meteor.publish('somePosts', function(author) {
	return Posts.find({author: 'Miguel Machicado'});
});

*/
Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('comments', function() {
	return Comments.find();
});