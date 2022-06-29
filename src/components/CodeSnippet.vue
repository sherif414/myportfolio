<template>
    <div class="my-8 w-full">
        <div class="flex justify-between">
            <div class="flex">
                <img src="../assets/pic.jpg" class="rounded-[50%] w-8 h-8" alt="profile pic">
                <div class="text-xs ml-2">
                    <div class="text-secondary-3">@sherif414</div>
                    <div>Created 5 months ago</div>
                </div>
            </div>
            <div class="flex items-center">
                <i class="i ri:message-line mr-2" /><span class="mr-4">details</span>
                <i class="i ri:star-fill mr-2" /><span class="flex">414 stars</span>
            </div>
        </div>
        <div class="bg-primary-3 mt-4 text-sm border rounded-lg p-4">
            <i class="text-accent-1">fun</i> <i class="text-secondary-3">startOperation</i> (<i
                class="text-accent-2">codeName</i>: String, <i class="text-accent-2">target</i>:
            targetOptions){
            <br>
            <i class="text-accent-1 ml-4">try </i>{
            <br>
            <i class="text-secondary-3 ml-8">releaseDaNukes</i>(loaction = <i class="text-accent-2">target</i>)
            <br>
            <span class="ml-4">}</span>
            <br>
            <i class="text-accent-1 ml-4">catch</i>{
            <br>
            <span class="ml-8 text-accent-1">throw</span> "operation <i class="text-secondary-2">$codeName</i>
            unsuccessful !"
            <br>
            <span class="ml-4">}</span>
            <br>
            }
            <br>
            <i class="text-secondary-3">startOperation</i>(codeName = <i class="text-secondary-2">'kill Da hoes'</i>,
            target = <i class="text-secondary-2">'kizan'</i>)
        </div>
        <div class="flex justify-end mt-2">
            <button class="bg-secondary-3 py-1 px-4 rounded-lg text-secondary-4">
                run
            </button>
        </div>
    </div>
</template>