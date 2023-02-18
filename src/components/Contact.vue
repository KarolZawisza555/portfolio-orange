<template>
	<div class="contact-container"></div>
</template>

<script>
export default {
	name: "Contact",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped>
.contact-container {
	width: 100%;
}
.contact-container-animate {
	min-height: 500px;
	margin: auto;
	max-width: 1200px;
	color: v-bind("state.colorMain");
	display: flex;
	justify-content: center;
	text-align: center;
}
</style>
