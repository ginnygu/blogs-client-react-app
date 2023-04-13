function BlogsCard(props) {
	console.log("blogs card", props);
	return (
		<div>
			<h3>{props.blog.title}</h3>
			<p>{props.blog.text}</p>
			<p>author: {props.blog.author}</p>
		</div>
	);
}

export default BlogsCard;
