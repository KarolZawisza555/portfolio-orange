<template>
	<footer>
		<p class="footer-text">2023 <span class="logo"> KZ </span></p>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped>
.footer-text {
	font-size: 24px;
	padding: 100px;
	text-align: center;
	padding: 0;
	margin: 0;
	color: v-bind("state.colorMain");
}
.logo {
	color: v-bind("state.colorLight");
}
</style>
