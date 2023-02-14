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
}
.container-mail {
	display: flex;
	justify-content: flex-end;
}
.icon-linkedin {
	font-size: 40px;
}
.icon-github {
	font-size: 40px;
	margin-left: 10px;
}
.icon-mail {
	font-size: 40px;
	color: rgb(135, 135, 135);
}
.w-50 {
	width: 50%;
}
</style>
