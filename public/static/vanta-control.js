import * as THREE from 'three'

import FOG from "https://cdn.skypack.dev/three@<version>"


const container = document.getElementById("vanta-container")

FOG({
    el: container,
    THREE
})

console.log(container)