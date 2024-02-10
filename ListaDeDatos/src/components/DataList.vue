<template>
    <div>
      <h2>Data user list</h2>
      <ul>
        <!-- Iterar sobre la lista de usuarios y mostrar los detalles -->
        <li v-for="(data, index) in dataList" :key="index" :style="{ backgroundColor: index % 2 === 0 ? 'lightgray' : 'transparent' }" @click="selectData(data)">
          {{ data.name }} - {{ data.lastName }} - {{ data.age }} - {{ data.email}} - {{ data.city }} - {{ data.country}} - {{ data.phoneNumber }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup >
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Definir una lista de usuarios utilizando ref
  const dataList = ref([]);
  
  // Función para seleccionar un usuario y redirigir a la página de edición
  const selectData = (data) => {
    router.push({ name: 'UpdateData', params: { dataId: data.id } });
  };
  </script>
  