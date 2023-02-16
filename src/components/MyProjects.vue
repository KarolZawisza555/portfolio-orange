<template>
	<div>
		<div
			v-motion-slide-visible-once-right
			:delay="800"
			:tapped="{ scale: 1.2 }"
			class="my-projects">
			<div class="description">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
				aliquid neque quod vitae optio rerum provident. Hic odit est voluptatem,
				facere iusto voluptates dolore. Voluptatum repellendus praesentium vitae
				sequi inventore, veritatis nisi ea molestiae harum veniam eos
				repudiandae, porro nesciunt maxime ullam. Totam distinctio soluta harum
				accusantium voluptatum laudantium officiis esse. Autem numquam
				laboriosam molestiae asperiores, expedita accusantium reiciendis
				temporibus repellat unde. Repellendus excepturi voluptas tempora
				voluptate sint iusto, enim sed doloremque quisquam hic, id at, atque
				vitae unde sunt quibusdam sit sapiente corporis maiores natus. At iure
				iusto explicabo sint autem sunt ea dolores laudantium eaque nobis
				tempora repellendus ducimus ratione ipsum aut facere aspernatur
				consequuntur quia voluptatum tempore natus, fugit repudiandae harum.
				Magnam incidunt culpa doloremque quis tempore voluptatum quaerat
				consequatur temporibus deserunt excepturi consequuntur nam quia
				obcaecati ad consectetur placeat impedit mollitia quidem ea quisquam at,
				laboriosam quae velit. Ea, saepe possimus? Perspiciatis debitis,
				provident omnis consectetur magnam unde esse eos facere eveniet aperiam
				enim accusantium ratione quaerat quidem saepe sequi recusandae minima
				velit architecto illo, incidunt tenetur ducimus pariatur? Corrupti saepe
				nihil earum suscipit sit non, quas cum facere ipsam tempore expedita
				eos, reiciendis aperiam maxime numquam hic illum culpa ad nostrum
				provident consequuntur maiores. Numquam illo dolorum exercitationem
				cupiditate nemo ipsum mollitia officia veniam ipsa, sapiente explicabo
				nam dicta quod quasi veritatis voluptatibus, qui nisi?
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyProjects",
	props: { state: { type: Object, required: true } },
};
</script>

<style scoped>
.my-projects {
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 70px;
}
.description {
	font-size: 22px;
	line-height: 30px;
	width: 100%;
	padding: 0px;
	margin-left: 20px;
	margin-right: 20px;
	max-width: 1000px;
	padding: 20px;
	/* border: 2px solid;
	border-image: linear-gradient(
			to right,
			v-bind("state.colorMain"),
			v-bind("state.colorLight")
		)
		1; */
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
