<template>
	<div class="about-me-container">
		<div class="about-me">
			<div :class="state.mobileVersion ? 'description-mobile' : 'description'">
				Engineer with a passion for IT and ways to increase productivity. I have
				a passion for creating engaging and interactive user experiences. With 2
				years of experience, I have a solid understanding of HTML, CSS, and
				JavaScript and have experience in working with a variety of front-end
				frameworks such as Vue and React. I am constantly seeking for new
				challenges and opportunities to expand my skillset and stay up-to-date
				with the latest industry trends and technologies. I am a team player and
				enjoy collaborating with designers, back-end developers, and clients to
				deliver solid results
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AboutMe",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped>
.about-me-container {
	margin-top: 50px;
	min-height: 500px;
}
.about-me {
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 70px;
}
.description {
	font-size: 26px;
	line-height: 38px;
	width: 100%;
	padding: 0px;
	margin-left: 20px;
	margin-right: 20px;
	max-width: 1000px;
	padding: 20px;
	border: 5px solid;
	border-image: linear-gradient(
		to top,
		v-bind("state.colorLight") 0%,
		v-bind("state.colorMain") 50%,
		v-bind("state.colorMain") 51%,
		v-bind("state.colorLight") 100%
	);
	border-image-slice: 1;
}
.description-mobile {
	font-size: 14px;
	line-height: 30px;
	width: 100%;
	padding: 0px;
	margin-left: 5px;
	margin-right: 5px;
	max-width: 1000px;
	padding: 10px;
	border: 5px solid;
	border-image: linear-gradient(
		to top,
		v-bind("state.colorLight") 0%,
		v-bind("state.colorMain") 50%,
		v-bind("state.colorMain") 51%,
		v-bind("state.colorLight") 100%
	);
	border-image-slice: 1;
}
</style>
