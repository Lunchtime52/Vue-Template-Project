<script>
import { PROJECT_NAME } from "./config";
export default {
	data() {
		return {
			projectName: PROJECT_NAME,
		};
	},
};
</script>
<template>
	<Navbar
		:logoText="projectName"
		:navLinks="[
			{ text: 'Home', href: 'Home' },
			{ text: 'About', href: 'About' },
			{ text: 'Contact', href: 'Contact' },
		]"
	/>

	<router-view></router-view>

	<Footer
		:footerLinks="[
			// { text: 'Privacy', href: '/privacy' },
			// { text: 'Terms', href: '/terms' },
		]"
	/>
</template>
