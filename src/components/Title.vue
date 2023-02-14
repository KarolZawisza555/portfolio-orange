<template>
	<div class="title-container">
		<div class="names-container">
			<div class="avatar-fix">
				<p class="name">Karol</p>
				<div class="avatar"></div>
				<p class="surname">Zawisza</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Title",
	data() {},
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
.surname {
	font-size: 160px;
	color: rgb(230, 74, 25);
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
	border: 5px solid rgb(230, 74, 25);
}
.avatar-fix {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
