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
					<span
						:class="state.mobileVersion ? 'work-header-mobile' : 'work-header'"
						>{{ tab.title }}</span
					>
					<span
						:class="
							state.mobileVersion
								? 'work-header-place-mobile'
								: 'work-header-place'
						"
						>{{ tab.place }}</span
					>
				</template>
				<span
					:class="
						state.mobileVersion ? 'work-header-text-mobile' : 'work-header-text'
					"
					>{{ tab.content }}</span
				>
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
					content: `Work with back-end developers to integrate UI componentswith APIs and databasesGather and refine specifications and requirements based ontechnical requirements or UX designDebug errors, troubleshoot issues, and perform routineperformance optimizationsWrite high-quality, scalable, and reusable code.`,
				},
				{
					title: "Freelancer",
					place: "self-employment",
					content: `Developing and maintaining the front-end of websites and web applications using technologies such as HTML, CSS, and JavaScript`,
				},
				{
					title: "Electrical specialist",
					place: "Strunobet Kuzki",
					content: `Preparation of technical and technological documentationContact with international clientsCreating 2D CAD diagrams and 3D modelsDesigning power systems in accordance with customerrequirements`,
				},
				{
					title: "Automation foreman",
					place: "Cerrad Starachowice",
					content: `Supervising machines and devices in terms ofelectromechanicsDiagnosis of failures and their removalControl and supervision of the production process in SCADA software`,
				},
			],
		};
	},
};
</script>

<style scoped>
.accordion-work {
	margin: 10px;
	max-width: 1200px;
	margin: auto;
}

.work-header {
	color: v-bind("state.colorMain");
	font-weight: bolder;
	font-size: 26px;
}

.work-header-mobile {
	color: v-bind("state.colorMain");
	font-weight: bolder;
	font-size: 18px;
}

.work-header-text {
	color: v-bind("state.colorMain");
}

.work-header-text-mobile {
	color: v-bind("state.colorMain");
}

.work-header-place {
	color: v-bind("state.colorLight");
	font-size: 26px;
	margin-left: 10px;
}

.work-header-place-mobile {
	color: v-bind("state.colorLight");
	font-size: 18px;
	margin-left: 11px;
}
</style>
