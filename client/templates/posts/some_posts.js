Template.somePosts.helpers({
	posts: function() {
		return Posts.find();
	}
});