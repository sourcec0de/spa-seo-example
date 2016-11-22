<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="page1">Page 1</router-link>
    <router-link to="page2">Page 2</router-link>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
