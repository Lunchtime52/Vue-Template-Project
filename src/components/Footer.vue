<template>
	<footer
		:class="`text-center pt-${padding} pb-${
			padding - 1
		} bg-${background} px-2 mt-5`"
	>
		<p>{{ copyright }}</p>
		<div v-if="footerLinks.length">
			<a
				v-for="link in footerLinks"
				:key="link.href"
				:href="link.href"
				class="mx-2"
				>{{ link.text }}</a
			>
		</div>
		<strong>Built by Ryan Buchanan</strong>
	</footer>
</template>

<script>
import { BUSINESS_NAME } from "../config";
export default {
	props: {
		copyright: {
			type: String,
			default: `© ${new Date().getFullYear()} ${BUSINESS_NAME} All rights reserved.`,
		},
		padding: { type: Number, default: 4 },
		background: { type: String, default: "primary" },
		footerLinks: { type: Array, default: () => [] },
	},
};
</script>

<style scoped>
footer {
	font-size: small;
}
</style>
