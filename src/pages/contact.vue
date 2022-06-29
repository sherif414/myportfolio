<template>
    <main class="grid grid-cols-12">
        <section class="col-span-2 border-r"></section>
        <section class="col-span-5 border-r grid place-content-center">
            <form class="flex flex-col gap-4">
                <div class="">
                    <label for="">name</label>
                    <input class="bg-primary-2 border w-full rounded px-2 py-1" type="text">
                </div>
                <div>
                    <label for="">email</label>
                    <input class="bg-primary-2 border w-full rounded px-2 py-1" type="text">
                </div>
                <div>
                    <label for="">message</label>
                    <textarea class="bg-primary-2 border w-full rounded px-2 py-1" name="" id="" cols="40"
                        rows="6"></textarea>
                </div>
                <button class="bg-lines text-secondary-4 px-4 py-2 w-max rounded">submit-message</button>
            </form>
        </section>
        <section class="col-span-5"></section>
    </main>
</template>
<script setup lang="ts">

</script>