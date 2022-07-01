<template>
    <main class="grid grid-cols-12">
        <section class="col-span-2 border-r text-sm">
            <div class="p-1 text-secondary-4 pl-4 border-b mb-4"><i class="mr-2 i ri:arrow-down-s-fill" />contacts</div>
            <div class="flex pl-2 items-center"><i class="i ri:mail-fill mx-2" /> creazyhell@gmail.com</div>
            <div class="flex pl-2 items-center"><i class="i ri:phone-fill mx-2" /> 0117446242</div>
            <div class="flex pl-2 items-center"><i class="i ri:phone-fill mx-2" /> 0997153238</div>
            <div class="p-1 text-secondary-4 pl-4 border-b my-4 border-t"><i
                    class="mr-2 i ri:arrow-down-s-fill" />loaction</div>
            <div class="flex pl-2 items-center"><i class="i ri:map-line mx-2" />khartoum - sudan</div>
        </section>
        <section class="col-span-5 border-r flex flex-col justify-center items-center px-[15%]">
            <form v-if="showForm" class="flex flex-col w-full gap-4">
                <div>
                    <label class="text-secondary-4" for="">_name :</label>
                    <input v-model="dataName" class="contact-form" type="text">
                </div>
                <div>
                    <label class="text-secondary-4" for="">_email :</label>
                    <input v-model="dataEmail" class="contact-form" type="email">
                </div>
                <div>
                    <label class="text-secondary-4" for="">_message :</label>
                    <textarea v-model="dataBody" class="contact-form" name="" id="" rows="6"></textarea>
                </div>
                <button @click.prevent="submitForm"
                    class="bg-secondary-3 text-secondary-4 px-2 py-1 w-max rounded">submit</button>
            </form>
            <div v-if="!showForm" class="text-center">
                <div class="text-secondary-4">all good !</div>
                <div>thanks for reaching out</div>
                <div>I'll replay as soon as possible</div>
                <button @click="handleresend" class="bg-secondary-3 text-secondary-4 rounded mt-4 px-2 py-1">send
                    another?</button>
            </div>
        </section>
        <section class="col-span-5 flex flex-col items-center">

            <div class="w-50ch text-secondary-3 mt-24 break-words">
                1
                <span class="mr-6" /> <span class="text-accent-4">const</span> button = document.querySelector(<span
                    class="text-accent-1">'#sumbit-btn'</span>);
                <br>
                2
                <span class="mr-6" />
                <br>
                3
                <span class="mr-6" /> <span class="text-accent-4">const</span> message = {
                <br>
                4
                <span class="mr-6" /> name = <span class="text-accent-1">"{{ dataName }}"</span>,
                <br>
                5
                <span class="mr-6" /> email = <span class="text-accent-1">"{{ dataEmail }}"</span>,
                <br>
                6
                <span class="mr-6" /> message = <span class="text-accent-1">"{{ dataBody }}"</span>
                <br>
                7
                <span class="mr-6" /> }
                <br>
                8
                <span class="mr-6" />
                <br>
                9
                <span class="mr-6" /> button.addEventListener(<span class="text-accent-1">'click'</span>, ( ) => {
                <br>
                10
                <span class="mr-6" /> form.send(message);
                <br>
                11
                <span class="mr-6" /> })
            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
import { ref } from "vue";

const dataName = ref('')
const dataEmail = ref('')
const dataBody = ref('')
const showForm = ref(true)

const handleresend = () => {
    showForm.value = true
}
const submitForm = () => {
    showForm.value = false
}

</script>