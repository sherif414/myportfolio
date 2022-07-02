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
            * as a creator.
            <br>
            * aside from coding I play lots of games specially real-time
            <br>
            * strategy titles like age of empires and civilizatons.
            <br>
            * /
        </p>

    </div>
    <div v-if="store.currSheet === 'skills'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * although I do like to focus on one thing and hone my skills
            <br>
            * on it, knowing its ins and outs, I do experiment with new
            <br>
            * tools and libraries every now and then, picking them up along
            <br>
            * the way so I can keep myself updated and further expand
            <br>
            * my knowledge.
            <br>
            * I'm most confident in my vue and css skills and they are
            <br>
            * the things I'm focusing on right now
            <br>
            * django is my little side-kick project and my entrance
            <br>
            * to backend development.
            <br>
            * /
        </p>
    </div>

    <div v-if="store.currSheet === 'formal'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * there isn't really much to say about my education journey
            <br>
            * it was some what ordinary, i maintained good grades through
            <br>
            * mid school graduating with a score of 266/280
            <br>
            * highschool was a bit rough at first but I managed to keep up and
            <br>
            * graduated with a 87.3% and here I'm a collage student studying
            <br>
            * software engineering at sudan university.
            <br>
            * but if I'm to be honest formal education wasn't really my thing
            <br>
            * and I prefered self-learning through youtube, books or the
            <br>
            * people I met through out my life.
            <br>
            * /
        </p>
    </div>
    <div v-if="store.currSheet === 'non-formal'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * youtube is my go to place when ever i'm learning
            <br>
            * something new, channels like programming with mosh taught
            <br>
            * me alot and i'm forever grateful to them
            <br>
            * another option is the offical docs of the tool i'm trying
            <br>
            * to learn which sometimes can be a life saver.
            <br>
            * generally speaking, any source of information would be
            <br>
            * ok, whats more important is the desire to learn
            <br>
            * and some good time management skills then anyone can
            <br>
            * learn anything.
            <br>
            * /
        </p>
    </div>
    <div v-if="store.currSheet === 'gaming'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * one word. "league of legends" - actually those are 3
            <br>
            * but you don't need to know math to become a programmer -
            <br>
            * its definatly the game i loved and hated the most i spent
            <br>
            * most of my free time playing it and when ever i felt stressed
            <br>
            * out by life it was my escape, and then i'd realize it was a dump
            <br>
            * idea cuz it made me even more stressed but hey it was "fun".
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
            * "nerf fiora plz"
            <br>
            * /
        </p>
    </div>
    <div v-if="store.currSheet === 'manga'" class="w-full grid justify-items-center pt-6">
        <p class="w-55ch ">
            / **
            <br>
            * i like manga blah blah blah..
            <br>
            * since I can post what ever BS I want on this
            <br>
            * website, ama just slide some manga recommendations here
            <br>
            *
            <br>
            * > grand blue - THE most hilarious shit I've ever read.
            <br>
            * > good night punpun - this gave some serious goosebumps.
            <br>
            * > tower of god - CHARACTER DEVELOPMENT don't sleep on
            <br>
            * this gem.
            <br>
            * /
        </p>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '../store/mainStore';

const store = useStore()
</script>