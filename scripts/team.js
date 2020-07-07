Vue.config.devtools = true;

Vue.component('Card', {
    template: `
    <div class="card-wrap"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        ref="Card">
        <div class="Card members"
        :style="">
        <div class="card-Bg" :style="[cardBgImage]"></div>
        <div class="card-info">
            <slot name="header"></slot>
            <slot name="content"></slot>
            </div>
        </div>
    </div>`,
    props: ['dataImage'],
    data: () => ({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null
    }),

    computed: {
        cardBgImage() {
            return {
                backgroundImage: `url(${this.dataImage})`
            };
        }
    },

    methods: {
        handleMouseMove(e) {
            this.mouseX = 0;
            this.mouseY = 0;
        },
        handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(() => {
                this.mouseX = 0;
                this.mouseY = 0;
            }, 10);
        }
    }
});

const board = new Vue({
    el: '#chapterLead'
});

const technical = new Vue({
    el: '#technical'
});

const socialMedia = new Vue({
    el: '#socialMedia'
});


const nonTech = new Vue({
    el: '#nonTech'
});

const webDev = new Vue({
    el: '#webDev'
});

const campusHero = new Vue({
    el: '#campusHero'
});

const creatives = new Vue({
    el: '#creatives'
});

const management = new Vue({
    el: '#management'
});