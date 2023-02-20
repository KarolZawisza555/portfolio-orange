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
				<p class="date-style">{{ tab.when }}</p>
				<span
					:class="
						state.mobileVersion ? 'work-header-text-mobile' : 'work-header-text'
					">
					{{ tab.content }}</span
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
					when: "Aug 2021 - Dec 2022",
					content: `Work with back-end developers to integrate UI components with APIs and databases Gather and refine specifications and requirements based on technical requirements or UX design Debug errors, troubleshoot issues, and perform routine performance optimizations Write high-quality, scalable, and reusable code.`,
				},
				{
					title: "Freelancer",
					place: "self-employment",
					when: "Feb 2021 – Apr 2021",
					content: `Developing and maintaining the front-end of websites and web applications using technologies such as HTML, CSS, and JavaScript`,
				},
				{
					title: "Electrical specialist",
					place: "Strunobet Kuzki",
					when: "Dec 2017 – Apr 2020",
					content: `Preparation of technical and technological documentation Contact with international clients Creating 2D CAD diagrams and 3D models Designing power systems in accordance with customer requirements`,
				},
				{
					title: "Automation foreman",
					place: "Cerrad Starachowice",
					when: "Sep 2016 – Nov 2017",
					content: `Supervising machines and devices in terms of electromechanics Diagnosis of failures and their removal Control and supervision of the production process in SCADA software`,
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
	font-size: 26px;
	line-height: 40px;
	color: v-bind("state.colorMain");
}

.work-header-text-mobile {
	font-size: 16px;
	line-height: 24px;
	color: v-bind("state.colorMain");
}

.work-header-place {
	color: v-bind("state.colorLight");
	font-size: 26px;
	margin-left: 10px;
	margin-right: 5px;
}

.work-header-place-mobile {
	color: v-bind("state.colorLight");
	font-size: 18px;
	margin-left: 11px;
	margin-right: 5px;
}

.date-style {
	font-weight: bolder;
	font-size: 20px;
	text-align: center;
}
</style>
