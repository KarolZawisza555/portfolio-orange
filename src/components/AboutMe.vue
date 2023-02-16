<template>
	<div>
		<div class="about-me">xxxxxxxxxxxxxx</div>
	</div>
</template>

<script>
export default {
	name: "AboutMe",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped>
.about-me {
	border: 3px solid v-bind("state.colorMain");
	width: 100%px;
	border-radius: 5px;
	padding: 20px;
	margin-left: 20px;
	margin-right: 20px;
}
</style>
