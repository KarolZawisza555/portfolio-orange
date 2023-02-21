<template>
	<div class="contact-container">
		<div class="phone">
			<Icon
				icon="mdi-phone"
				class="contact-icon-class"
				:width="26"
				:color="state.colorMain" />
			<a href="tel:570096077" class="phone-call" :color="state.colorMain">CALL ME</a>
			<p class="contact-span">570-096-077</p>
		</div>
		<p class="email">
			<a href="mailto:inz.zawisza.karol@gmail.com">
				<Icon
					:color="state.colorMain"
					icon="material-symbols:mail-rounded"
					class="icon-mail" />
			</a>
			<a href="https://www.linkedin.com/in/karol-zawisza">
				<Icon
					:color="state.colorMain"
					icon="mdi-linkedin"
					class="icon-mail" />
			</a>
		</p>
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
	font-size: 20px;
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
.phone-call{
	color: v-bind("state.colorMain");
	font-size:32px
}
</style>
