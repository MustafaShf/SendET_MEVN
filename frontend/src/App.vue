<script setup>
import { ref,onMounted } from "vue";

const toEmail = ref("");
const fromEmail = ref("");
const subject = ref("");
const body = ref("");
const emails=ref([]);


const fetchEmails=async ()=>{
  const response = await fetch("http://localhost:3000/emails");
     const data=await response.json();
     console.log(data);
     emails.value=data;
}

const sendEmail = async () => {
  try {
    const response = await fetch("http://localhost:3000/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toEmail: toEmail.value,
        fromEmail: fromEmail.value,
        subject: subject.value,
        body: body.value,
      }),
    });

    const data = await response.text();
    alert(data);
    fetchEmails()
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

onMounted(fetchEmails())
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-[#0F172A]">
    <form @submit.prevent="sendEmail" class="w-1/3 bg-[#1E293B] p-6 rounded-lg shadow-md">
      <label for="to" class="block text-sm font-medium text-gray-300">To</label>
      <input v-model="toEmail" type="email"
        class="w-full p-2 mt-1 mb-3 rounded-md bg-[#334155] text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none">

      <label for="from" class="block text-sm font-medium text-gray-300">From</label>
      <input v-model="fromEmail" type="email"
        class="w-full p-2 mt-1 mb-3 rounded-md bg-[#334155] text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none">

      <label for="Sub" class="block text-sm font-medium text-gray-300">Subject</label>
      <input v-model="subject" type="text"
        class="w-full p-2 mt-1 mb-3 rounded-md bg-[#334155] text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none">

      <label for="body" class="block text-sm font-medium text-gray-300">Email</label>
      <textarea v-model="body" rows="4"
        class="w-full p-2 mt-1 mb-3 rounded-md bg-[#334155] text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
      
      <button type="submit"
        class="w-full mt-3 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
        Submit
      </button>
    </form>
    <div class="w-1/5 h-1/2 ml-4 bg-[#1E293B] p-6 rounded-lg shadow-md text-gray-100 overflow-y-auto">
  <p class="text-lg font-semibold mb-4">History</p>

  <div v-for="email in emails" :key="email._id" class="flex items-center justify-between p-3 mb-2 bg-[#334155] rounded-md shadow-md">
    <div>
      <p class="text-sm text-gray-300"><span class="font-semibold">To:</span> {{ email.to }}</p>
      <p class="text-sm text-gray-300"><span class="font-semibold">Subject:</span> {{ email.subject }}</p>
    </div>
    <div :class="['w-3 h-3 rounded-full', email.isOpened ? 'bg-green-500' : 'bg-red-500']"></div>
  </div>
</div>


  </div>
</template>
