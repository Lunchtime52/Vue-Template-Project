<template>
	<div>
		<BContainer class="mt-5 section-padding">
			<BRow class="mx-auto border border-primary rounded">
				<h1>About Us</h1>
				<p>
					We are a company dedicated to providing high-quality products and
					services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</BRow>
			<BRow class="mt-4">
				<BCol md="6">
					<ImageWithText
						imageUrl="https://placehold.co/400x300"
						title="Our Mission"
						text="Our mission is to make the world a better place."
					/>
				</BCol>
				<BCol md="6">
					<ImageWithText
						imageUrl="https://placehold.co/400x300"
						title="Our Values"
						text="We value integrity, innovation, and customer satisfaction."
					/>
				</BCol>
			</BRow>
		</BContainer>
		<div class="container">
			<ContactForm
				title="Contact Us"
				buttonText="Submit"
				buttonHref="/contact"
			/>
		</div>
	</div>
</template>

<script>

</script>
