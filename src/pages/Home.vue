<template>
	<Hero
		:title="'Welcome to ' + PROJECT_NAME + ' ! '"
		:subtitle="BUSINESS_NAME"
		buttonText="Explore Now"
		buttonHref="Contact"
		imageUrl="./src/assets/imgs/hero-image.png"
	/>
	<!-- <div class="container section-padding"> -->
	<ImageWithText
		imageUrl="./src/assets/imgs/SmartBase.png"
		title="SmartBase"
		text="A sleek, wireless charging pad that adapts to power any device placed on it. Simple and efficient charging."
		imageClass="col-md-6"
		textClass="col-md-6"
	/>

	<div class="row mt-5 gap-4">
		<div class="" v-for="n in 3" :key="n">
			<Card
				:title="'Card Title ' + n"
				text="Quick example text."
				imgSrc="./src/assets/imgs/SmartBase.png"
				imgAlt="Card Image"
				cardMargin="m-4"
				buttonText="Read More"
			/>
		</div>
		<!-- </div> -->
		<FeatureList
			:features="[
				{
					title: 'Feature 1',
					description: 'Description for Feature 1',
					icon: 'bi-1-square',
				},
				{
					title: 'Feature 2',
					description: 'Description for Feature 2',
					icon: 'bi-2-square',
				},
				{
					title: 'Feature 3',
					description: 'Description for Feature 3',
					icon: 'bi-3-square',
				},
			]"
		/>
		<Gallery
			:images="['https://placehold.co/300x400', 'https://placehold.co/300x400']"
		/>

		<Testimonial
			quote="This is a sample testimonial quote."
			author="John Doe"
			image="./src/assets/imgs/userIcon.png"
		/>
	</div>
</template>

<script>
import { PROJECT_NAME, BUSINESS_NAME } from "../config";

export default {
	data() {
		return {
			// Make PROJECT_NAME available in the template
			PROJECT_NAME,
			BUSINESS_NAME,
		};
	},
};
</script>
