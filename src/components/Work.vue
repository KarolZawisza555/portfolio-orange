<template>
	<div class="work-container">
		<Accordion
			lazy
			multiple
			class="accordion-work">
			<AccordionTab
				v-for="tab in tabs"
				:key="tab.title"
				:header="tab.title">
				<p>{{ tab.content }}</p>
			</AccordionTab>
		</Accordion>
	</div>
</template>

<script>
export default {
	name: "Work",
	props: { state: { type: Object, required: true } },
	data() {
		return {
			tabs: [
				{ title: "Junior Frontend developer", content: "Content 1" },
				{ title: "Freelancer", content: "Content 2" },
				{ title: "Specjalist automation", content: "Content 3" },
			],
		};
	},
};
</script>

<style scoped>
.work-container {
	margin: 10px;
}
.accordion-work {
	margin: 10px;
	background-color: transparent;
}
.p-accordion-header-text {
	color: red;
}
</style>
