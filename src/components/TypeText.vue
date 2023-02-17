<template>
	<div class="text-type-container">
		<div class="typewriter">
			<div
				class="typewriter-text"
				ref="typewriterText">
				{{ displayText }}
			</div>
			<div class="typewriter-cursor"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Typewriter",
	props: {
		text: {
			type: String,
			required: true,
		},
		delay: {
			type: Number,
			default: 100,
		},
		reverseDelay: {
			type: Number,
			default: 50,
		},
		loop: {
			type: Boolean,
			default: true,
		},
		cursorBlinkInterval: {
			type: Number,
			default: 500,
		},
		textDelay: {
			type: Number,
			default: 3000,
		},
		cursorChar: {
			type: String,
			default: "|",
		},
		state: { type: Object, required: true },
	},
	data() {
		return {
			displayText: "",
			cursorVisible: false,
		};
	},
	mounted() {
		this.cursorInterval = setInterval(() => {
			this.cursorVisible = !this.cursorVisible;
		}, this.cursorBlinkInterval);
		setTimeout(() => {
			this.writeText(this.text);
		}, this.textDelay);
	},
	beforeUnmount() {
		clearInterval(this.cursorInterval);
	},
	methods: {
		writeText(text) {
			let i = 0;
			const speed = this.delay;
			const reverseSpeed = this.reverseDelay;
			const typewriterText = this.$refs.typewriterText;

			const typeWriter = () => {
				if (i < text.length) {
					this.displayText += text.charAt(i);
					i++;
					setTimeout(typeWriter, speed);
				} else {
					setTimeout(eraseText, reverseSpeed);
				}
			};

			const eraseText = () => {
				if (i > 0) {
					this.displayText = text.substring(0, i - 1);
					i--;
					setTimeout(eraseText, reverseSpeed);
				} else {
					if (this.loop) {
						setTimeout(() => this.writeText(text), speed);
					}
				}
			};

			typeWriter();
		},
	},
	computed: {
		cursorCharWithVisibility() {
			return this.cursorVisible ? this.cursorChar : "";
		},
	},
};
</script>

<style scoped>
.text-type-container {
	display: flex;
	justify-content: center;
	padding: 20px;
}
.typewriter {
	display: inline-block;
	padding-top: 18px;
	padding-right: 18px;
	position: relative;
	color: v-bind("state.colorMain");
	font-size: 40px;
	height: 50px;
	font-family: monospace;
	white-space: nowrap;
	overflow: hidden;
	border-right: 2px solid v-bind("state.colorMain");
}

.typewriter-cursor {
	position: absolute;
	top: 0;
	right: 0;
	width: 20px;
	height: 100%;
	background-color: transparent;
	animation: blink 0.7s infinite;
}

@keyframes blink {
	0% {
		background-color: transparent;
	}
	50% {
		background-color: rgb(135, 135, 135);
	}
	100% {
		background-color: transparent;
	}
}
</style>
