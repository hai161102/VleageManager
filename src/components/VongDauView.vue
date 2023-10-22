<template>
    <div class="view">
        <div style="width: 100%;">
            <button style="
            border: none; 
            background-color: chartreuse; 
            padding: 8px 12px 8px 12px;
            width: 20%;
            border-radius: 4px;" v-on:click="isThem = true">Thêm</button>
        </div>
        <div class="view-them" v-if="isThem == true">
            <form @submit.prevent = "addData">
                <div class="mb-4">
                    <label for="maso">Mã số: </label>
                    <input type="text" id="maso" v-model="vd.maso" :class="{ 'border-red-500': !vd.maso && addData }" required/>
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ngay_dau">Tên vòng đấu: </label>
                    <input type="text" id="ngay_dau" v-model="vd.ten" :class="{ 'border-red-500': !vd.ten && addData }" required/>
                    <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
                </div>
                <button type="submit" style="
                border: none; 
                background-color: chartreuse; 
                padding: 8px 12px 8px 12px;
                width: 10%;
                margin-top: 20px;
                border-radius: 4px;">
                    Thêm
                </button>
            </form>
        </div>
        <div class="view-them" v-if="thongtinSua.isSua == true">
            <form @submit.prevent ="suaData">
                <div class="mb-4">
                    <label for="maso">Mã số: </label>
                    <input type="text" id="maso" v-model="thongtinSua.data.maso" :class="{ 'border-red-500': !thongtinSua.data.maso && suaData }" required/>
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ngay_dau">Tên vòng đấu: </label>
                    <input type="text" id="ngay_dau" v-model="thongtinSua.data.ten" :class="{ 'border-red-500': !thongtinSua.data.ten && suaData }" required/>
                    <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
                </div>
                <button type="submit" style="
                border: none; 
                background-color: chartreuse; 
                padding: 8px 12px 8px 12px;
                width: 10%;
                margin-top: 20px;
                border-radius: 4px;">
                    Sửa
                </button>
            </form>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Mã vòng đấu</th>
                    <th>Tên vòng đấu</th>
                    <th>Tùy chỉnh</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(vongdau, index) in vongdaus" :key="index">
                    <td>{{ vongdau.maso }}</td>
                    <td>{{ vongdau.ten }}</td>
                    <td>
                        <button style="background-color: chartreuse; border: none; border-radius: 4px;" v-on:click="sua(index)">Sửa</button>
                        <button style="background-color: red; border: none; border-radius: 4px;" v-on:click="deleteData(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import VongDau from './VongDau.vue';

export default {
    data() {
        return {
            isThem : false,
            vd : {
                maso : '',
                ten : '',
            },
            thongtinSua: {
                isSua: false,
                data: new VongDau(),
                index: 0,
            }
        }
    },
    props : {
        vongdaus : Array<VongDau>
    },
    methods: {
        deleteData(index : number) {
            this.vongdaus?.splice(index, 1);
        },
        addData() {
            let vongdau : VongDau = new VongDau(
                this.vd.maso,
                this.vd.ten,
            );
            this.vongdaus?.push(vongdau);
            this.isThem = false;
        },
        sua(index : number) {
            this.thongtinSua.isSua = true;
            this.thongtinSua.index = index;
            this.vongdaus && (this.thongtinSua.data = this.vongdaus[index]);
        },
        suaData() {
            if (this.vongdaus) {
                this.vongdaus[this.thongtinSua.index] = this.thongtinSua.data;
                this.thongtinSua.isSua = false;
                this.thongtinSua.index = 0;
            }
        }

    }
}
</script>
<style scoped>
.view {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;
    padding: 10px 10px 10px 10px;
    justify-content: center;
    align-items: center;
}

.view-them {
    width: 90%;
    padding: 8px 8px 8px 8px;
    border: 1px solid #000000;
    border-radius: 8px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
}
.mb-4 {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 4px;
}

label {
    flex: 1;
}

input,
select {
    flex: 2;
    border-radius: 4px;
    border: 0.5px solid lightgray;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    outline: none;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 24px;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background-color: #f2f2f2;
    text-align: center;
}
button{
    font-family: 'Times New Roman';
}
</style>