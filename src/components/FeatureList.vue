<!-- @format -->

<template>
	<div class="container section-padding">
		<div class="row gap-8">
			<div
				v-for="(feature, index) in features"
				:key="index">
				<div
					class="bg-white rounded-lg shadow-md p-5 align-items-center">
					<div class="text-primary mb-2 fs-1">
						<span :class="[feature.icon]"></span>
					</div>
					<h3 class="fs-5 fw-semibold text-dark mb-2">
						{{ feature.title }}
					</h3>
					<p class="text-secondary text-center">
						{{ feature.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	features: {
		type: Array,
		required: true,
		default: () => [],
	},
});
</script>
