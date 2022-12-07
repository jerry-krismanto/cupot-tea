<template>
  <header class="p-1 bg-gray-800 text-gray-300 shadow-md">
      <nav class="flex flex-row justify-center md:justify-between items-center">
        <a href="index.html">
          <div class="flex flex-row items-center md:ml-20">
            <img class="w-24" src="assets/logo/logo.png" alt="logo" />
            <h2 class="text-3xl font-bold ml-5">CupOT</h2>
          </div>
        </a>
        <ul class="flex flex-row items-center hidden md:flex">
          <li class="mr-5"><a href="index.html">Home</a></li>
          <li class="mr-5"><a href="about.html">About</a></li>
          <li class="mr-5"><a href="teas.html">Our Tea</a></li>
          <li class="mr-5"><a href="leaves.html">Tea leaves</a></li>
          <li class="ml-10 mr-10 relative p-3">
            <a href="/cart.html">
              <img class="w-10" src="assets/icons/shopping-cart.png" alt="cart" style="filter: invert(0.9);"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
</template>
