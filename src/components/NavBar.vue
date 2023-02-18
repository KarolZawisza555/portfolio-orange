<template>
	<nav class="container-nav">
		<div class="w-50">
			<Icon
				icon="line-md:linkedin"
				class="icon-linkedin" />
			<Icon
				icon="mdi:github"
				class="icon-github" />
		</div>
		<div class="container-mail w-50">
			<a>
				<Icon
					@click="changeColor"
					:color="state.colorMain"
					icon="ic:round-color-lens"
					class="icon-mail" />
			</a>
			<a href="mailto:inz.zawisza.karol@gmail.com">
				<Icon
					icon="material-symbols:mail-rounded"
					class="icon-mail" />
			</a>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	emits: ["onChangeColor"],
	props: { state: Object, randomNum: Number },
	methods: {
		changeColor() {
			const nextColor = (this.randomNum + 1) % 10;
			this.$emit("onChangeColor", nextColor);
		},
	},
	data() {
		return {
			links: [
				{ url: "#home", text: "Home" },
				{ url: "#about", text: "About" },
				{ url: "#contact", text: "Contact" },
			],
		};
	},
};
</script>

<style>
.container-nav {
	display: flex;
	margin-top: 5px;
}
.container-mail {
	display: flex;
	justify-content: flex-end;
}
.icon-linkedin {
	font-size: 40px;
	margin-left: 5px;
}
.icon-github {
	font-size: 40px;
	margin-left: 10px;
}
.icon-mail {
	font-size: 40px;
	color: rgb(135, 135, 135);
	margin-right: 5px;
}
.w-50 {
	width: 50%;
}
</style>
