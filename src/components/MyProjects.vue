<template>
	<div class="my-projects-container">
		<Carousel
			v-model="currentSlide"
			:itemsToShow="state.mobileVersion ? 1 : 3"
			:wrapAround="true"
			:autoplay="3000"
			:transition="500">
			<Slide
				v-for="project in projectList"
				:key="project.title">
				<Card class="project-card">
					<template #header>
						<img
							:src="project.image"
							style="height: 15rem" />
					</template>
					<template #title>
						<div class="mainColor">{{ project.title }}</div>
					</template>
					<template #content>
						<p class="mainColor">
							{{ project.description }}
						</p>
					</template>
					<template #footer>
						<div class="card-buttons">
							<a
								href="https://github.com/KarolZawisza555"
								class="button-github">
								Github
							</a>
							<a
								class="button-github"
								href="https://github.com/KarolZawisza555">
								Online
							</a>
						</div>
					</template>
				</Card>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.png";
import foto5 from "../assets/foto5.png";
import foto6 from "../assets/foto6.png";

export default {
	name: "MyProjects",
	props: { state: { type: Object, required: true } },
	components: {
		Carousel,
		Slide,
		foto1,
		foto1,
		foto2,
		foto3,
		foto4,
		foto5,
		foto6,
	},
	data() {
		return {
			currentSlide: 1,
			projectList: [
				{
					title: "Vuevalidate",
					description: "VUE 3 VUEVALIDATE ",
					githubLink: "",
					onlineLink: "",
					image: foto1,
				},
				{
					title: "Quasar",
					description: "Vue3 QUASAR",
					githubLink: "",
					onlineLink: "",
					image: foto2,
				},
				{
					title: "Vuetify & Apex chart",
					description: "VUE3 PINIA Vuetify",
					githubLink: "",
					onlineLink: "",
					image: foto3,
				},
				{
					title: "Bootstrap tests",
					description: "Bootstrap learn",
					githubLink: "",
					onlineLink: "",
					image: foto4,
				},
				{
					title: "RegistrationVuelidate",
					description: "",
					githubLink: "",
					onlineLink: "",
					image: foto5,
				},
				{
					title: "ICONS COLOR AND SIZE",
					description: "how to use icons for vue3",
					githubLink: "",
					onlineLink: "",
					image: foto6,
				},
			],
		};
	},
};
</script>

<style scoped>
.my-projects-container {
	margin-top: 20px;
	padding-top: 20px;
	padding-bottom: 50px;
	margin-left: 10px;
	margin-right: 10px;
	max-width: 100%;
}
.project-card {
	margin: 20px;
	max-width: 400px;
	min-width: 250px;
	background-color: #3c3d43;
}
.button-github {
	text-decoration: none;
	background-color: transparent;
	padding: 10px;
	border: 2px solid v-bind("state.colorMain");
	border-radius: 4px;
	margin-right: 10px;
	color: v-bind("state.colorMain");
}
.button-online {
	background-color: transparent;
	width: 130px;
	border: 2px solid v-bind("state.colorMain");
	color: v-bind("state.colorMain");
}
.mainColor {
	color: v-bind("state.colorMain");
}
.lightColor {
	color: v-bind("state.colorLight");
}
.carousel__slide {
	padding: 0px;
}
.card-buttons {
	padding-bottom: 10px;
}

.carousel__viewport {
	perspective: 3000px;
}

.carousel__track {
	transform-style: preserve-3d;
}

.carousel__slide--sliding {
	transition: 0.5s;
}

.carousel__slide {
	opacity: 1;
	transform: rotateY(-20deg) scale(0.8);
}

.carousel__slide--prev {
	opacity: 1;
	transform: rotateY(-10deg) scale(0.8);
}

.carousel__slide--active {
	opacity: 1;
	transform: rotateY(0) scale(1.1);
}
.carousel__slide--active ~ .carousel__slide {
	transform: rotateY(20deg) scale(0.8);
}
.carousel__slide--next {
	opacity: 1;
	transform: rotateY(10deg) scale(0.8);
}
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
.pagination-container {
	display: flex;
	column-gap: 10px;
}
.paginate-buttons {
	height: 40px;
	width: 40px;
	border-radius: 20px;
	cursor: pointer;
	background-color: rgb(242, 242, 242);
	border: 1px solid rgb(217, 217, 217);
	color: black;
}
.paginate-buttons:hover {
	background-color: #d8d8d8;
}
.active-page {
	background-color: #3498db;
	border: 1px solid #3498db;
	color: white;
}
.active-page:hover {
	background-color: #2988c8;
}
</style>
