const { createApp } = Vue

    createApp({
        data() {
            return {
                message: "Tomas Belfonte",
                img:"https://i.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
            }
        }
    }).mount('#app')