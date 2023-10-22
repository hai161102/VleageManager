<template>
    <div class="view-form">
        <h2>Thêm mới cầu thủ</h2>
        <form @submit.prevent="addData">
            <div class="mb-4">
                <label for="soao">Số áo: </label>
                <input type="text" id="soao" v-model="cauthu.soao" :class="{ 'border-red-500': !cauthu.soao && addData }"
                    required />
                <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
            </div>
            <div class="mb-4">
                <label for="ten">Tên cầu thủ: </label>
                <input type="text" id="ten" v-model="cauthu.ten" :class="{ 'border-red-500': !cauthu.ten && addData }"
                    required />
                <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
            </div>
            <div class="mb-4">
                <label for="ngaysinh">Ngày sinh: </label>
                <input type="date" id="ngaysinh" v-model="cauthu.ngaysinh"
                    :class="{ 'border-red-500': !cauthu.ngaysinh && addData }" required />
                <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
            </div>

            <div class="mb-4">
                <label for="dia_diem">Vị trí: </label>
                <input type="text" id="dia_diem" v-model="cauthu.vitri"
                    :class="{ 'border-red-500': !cauthu.vitri && addData }" required />
                <!-- <div v-if="!dia_diem" class="text-red-500">Địa điểm không được để trống.</div> -->
            </div>
            <button type="submit">
                Thêm
            </button>
        </form>
        <button style="width: 20%; margin-top: 12px; border: none; border-radius: 4px; background-color: gray;" v-on:click="thoat">Thoát</button>
    </div>
</template>
<script lang="ts">
import CauLacBo from './CauLacBo.vue';
import Cauthu from './Cauthu.vue';

export default {
    data() {
        return {
            prt: this.$parent,
            cauthu: {
                soao: '',
                ten: '',
                ngaysinh: new Date(),
                vitri: '',
            }
        }
    },
    methods: {
        addData() {
            let ct: Cauthu = new Cauthu({ maso: this.cauthu.soao, ten: this.cauthu.ten, ngaySinh: this.cauthu.ngaysinh }, this.cauthu.vitri);
            if (ct) {
                this.$emit('onAddCauthu', ct);
            }
        },
        thoat() {
            this.$emit('onAddCauthu', null);
        }
    },
}
</script>

<style scoped>
.view-form {
    color: black;
    width: 90%;
    font-size: 24px;
    font-family: 'Times New Roman';
    padding: 5% 5% 5% 5%;
    margin: 5% 5% 5% 5%;
    border: 1px solid gray;
    border-radius: 8px;
    margin-top: 24px;
    background-color: white;
}
h2 {
    width: 100%;
    text-align: center;
}
form {
    width: 100%;
    margin-top: 24px;
}
.mb-4 {
    display: flex;
    flex-direction: row;
}
label {
    flex: 1;
}
input {
    flex: 2;
    width: 50%;
    right: 2px;
    height: 100%;
    font-size: 20px;
    border-radius: 4px;
    border: 0.5px solid gray;
    padding: 4px;
    font-family: 'Times New Roman';
}

input:focus {
    outline: none;
}

button {
    width: 20%;
    height: auto;
    font-size: 20px;
    background-color: chartreuse;
    border-radius: 4px;
    border: none;
    padding: 8px;
    margin-top: 12px;
    font-family: 'Times New Roman';
}
</style>