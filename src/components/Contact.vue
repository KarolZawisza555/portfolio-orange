<template>
	<div class="contact-container">
		<div class="phone">
			<Icon
				:width="40"
				icon="mdi-phone"
				class="contact-icon-class"
				:color="state.colorMain" />
			<p class="contact-span">570-096-077</p>
		</div>
		<div class="email">
			<Icon
				:width="40"
				icon="material-symbols:mail-rounded"
				class="contact-icon-class"
				:color="state.colorMain" />
			<p class="contact-span">inz.zawisza.karol@gmail.com</p>
		</div>
		<div class="linkedin">
			<Icon
				:width="40"
				icon="mdi-linkedin"
				class="contact-icon-class"
				:color="state.colorMain" />
			<p class="contact-span">linkedin.com/in/karol-zawisza</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped>
.contact-icon-class {
	margin-right: 10px;
}
.contact-span {
	margin-top: -5px;
	color: v-bind("state.colorLight");
}
.phone {
	text-align: center;
}
.email {
	text-align: center;
}
.linkedin {
	text-align: center;
}
.contact-container {
	width: 100%;
	margin: auto;
	color: v-bind("state.colorMain");
	font-size: 32px;
	line-height: 70px;
	margin-bottom: 40px;
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
