<template>
    <div class="trangchu">
        <h1>TRANG CHỦ</h1>
        <div class="bar">
            <button class="item-bar" v-on:click="currentState = 1">Giải đấu</button>
            <button class="item-bar" v-on:click="currentState = 2">Vòng đấu</button>
            <button class="item-bar" v-on:click="currentState = 3">Cặp đấu</button>
        </div>
        <div class="button-list">
            <button class="option-btn" v-on:click="$emit('addCLB')">Thêm câu lạc bộ</button>
            <button class="option-btn" v-on:click="$emit('addHLV')">Thêm huấn luyện viên</button>
            <button class="option-btn" v-on:click="$emit('addCT')">Thêm cầu thủ</button>
        </div>
        <GiaiDauView v-if="currentState == 1" :giaidaus="giaidaus" />
        <VongDauView v-if="currentState == 2" :vongdaus="vongdaus" />
        <CapDauView v-if="currentState == 3" :capdaus="capdaus" />
    </div>
</template>

<script lang="ts">
import GiaiDauView from './GiaiDauView.vue';
import VongDauView from './VongDauView.vue';
import CapDauView from './CapDauView.vue';
import Const from './Const.vue';

export default {
    data() {
        return {
            currentState: 1,
            giaidaus: Const.instance.giaidaus,
            vongdaus: Const.instance.vongdaus,
            capdaus: Const.instance.capdaus
        };
    },
    components: {
        GiaiDauView,
        VongDauView,
        CapDauView,
    },
    methods: {

    }


}
</script>

<style scoped>
.trangchu {

    color: rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Times New Roman';
    width: 100%;
    height: 1024px;
    background-color: white;
    border-radius: 12px;
}

h1 {
    width: 100%;
    text-align: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: chartreuse;
}

.trangchu .bar {
    width: 80%;
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 12px;
}

.trangchu .bar .item-bar {
    flex: 1;
    text-align: center;
    padding: 10px 10px 10px 10px;
    border-radius: 8px;
    background-color: aqua;
    margin-left: 12px;
    margin-right: 12px;
    border: none;
    font-size: 24px;
    font-family: 'Times New Roman';
    box-shadow: black 0px 2px;
}

.trangchu .bar .item-bar:focus {
    border: 1px solid gray;
}

.item-bar:hover {
    scale: 1.1;
}

.button-list {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 8px 8px 8px 8px;
    background-color: lightgray;
}

.option-btn {
    margin-left: 5px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    padding: 8px;
    background-color: antiquewhite;
    font-family: 'Times New Roman';
    box-shadow: black 0px 2px;
}
</style>