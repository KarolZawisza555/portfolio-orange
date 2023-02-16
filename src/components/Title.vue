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
		</div>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: { state: { type: Object, required: true } },
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

	animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
	animation-duration: 1s; /* don't forget to set a duration! */
}
.name {
	margin-top: 100px;
	color: rgb(135, 135, 135);
	font-size: 160px;
}
.name-mobile {
	margin-top: 100px;
	color: rgb(135, 135, 135);
	font-size: 100px;
}
.surname {
	font-size: 160px;
	color: v-bind("state.colorMain");
}
.surname-mobile {
	font-size: 100px;
	color: v-bind("state.colorMain");
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
	margin-top: -90px;
	margin-bottom: -65px;
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
