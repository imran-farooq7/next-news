interface Props {
	params: {
		name: string;
	};
}

const CategoryDetailPage = ({ params: { name } }: Props) => {
	return (
		<div>
			<h1 className="font-bold text-3xl capitalize">{name} News</h1>
		</div>
	);
};

export default CategoryDetailPage;
