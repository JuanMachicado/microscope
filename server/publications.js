

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
Meteor.publish('posts', function(options) {
	check(options, {
		sort: Object,
		limit: Number
	});
	return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
	check(id, String)
	return Posts.find(id);
});

Meteor.publish('comments', function(postId) {
	return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
	return Notifications.find({userId: this.userId, read: false});
});