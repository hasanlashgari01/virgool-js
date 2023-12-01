import { Link } from "react-router-dom";

const PostOverview = () => {
	return (
		<div className="flex gap-2 items-center">
			<img
				src="https://files.virgool.io/upload/users/136448/avatar/8TG6HM.jpeg?height=120&width=120"
				alt=""
				className="w-9 h-9 rounded-full"
			/>
			<div className="grid gap-0.5 text-sm">
				<Link className="font-IRYekanMedium line-clamp-1">اشتباهات برنامه نویسان مبتدی</Link>
				<Link className="text-gray-450 line-clamp-1">صالح رضائی</Link>
			</div>
		</div>
	);
};

export default PostOverview;
