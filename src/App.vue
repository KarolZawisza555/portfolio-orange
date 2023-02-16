<script setup>
import { ref, computed, reactive } from "vue";
import { useWindowSize } from "@vueuse/core";
import IconCarousel from "./components/IconCarousel.vue";
import NavBar from "./components/NavBar.vue";
import Title from "./components/Title.vue";
import AboutMe from "./components/AboutMe.vue";
import TypeText from "./components/TypeText.vue";

const { width, height } = useWindowSize();
const state = computed(() => {
	return {
		colorMain: "rgb(102,210,100)",
		mobileVersion: width.value < 720,
	};
});
</script>

<template>
	<NavBar />
	<Title :state="state" />
	<IconCarousel :state="state" />
	<TypeText
		text="About me"
		loop
		:state="state"
		:delay="200"
		:cursorBlinkInterval="500"
		:reverseDelay="10" />
	<AboutMe :state="state" />
</template>
