<script setup>
import { ref, computed } from "vue";

import { useWindowSize } from "@vueuse/core";
import IconCarousel from "./components/IconCarousel.vue";
import NavBar from "./components/NavBar.vue";
import Title from "./components/Title.vue";
import AboutMe from "./components/AboutMe.vue";
import TypeText from "./components/TypeText.vue";
import HorizontalLine from "./components/HorizontalLine.vue";
import MyProjects from "./components/MyProjects.vue";
import Work from "./components/Work.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";

const randomNum = ref(1);
randomNum.value = Math.floor(Math.random() * 10);
const colorList = [
	"rgb(51,85,200)",
	"rgb(97,228,8)",
	"rgb(20,143,94)",
	"rgb(233,17,51)",
	"rgb(32,194,240)",
	"rgb(253, 19, 42)",
	"rgb(88,178,222)",
	"rgb(209,183,88)",
	"rgb(66, 165, 246)",
	"rgb(73,141,176)",
];
const { width, height } = useWindowSize();
const changeColor = (newValue) => {
	randomNum.value = Math.floor(Math.random() * 10);
	console.log(newValue);
};
const state = computed(() => {
	return {
		colorMain: colorList[randomNum.value],
		colorLight: "rgb(135,135,135)",
		mobileVersion: width.value < 720,
	};
});
</script>

<template>
	<XyzTransition
		appear
		duration="auto">
		<div xyz="fade flip-down stagger duration-20 delay-2 ease-out-back">
			{{ randomNum }}
			<NavBar
				:randomNum="randomNum"
				:state="state"
				@on-change-color="changeColor" />
			<Title :state="state" />
			<IconCarousel
				:state="state"
				mirror />
			<TypeText
				text="/about-me"
				loop
				:state="state"
				:delay="500"
				:textDelay="3000"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<AboutMe :state="state" />
			<HorizontalLine :state="state" />
			<TypeText
				text="/my-experience"
				loop
				:state="state"
				:delay="500"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<Work :state="state" />
			<TypeText
				text="/my-projects"
				loop
				:state="state"
				:delay="500"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<MyProjects :state="state" />
			<TypeText
				text="/my-contact"
				loop
				:state="state"
				:delay="500"
				:cursorBlinkInterval="500"
				:reverseDelay="10" />
			<Contact :state="state" />
			<IconCarousel :state="state" />
			<Footer :state="state" />
		</div>
	</XyzTransition>
</template>
