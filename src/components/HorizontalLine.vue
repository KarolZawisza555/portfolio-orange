<template>
	<hr />
</template>

<script>
export default {
	name: "HorizontalLine",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped>
hr {
	height: 3px;
	background-image: linear-gradient(
		to right,
		v-bind("state.colorLight") 00%,
		v-bind("state.colorMain") 100%
	);
	border: none;
}
</style>
