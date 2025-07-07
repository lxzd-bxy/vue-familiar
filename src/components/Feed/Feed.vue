<template>
<div class="col-10 text-light">
  <form action="" method="POST"
    class="w-100 color-bg m-auto mb-3 p-3 rounded d-flex justify-content-between align-items-center">
    <div class="d-flex w-100">
      <img class="rounded-circle me-3 object-fit-cover" style="height: 50px; width: 50px;" />
      <input autocomplete="off" type="text" name="post" placeholder="Что у вас нового?"
        class="inp w-100 color-bg text-light border-0">
    </div>
    <button type="submit" class="ms-3 btn div-primary float-end">Отправить</button>
  </form>
  <div class="w-100 m-auto overflow-auto" style="height: 75vh;">
    <div class="w-100 card text-light p-3 mb-3" style="background-color: var(--fg-main);">
      <div class="d-flex align-items-center">
      <img class="me-3 rounded-circle object-fit-cover" height="50px" width="50px"/>
      </div>
      <hr>
      <div>
      <p class="card-text">
      </p>
      </div>
    </div>
  </div>
</div>
</template>