<template>
	<div class="work-container">
		<Accordion
			lazy
			class="accordion-work">
			<AccordionTab
				v-for="tab in tabs"
				id="tab.title"
				:key="tab.title">
				<template #header>
					<span class="work-header">{{ tab.title }}</span>
					<span class="work-header-place">{{ tab.place }}</span>
				</template>
				<span class="work-header-text">{{ tab.content }}</span>
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
				{
					title: "Junior Frontend developer",
					place: "Makolab",
					content: "Content 1",
				},
				{ title: "Freelancer", content: "Content 2" },
				{ title: "Specjalist automation", content: "Content 3" },
			],
		};
	},
};
</script>

<style scoped>
.work-container {
}
.accordion-work {
	margin: 10px;
}
.work-header {
	color: v-bind("state.colorMain");
	font-weight: bolder;
	font-size: 26px;
}
.work-header-text {
	color: v-bind("state.colorMain");
}
.work-header-place {
	color: v-bind("state.colorLight");
	font-size: 26px;
	margin-left: 10px;
}
</style>
