import { Slide } from '@/components/Carousel';

const TemplateLoading = async () => {
	return (
		<Slide className="bg-grey-500">
			<div className="flex min-h-full min-w-full flex-col items-center gap-y-4">
				<h1 className="text-4xl">Loading...</h1>
			</div>
		</Slide>
	);
};

export default TemplateLoading;
