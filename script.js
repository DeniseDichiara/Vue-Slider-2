// * Con JS mostro solo l'elemento che è active, glia ltri restano invisibili. Faccio un'unica slide e gestico come cambiare l'indirizzo della slide interessata (IT)

// & With JS I only show the element that is active, and others remain invisible. I make a single slide and manage how to change the address of the affected slide (EN)

// ^ Con JS solo muestro el elemento que es activo, los otros permanecen invisibles. Hago una sola diapositiva y luego cambiaré  la dirección de la diapositiva que aparece (ES)



const { createApp } = Vue;

createApp({
    data() {
        return {

            // ARRAY
            images: [
                'https://upload.wikimedia.org/wikipedia/commons/e/e5/Tinuy-an_Falls%2C_Bislig_City%2C_Philippines.jpg',
                'https://www.journeylatinamerica.com/app/uploads/destinations/argentina/igauzu/arg_iguazu_shutterstock_1338447983-1200x800-c-center.jpg',
                'https://www.visitbushkillfalls.com/media/824699/bushkill-falls-walkway-1-carousel.jpg?anchor=center&mode=crop&width=1490&height=745&rnd=133250177300000000',
                'https://www.atlantatrails.com/wp-content/uploads/2017/08/minnehaha-falls-georgia-trail.jpg'

            ]
        }
    },
    methods: {
        
    },
}).mount('#app');

