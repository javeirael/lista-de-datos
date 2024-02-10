<template>
    <div>
      <h1>Edit User</h1>
      <div v-if="data">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model.trim="data.name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model.trim="data.lastName" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model.trim="data.email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" v-model.number="data.age" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="city">City:</label>
          <input type="text" id="city" v-model.trim="data.city" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="country">Country:</label>
          <input type="text" id="country" v-model.trim="data.country" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" v-model.trim="data.phoneNumber" class="form-control" required />
        </div>
  
        <button @click="saveChanges" class="btn-submit">Save Changes</button>
        <button @click="goBack" class="btn-cancel">Cancel</button>
      </div>
      <div v-else>
        <p>User not found</p>
        <button @click="goBack" class="btn-cancel">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup >
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const dataId = Number(router.currentRoute.value.params.dataId);
  const dataList = ref([]);
  
  // Variable reactiva para almacenar los datos del usuario actual
  const data = ref(null);
  
  onMounted(() => {
    //Buscar el usuario por su ID
    data.value = dataList.value.find(u => u.id === dataId) || null;
  });
  
  //Función para guardar los cambios del usuario
  const saveChanges = () => {
    // Encontrar el índice del usuario en el array userList
    const index = dataList.value.findIndex(u => u.id === data.value.id);
    if (index !== -1) {
      // Actualizar el usuario en el array userList
      dataList.value.splice(index, 1, data.value);
      // Redirigir a la página de inicio
      router.push('/');
    }
  };
  
  // Función para regresar a la página principal
  const goBack = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }
  
  .btn-submit {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
  }
  
  .btn-cancel {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  