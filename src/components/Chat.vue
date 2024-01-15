<template>
  <div class="chat flex flex-col justify-center items-center">
    <h2 class="text-center text-teal-500 my-10">Jamshid</h2>
    <div class="card shadow-md rounded-md w-[800px] border">
      <div class="card-content p-6">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="text-teal-500">{{ message.name }}</span>
            <span class="mx-1">{{ message.content }}</span>
            <span class="text-gray-400 block text-sm"> {{ formattedDate(message.timestamp) }}</span>
          </li>
        </ul>
      </div>
      <hr />
      <div class="card-action flex p-6">
        <Message :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Message from './Message.vue'
import db from '@/firebase/init'
import { doc, collection, onSnapshot, orderBy } from 'firebase/firestore'
export default {
  name: 'chat',
  props: ['name'],
  data() {
    return {
      messages: []
    }
  },

  components: { Message },

  created() {
    const unsubscribe = onSnapshot(
      collection(db, 'jamshid-chat'),
      orderBy('timestamp'),
      (snapshot) => {
        snapshot
          .docChanges()

          .forEach((change) => {
            console.log(change.doc.data())
            if (change.type == 'added') {
              let doc = change.doc
              this.messages.push({
                id: doc.id,
                name: doc.data().name,
                content: doc.data().content,
                timestamp: doc.data().timestamp
              })
            }
          })
      }
    )
  },
  methods: {
    formattedDate(time) {
      const milliseconds = time.seconds * 1000 + time.nanoseconds / 1e6
      return moment(milliseconds).format('lll')
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2.6em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background-color: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background-color: #aaa;
}
</style>
