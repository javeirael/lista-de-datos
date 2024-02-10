<template>
  <div id="app">
    <header>
      <h1>User Management System</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 alex User Management System</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.push({ name: 'Home' });
});
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

header {
  background-color: #007bff;
  color: white;
  padding: 10px 0;
}

header h1 {
  margin: 0;
}

footer {
  margin-top: 20px;
  background-color: #f8f9fa;
  padding: 10px 0;
}
</style>
