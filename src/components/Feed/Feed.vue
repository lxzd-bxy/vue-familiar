<template>
  <div class="w-5/6 text-white">
    <!-- Post Form -->
    <form
      @submit.prevent=""
      class="w-full bg-[var(--fg-color)] mx-auto mb-4 p-4 rounded flex justify-between items-center"
    >
      <div class="flex w-full">
        <img
          class="rounded-full me-4 object-cover h-12 w-12"
          :src="'/images/neutral.png'"
          alt="User profile"
        />
        <input
          autocomplete="off"
          type="text"
          name="post"
          placeholder="Что у вас нового?"
          class="w-full text-white bg-[var(--fg-color)] ps-4 border-0 focus:outline-none focus:ring-0 hover:outline-none hover:border-0"
        />
      </div>
      <button
        type="submit"
        class="ms-4 px-4 py-2 bg-[var(--primary)] text-white rounded float-end"
      >
        Отправить
      </button>
    </form>

    <!-- Posts List
    <div class="w-full mx-auto overflow-auto" style="height: 75vh;">
      <div 
        class="w-full bg-[var(--fg-color)] text-white p-3 mb-3 rounded"
      >
        <div class="flex items-center">
          <img 
            class="me-3 rounded-full object-cover h-12 w-12"
            :src="'/images/neutral.png'"
          >
          <h5 class="font-medium">
          </h5>
        </div>
        <hr class="my-2 border-gray-600">
        <div>
          <p class="text-gray-200">
          </p>
        </div>
      </div>
    </div> -->
  </div>
</template>
