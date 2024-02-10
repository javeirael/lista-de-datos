<template>
  <div class="container">
    <h1>User Data</h1>
    
    <!-- Formulario para agregar usuarios -->
    <form @submit.prevent="addData" class="form-container">
      <h2>Add User</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model.trim="newUser.name" class="form-control" placeholder="Enter name" required />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model.trim="newUser.lastName" class="form-control" placeholder="Enter last name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model.trim="newUser.email" class="form-control" placeholder="Enter email" required />
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model.number="newUser.age" class="form-control" placeholder="Enter age" required />
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" v-model.trim="newUser.city" class="form-control" placeholder="Enter city" required />
      </div>
      <div class="form-group">
        <label for="country">Country:</label>
        <input type="text" id="country" v-model.trim="newUser.country" class="form-control" placeholder="Enter country" required />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" v-model.trim="newUser.phoneNumber" class="form-control" placeholder="Enter phone number" required />
      </div>
      <button type="submit" class="btn-submit">Add User</button>
    </form>
    
    
    <!-- Lista de usuarios -->
    <div v-if="dataList.length > 0">
      <h2>User List</h2>
      <div class="card-container">
        <div v-for="(data, index) in dataList" :key="index" class="card">
          <p><strong>ID:</strong> {{ data.id }}</p>
          <p><strong>Name:</strong> {{ data.name }}</p>
          <p><strong>Last Name:</strong> {{ data.lastName }}</p>
          <p><strong>Email:</strong> {{ data.email }}</p>
          <p><strong>Age:</strong> {{ data.age }}</p>
          <p><strong>City:</strong> {{ data.city }}</p>
          <p><strong>Country:</strong> {{ data.country }}</p>
          <p><strong>Phone Number:</strong> {{ data.phoneNumber }}</p>
          <button @click="updateData(data.id)">Edit</button>
        </div>
      </div>
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { IDataInfo } from '@/Interfaces/IDataInfo';

const newUser = ref<IDataInfo>({
  id: 0,
  name: '',
  lastName: '',
  email: '',
  age: 0,
  city: '', 
  country: '', 
  phoneNumber: '' 
});

const dataList = ref<IDataInfo[]>([]);
const router = useRouter();

const addData = () => {
  if (newUser.value.name && newUser.value.lastName && newUser.value.email && newUser.value.age) {
    newUser.value.id = dataList.value.length;
    dataList.value.push({ ...newUser.value });
    clearForm();
  }
};

const clearForm = () => {
  newUser.value = { 
  id: 0,
  name: '',
  lastName: '',
  email: '',
  age: 0,
  city: '', 
  country: '', 
  phoneNumber: ''  };
};

const errorMessage = ref<string>('');

const updateData = (dataId: number) => {
  const index = dataList.value.findIndex(data => data.id === dataId);
  if (index % 2 === 0) {
    errorMessage.value = 'Cannot edit a user with even index.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000); // Ocultar el mensaje después de 5 segundos
    return; 
  } else {
    router.push({
      name: 'UpdateData',
      params: { dataId, dataList: JSON.stringify(dataList.value) }
    });
  }
};
</script>

<style scoped>
/* Estilos aquí */
.container {
  max-width: 800px; /* Ancho máximo */
  margin: 0 auto; /* Centrar el contenido */
}

.form-container {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-submit {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  background-color: #45a049;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 300px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px;
}

.card p {
  margin: 5px 0;
}

.card button {
  background-color: #008CBA;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.card button:hover {
  background-color: #005f7f;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
</style>
