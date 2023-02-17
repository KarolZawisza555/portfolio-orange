<template>
	<div class="title-container">
		<div class="names-container">
			<div class="avatar-fix">
				<p :class="state.mobileVersion ? 'name-mobile' : 'name'">Karol</p>
				<div :class="state.mobileVersion ? 'avatar-mobile' : 'avatar'"></div>
				<p :class="state.mobileVersion ? 'surname-mobile' : 'surname'">
					Zawisza
				</p>
			</div>
			<XyzTransition
				:class="state.mobileVersion ? 'work-div-mobile' : 'work-div'"
				xyz="fade down flip-up-70%">
				<div
					v-if="showTitle"
					class="square"
					:class="state.mobileVersion ? 'work-title-mobile' : 'work-title'">
					Frontend developer
				</div>
			</XyzTransition>
		</div>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: {
		state: { type: Object, required: true },
		textDelay: {
			type: Number,
			default: 2000,
		},
	},
	data() {
		return {
			showTitle: false,
		};
	},
	methods: {
		showTitleAfter() {
			setTimeout(() => {
				this.showTitle = true;
			}, this.textDelay);
		},
	},
	created() {
		this.showTitleAfter();
	},
};
</script>

<style>
.title-container {
	min-height: 400px;
	display: flex;
	justify-content: center;
	text-align: center;
}
.names-container {
	font-family: "Poppins", sans-serif;
	font-weight: 700;
}
.name {
	margin-top: 100px;
	color: rgb(135, 135, 135);
	font-size: 160px;
}
.name-mobile {
	margin-top: 100px;
	color: rgb(135, 135, 135);
	font-size: 85px;
}
.surname {
	font-size: 160px;
	color: v-bind("state.colorMain");
}
.surname-mobile {
	font-size: 85px;
	color: v-bind("state.colorMain");
}
.work-div {
	min-height: 140px;
	margin-top: -70px;
	margin-bottom: 40px;
}
.work-title {
	margin-top: -75px;
	margin-bottom: 40px;
	line-height: 80px;
	font-size: 80px;
	color: v-bind("state.colorLight");
}
.work-div-mobile {
	min-height: 50px;
	margin-top: -30px;
	margin-bottom: 20px;
}
.work-title-mobile {
	/* margin-top: -20px; */
	line-height: 45px;
	font-size: 45px;
	color: v-bind("state.colorLight");
}
.avatar {
	margin-top: -120px;
	margin-bottom: -100px;
	position: relative;
	width: 200px;
	height: 200px;
	background: url("../assets/Karol-Zawisza-2022-02-800x800.jpg") no-repeat right
		center/cover;
	border-radius: 50%;
	border: 5px solid v-bind("state.colorMain");
}
.avatar-mobile {
	margin-top: -80px;
	margin-bottom: -55px;
	position: relative;
	width: 120px;
	height: 120px;
	background: url("../assets/Karol-Zawisza-2022-02-800x800.jpg") no-repeat right
		center/cover;
	border-radius: 50%;
	border: 5px solid v-bind("state.colorMain");
}
.avatar-fix {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
