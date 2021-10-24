<template>
  <div>
    <div class="loadingio-spinner-rolling-cartjbdsc7q">
      <div class="ldio-9fxjxwzfr2s">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
@keyframes ldio-9fxjxwzfr2s {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.ldio-9fxjxwzfr2s div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 20px solid #0fb3cb;
  border-top-color: transparent;
  border-radius: 50%;
}

.ldio-9fxjxwzfr2s div {
  animation: ldio-9fxjxwzfr2s 1s linear infinite;
  top: 100px;
  left: 100px
}

.loadingio-spinner-rolling-cartjbdsc7q {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}

.ldio-9fxjxwzfr2s {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-9fxjxwzfr2s div {
  box-sizing: content-box;
}
</style>