<template>
  <div class="welcome flex justify-center items-center h-lvh">
    <div class="card p-8 border rounded-md shadow-md w-2/3">
      <div class="card-container w-[100%] flex justify-center flex-col py-5 items-center gap-6">
        <h1 class="text-teal-600 text-[60px]">Welcome</h1>

        <input
          id="name"
          v-model="name"
          placeholder="Enter your name"
          type="text"
          class="w-[70%] block border-b-gray-400 text-[20px] border-b-2 outline-none p-2"
        />
        <p v-if="feedbeck" class="text-red-600">{{ feedbeck }}</p>

        <button
          @click="enterChat"
          class="px-10 py-4 text-uppercase border mt-2 bg-teal-600 text-white font-mono font-bold rounded-md"
        >
          Enter chat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: '',
      feedbeck: ''
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'chat', params: { name: this.name } })
      } else {
        this.feedbeck = 'Please enter name'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
