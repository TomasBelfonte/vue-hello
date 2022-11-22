const { createApp } = Vue

    createApp({
        data() {
            return {
                message: "Tomas Belfonte",
                img:"img/20-3670x2462.jpg",
                classi: "container text-center mt-5 mb-5" 
            }
        }
    }).mount('#app')