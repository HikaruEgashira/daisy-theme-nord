<template>
  <h2 class="m-4 text-xl font-bold">Style Guide Demo</h2>

  <div class="m-4 space-x-2">
    <button class="btn">neutral</button>
    <button class="btn btn-primary">primaty</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-accent">accent</button>
    <button class="btn btn-info">info</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>
    <button class="btn btn-error">error</button>
  </div>

  <!-- tab -->
  <div class="m-4 tabs">
    <button class="tab tab-lifted">Tab 1</button>
    <button class="tab tab-lifted tab-active">Tab 2</button>
    <button class="tab tab-lifted">Tab 3</button>
  </div>

  <!-- toggle -->
  <div class="m-4 flex space-x-4">
    <input type="checkbox" class="toggle toggle-primary" />
    <input type="checkbox" class="toggle toggle-secondary" />
    <input type="checkbox" class="toggle toggle-accent" />
  </div>

  <!-- card -->
  <div class="card shadow-2xl w-80 m-4">
    <figure>
      <img src="https://picsum.photos/id/1005/500/250" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">DaisyUI Card</h2>
      <p>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus.
      </p>
    </div>
  </div>

  <!-- steps -->
  <ul class="steps m-4">
    <li class="step step-primary">Register</li>
    <li class="step step-primary">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
</template>
