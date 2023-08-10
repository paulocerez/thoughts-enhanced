<script lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

export default {
	data() {

	}
}

</script>

<template>
	<div class="wrapper">
		<h1 class="header"><span class="entry">welcome my friend 👋🏼</span>
			<br>
			<br>
			share your deepest secrets - our IT guys &lt;3 gossip
		</h1>
		<h3 class="subheader">let's start by
			<router-link to="/thought" class="underline">leaving a thought</router-link> 💭
		</h3>
	</div>
</template>


<style>
.wrapper {
	display: inline-block;
	text-align: left;
	max-width: 80%;
}


.header {
	margin: 2rem;
	font-size: 32px;
	line-height: 3rem;
}

.entry {
	text-align: center;
	font-weight: bold;
}

.subheader {
	text-align: center;

}

.underline {
	text-decoration: none;
	position: relative;
	/* ensure stacking order */
}

.underline:hover {
	text-decoration: underline;
}

/* styling for the router-link */
.underline:hover::before {
	content: "";
	/* Create an empty pseudo-element */
	position: absolute;
	bottom: -2px;
	/*spacing between line and text*/
	left: 0;
	width: 100%;
	height: 1px;
	background-color: #000;
	/* Adjust color as needed */
}


@media only screen and (max-width: 768px) {

	.wrapper {
		max-width: 100%;
	}
}
</style>