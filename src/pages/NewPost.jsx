import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import HeaderTop from "../components/templates/HeaderTop";

const NewPost = () => {
	const [data, setData] = useState();

	return (
		<>
			<HeaderTop isLogin={true} />
			<div className="container mt-5">
				<button className="btn mb-5">انتشار</button>
				<CKEditor
					config={{ language: "fa" }}
					editor={ClassicEditor}
					editor2={ClassicEditor}
					data=""
					onChange={(event, editor) => {
						const data = editor.getData();
						setData(data);
					}}
				/>
			</div>
		</>
	);
};

export default NewPost;
