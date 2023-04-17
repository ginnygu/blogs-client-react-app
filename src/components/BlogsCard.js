import axios from "axios";

function BlogsCard(props) {
	const url = "http://localhost:5001";

	const handleDelete = async (id) => {
		props.setShouldRefresh(true);
		const response = await axios.delete(`${url}/blogs/delete-by-id/${id}`);
		props.setShouldRefresh(false);
	};
	console.log("blogs card", props);
	return (
		<div>
			<h3>{props.blog.title}</h3>
			<p>{props.blog.text}</p>
			<p>author: {props.blog.author}</p>
			<button onClick={() => handleDelete(props.blog.id)}>Delete Blog</button>
		</div>
	);
}

export default BlogsCard;
