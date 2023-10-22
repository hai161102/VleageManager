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
            <form @submit.prevent="addData">
                <div class="mb-4">
                    <label for="maso">Mã số: </label>
                    <input type="text" id="maso" v-model="gd.maso" :class="{ 'border-red-500': !gd.maso && addData }"
                        required />
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ten">Tên giải đấu: </label>
                    <input type="text" id="ten" v-model="gd.ten" :class="{ 'border-red-500': !gd.ten && addData }"
                        required />
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ngay_dau">Ngày bắt đầu: </label>
                    <input type="date" id="ngay_dau" v-model="gd.ngaybatdau"
                        :class="{ 'border-red-500': !gd.ngaybatdau && addData }" required />
                    <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="thoi_gian">Ngày kết thúc: </label>
                    <input type="date" id="thoi_gian" v-model="gd.ngayketthuc"
                        :class="{ 'border-red-500': !gd.ngayketthuc && addData }" required />
                    <!-- <div v-if="!thoi_gian" class="text-red-500">Thời gian đấu không được để trống.</div> -->
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
            <form @submit.prevent="suaData">
                <div class="mb-4">
                    <label for="maso">Mã số: </label>
                    <input type="text" id="maso" v-model="thongtinSua.data.maso" :class="{ 'border-red-500': !thongtinSua.data.maso && suaData }"
                        required />
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ten">Tên giải đấu: </label>
                    <input type="text" id="ten" v-model="thongtinSua.data.ten" :class="{ 'border-red-500': !thongtinSua.data.ten && suaData }"
                        required />
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ngay_dau">Ngày bắt đầu: </label>
                    <input type="date" id="ngay_dau" v-model="thongtinSua.data.ngay_bat_dau"
                        :class="{ 'border-red-500': !thongtinSua.data.ngay_bat_dau && suaData }" required />
                    <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="thoi_gian">Ngày kết thúc: </label>
                    <input type="date" id="thoi_gian" v-model="thongtinSua.data.ngay_ket_thuc"
                        :class="{ 'border-red-500': !thongtinSua.data.ngay_ket_thuc && suaData }" required />
                    <!-- <div v-if="!thoi_gian" class="text-red-500">Thời gian đấu không được để trống.</div> -->
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
                    <th>Mã giải đấu</th>
                    <th>Tên Giải đấu</th>
                    <th>Ngày bắt đàu</th>
                    <th>Ngày kết thúc</th>
                    <th>Tùy chỉnh</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(giaidau, index) in giaidaus" :key="index">
                    <td>{{ giaidau.maso }}</td>
                    <td>{{ giaidau.ten }}</td>
                    <td>{{ giaidau.ngay_bat_dau.toString() }}</td>
                    <td>{{ giaidau.ngay_ket_thuc.toString() }}</td>
                    <td>
                        <button style="background-color: chartreuse; border: none; border-radius: 4px;"
                            v-on:click="sua(index)">Sửa</button>
                        <button style="background-color: red; border: none; border-radius: 4px;"
                            v-on:click="deleteData(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import GiaiDau from './GiaiDau.vue';

export default {
    data() {
        return {
            isThem: false,
            gd: {
                maso: '',
                ten: '',
                ngaybatdau: new Date(),
                ngayketthuc: new Date(),
            },
            thongtinSua: {
                isSua: false,
                data: new GiaiDau(),
                index: 0,
            }
        }
    },
    props: {
        giaidaus: Array<GiaiDau>,
    },
    methods: {
        deleteData(index: number) {
            this.giaidaus?.splice(index, 1);
        },
        addData() {
            let giaidau = new GiaiDau(
                this.gd.maso,
                this.gd.ten,
                this.gd.ngaybatdau,
                this.gd.ngayketthuc
            )
            this.giaidaus?.push(giaidau);
            this.isThem = false;
        },
        sua(index: number) {
            this.thongtinSua.isSua = true;
            this.thongtinSua.index = index;
            this.giaidaus && (this.thongtinSua.data = this.giaidaus[index]);
        },
        suaData() {
            if (this.giaidaus) {
                this.giaidaus[this.thongtinSua.index] = this.thongtinSua.data;
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

button {
    font-family: 'Times New Roman';
}</style>