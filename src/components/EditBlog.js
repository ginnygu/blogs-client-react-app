import { useState } from "react";

export default function EditBlog() {
	const [titleInput, setTitleInput] = useState("");
	const [textInput, setTextInput] = useState("");
	const [authorInput, setAuthorInput] = useState("");
	const [categoriesInput, setCategoriesInput] = useState("");
	return (
		<div>
			<h2>Edit Blog</h2>
			<label>Title:</label>
			<input
				type="text"
				value={titleInput}
				name="title"
				onChange={(e) => {
					setTitleInput(e.target.value);
				}}
			/>
			<br />
			<label>Text:</label>
			<input
				type="text"
				value={textInput}
				name="text"
				onChange={(e) => {
					setTextInput(e.target.value);
				}}
			/>
			<br />
			<label>Author:</label>
			<input
				type="text"
				value={authorInput}
				name="author"
				onChange={(e) => {
					setAuthorInput(e.target.value);
				}}
			/>
			<br />
			<label>Categories:</label>
			<input
				type="text"
				value={categoriesInput}
				name="categories"
				onChange={(e) => {
					setCategoriesInput(e.target.value);
				}}
			/>
			<br />
			<button type="submit">Submit</button>
		</div>
	);
}
