<template>
	<div>
		<h5>Default</h5>
		<Accordion :multiple="true">
			<AccordionTab header="Header I"> Content </AccordionTab>
			<AccordionTab header="Header II"> Content </AccordionTab>
			<AccordionTab header="Header III"> Content </AccordionTab>
		</Accordion>
	</div>
</template>

<script>
export default {
	name: "Work",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped></style>
