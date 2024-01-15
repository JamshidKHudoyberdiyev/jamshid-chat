<template>
  <div class="new-message">
    <form @submit.prevent="addNewMessage">
      <label for="new-message" class="my-2 text-gray-400 text-[12px]">
        New message (inter to add):
      </label>
      <input
        id="name"
        v-model="newMessage"
        type="text"
        class="border-b-gray-400 w-[100%] text-[20px] border-b-2 outline-none p-2"
      />
      <p v-if="feedback" class="text-red-600 my-2">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import { collection, doc, setDoc } from 'firebase/firestore'
export default {
  props: ['name'],
  data() {
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    addNewMessage() {
      if (this.newMessage) {
        const newProduct = doc(collection(db, 'jamshid-chat'))

        setDoc(newProduct, {
          content: this.newMessage,
          name: this.name,
          timestamp: new Date()
        })
          .then(() => {})
          .catch((error) => {
            console.log(error)
          })
        this.newMessage = null
      } else {
        this.feedback = 'You must enter a message in order to sent one'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.new-message {
  flex-direction: column;

  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
