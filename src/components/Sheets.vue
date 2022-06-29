<template>
    <div v-if="store.currSheet === 'personal'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * Hi ! I'm shareef
            <br>
            * a 23 y.o collage student born and raised in sudan
            <br>
            * I mostly do frontend using tools like vue ,windicss and nuxt
            <br>
            * and some backend with django as a side kick .
            <br>
            * I'm open to freelancing and job offers so don't shy on
            <br>
            * hitting me up with an email.
            <br>
            *
            <br>
            * what I love the most about coding is how it helps me
            <br>
            * bring to life all the random crazy/silly ideas I get
            <br>
            * into creating all sort of projects that satisfies my urge
            <br>
            * as creator.
            <br>
            * aside from coding I play lots of games specially real-time
            <br>
            * strategy titles like age of empires and civilizatons.
            <br>
            * after a long marathon of coding all day nothing beats
            <br>
            * a good ol' manga with some snacks on the side
            <br>
            * /
        </p>

    </div>
    <div v-if="store.currSheet === 'skills'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * although I do like to focus one thing and hone my skills
            <br>
            * on it knowing its ins and outs, I do experiment with new
            <br>
            * tools and libraries every now and then, picking them along
            <br>
            * the way so i can keep myself updated and further expand
            <br>
            * my knowledge.
            <br>
            * I'm most confident in my vue and css skills and they are
            <br>
            * the things I'm focusing on right now
            <br>
            * django is my little sidekick project and my entrance into
            <br>
            * the world of backend development.
            <br>
            * /
        </p>
    </div>

    <div v-if="store.currSheet === 'formal'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * there is nothing much to say about my education journey
            <br>
            * it was pretty ordinary, i maintained good grades through
            <br>
            * mid schools graduating with a score of 266/280 , highschool
            <br>
            * was a bit rough at first but managed to keep up and graduated
            <br>
            * with a score 87.3% and here I'm a collage student majoring
            <br>
            * software engineering at sudan university.
            <br>
            * but if I'm to be honest formal education wasn't really my thing
            <br>
            * and I prefered self-learning through youtube, books or the
            <br>
            * amaizing people i was lucky to meet through out my life.
            <br>
            * /
        </p>
    </div>
    <div v-if="store.currSheet === 'non-formal'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * there is nothing much to say about my education journey
            <br>
            * it was pretty ordinary, i maintained good grades through
            <br>
            * mid schools graduating with a score of 266/280 , highschool
            <br>
            * was a bit rough at first but managed to keep up and graduated
            <br>
            * with a score 87.3% and here I'm a collage student majoring
            <br>
            * software engineering at sudan university.
            <br>
            * but if I'm to be honest formal education wasn't really my thing
            <br>
            * and I prefered self-learning through youtube, books or the
            <br>
            * amaizing people i was lucky to meet through out my life.
            <br>
            * /
        </p>
    </div>
    <div v-if="store.currSheet === 'gaming'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            * /
        </p>
    </div>
    <div v-if="store.currSheet === 'free time'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            *
            <br>
            * /
        </p>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '../store/mainStore';

const store = useStore()
</script>