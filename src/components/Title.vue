<template>
	<div class="title-container">
		<div class="names-container">
			<div class="avatar-fix">
				<p :class="state.mobileVersion ? 'name-mobile' : 'name'">Karol</p>
				<div :class="state.mobileVersion ? 'avatar-mobile' : 'avatar'"></div>
				<p :class="state.mobileVersion ? 'surname-mobile' : 'surname'">
					Zawisza
				</p>
				<XyzTransition
					class="work-div"
					xyz="fade down flip-up-50%">
					<div
						class="square"
						:class="state.mobileVersion ? 'work-title-mobile' : 'work-title'"
						v-if="showTitle">
						Frontend developer
					</div>
				</XyzTransition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: { state: { type: Object, required: true } },
	data() {
		return {
			showTitle: false,
		};
	},
	methods: {
		showTitleAfter() {
			setTimeout(() => {
				this.showTitle = true;
			}, 2000);
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

	/* animation: zoomIn; 
	animation-duration: 1s;  */
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
.work-title {
	margin-top: -23px;
	line-height: 80px;
	font-size: 80px;
	color: v-bind("state.colorLight");
}
.work-title-mobile {
	margin-top: -20px;
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
.work-div {
	min-height: 50px;
	margin-top: -70px;
	margin-bottom: 40px;
}
</style>
