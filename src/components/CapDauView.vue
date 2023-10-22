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
                    <input type="text" id="maso" v-model="maso" :class="{ 'border-red-500': !maso && addData }" required />
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ngay_dau">Ngày đấu: </label>
                    <input type="date" id="ngay_dau" v-model="ngay_dau" :class="{ 'border-red-500': !ngay_dau && addData }"
                        required />
                    <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="thoi_gian">Thời gian đấu: </label>
                    <input type="time" id="thoi_gian" v-model="thoi_gian"
                        :class="{ 'border-red-500': !thoi_gian && addData }" required />
                    <!-- <div v-if="!thoi_gian" class="text-red-500">Thời gian đấu không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="dia_diem">Địa điểm: </label>
                    <input type="text" id="dia_diem" v-model="dia_diem" :class="{ 'border-red-500': !dia_diem && addData }"
                        required />
                    <!-- <div v-if="!dia_diem" class="text-red-500">Địa điểm không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="doi_nhaID">Đội nhà: </label>
                    <select id="doi_nhaID" v-model="doi_nhaID" :class="{ 'border-red-500': !doi_nhaID && addData }">
                        <option v-for="(clb, index) in caulacbos" :key="index" v-bind:value="clb.maso">{{ clb.ten }}
                        </option>
                    </select>
                    <!-- <div v-if="!doi_nhaID" class="text-red-500">Đội nhà không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="doi_khachID">Đội khách: </label>
                    <select id="doi_khachID" v-model="doi_khachID" :class="{ 'border-red-500': !doi_khachID && addData }">
                        <option v-for="(clb, index) in caulacbos" :key="index" v-bind:value="clb.maso">{{ clb.ten }}
                        </option>
                    </select>
                    <!-- <div v-if="!doi_khachID" class="text-red-500">Đội khách không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ty_so">Tỷ số: </label>
                    <input type="number" id="ty_so" v-model="ty_so[0]" :class="{ 'border-red-500': !ty_so[0] && addData }"
                        required />
                    <input type="number" id="ty_so" v-model="ty_so[1]" :class="{ 'border-red-500': !ty_so[1] && addData }"
                        required />
                    <!-- <div v-if="!dia_diem" class="text-red-500">Địa điểm không được để trống.</div> -->
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
                    <input type="text" id="maso" v-model="thongtinSua.data.maso"
                        :class="{ 'border-red-500': !thongtinSua.data.maso && suaData }" required />
                    <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ngay_dau">Ngày đấu: </label>
                    <input type="date" id="ngay_dau" v-model="thongtinSua.data.ngay_dau"
                        :class="{ 'border-red-500': !thongtinSua.data.ngay_dau && suaData }" required />
                    <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="thoi_gian">Thời gian đấu: </label>
                    <input type="time" id="thoi_gian" v-model="thongtinSua.data.thoi_gian"
                        :class="{ 'border-red-500': !thongtinSua.data.thoi_gian && suaData }" required />
                    <!-- <div v-if="!thoi_gian" class="text-red-500">Thời gian đấu không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="dia_diem">Địa điểm: </label>
                    <input type="text" id="dia_diem" v-model="thongtinSua.data.dia_diem"
                        :class="{ 'border-red-500': !thongtinSua.data.dia_diem && suaData }" required />
                    <!-- <div v-if="!dia_diem" class="text-red-500">Địa điểm không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="doi_nhaID">Đội nhà: </label>
                    <select id="doi_nhaID" v-model="thongtinSua.data.doi_nha.maso"
                        :class="{ 'border-red-500': !thongtinSua.data.doi_nha.maso && suaData }">
                        <option v-for="(clb, index) in caulacbos" :key="index" v-bind:value="clb.maso">{{ clb.ten }}
                        </option>
                    </select>
                    <!-- <div v-if="!doi_nhaID" class="text-red-500">Đội nhà không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="doi_khachID">Đội khách: </label>
                    <select id="doi_khachID" v-model="thongtinSua.data.doi_khach.maso"
                        :class="{ 'border-red-500': !thongtinSua.data.doi_khach.maso && suaData }">
                        <option v-for="(clb, index) in caulacbos" :key="index" v-bind:value="clb.maso">{{ clb.ten }}
                        </option>
                    </select>
                    <!-- <div v-if="!doi_khachID" class="text-red-500">Đội khách không được để trống.</div> -->
                </div>
                <div class="mb-4">
                    <label for="ty_so">Tỷ số: </label>
                    <input type="number" id="ty_so" v-model="thongtinSua.data.ty_so[0]"
                        :class="{ 'border-red-500': !thongtinSua.data.ty_so[0] && suaData }" required />
                    <input type="number" id="ty_so" v-model="thongtinSua.data.ty_so[1]"
                        :class="{ 'border-red-500': !thongtinSua.data.ty_so[1] && suaData }" required />
                    <!-- <div v-if="!dia_diem" class="text-red-500">Địa điểm không được để trống.</div> -->
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
        <!-- <table>
            <thead>
                <tr>
                    <th>Mã cặp đấu</th>
                    <th>Ngày đấu</th>
                    <th>Thời gian</th>
                    <th>Địa điểm</th>
                    <th>Đội nhà</th>
                    <th>Đội khách</th>
                    <th>Tỷ số</th>
                    <th>Tùy chỉnh</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(capdau, index) in capdaus" :key="index">
                    <td>{{ capdau.maso }}</td>
                    <td>{{ capdau.ngay_dau.toString() }}</td>
                    <td>{{ capdau.thoi_gian.toString() }}</td>
                    <td>{{ capdau.dia_diem }}</td>
                    <td>{{ capdau.doi_nha.ten }}</td>
                    <td>{{ capdau.doi_khach.ten }}</td>
                    <td>{{ capdau.ty_so }}</td>
                    <td>
                        <button style="background-color: chartreuse; border: none; border-radius: 4px;"
                            v-on:click="sua(index)">Sửa</button>
                        <button style="background-color: red; border: none; border-radius: 4px;"
                            v-on:click="deleteData(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table> -->
        <div class="capdau-card" v-for="(capdau, index) in capdaus" :key="index">
            <div class="head">
                <div class="item-club">
                    <div class="club-name">{{ capdau.doi_nha.ten }}</div>
                    <div class="line"></div>
                    <div class="club-score">{{ capdau.ty_so[0] }}</div>
                </div>
                <div style="width: 100%; height: 1px; background-color: gray;"></div>
                <div class="item-club">
                    <div class="club-name">{{ capdau.doi_khach.ten }}</div>
                    <div class="line"></div>
                    <div class="club-score">{{ capdau.ty_so[1] }}</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="capdau-time">
                <label>{{ capdau.thoi_gian }}, {{ capdau.ngay_dau.toString() }}</label>
            </div>
            <div
                style="display: flex; flex-direction: column; padding: 0px 4px 0px 4px; justify-content: center; align-items: center;">
                <button style="background-color: chartreuse; border: none; border-radius: 4px;"
                    v-on:click="sua(index)">Sửa</button>
                <div style="width: 100%; height: 1px; background-color: gray; margin-top: 4px; margin-bottom: 4px;" ></div>
                <button style="background-color: red; border: none; border-radius: 4px;"
                    v-on:click="deleteData(index)">Xóa</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import CapDau from './CapDau.vue';
import CauLacBo from './CauLacBo.vue';
import Const from './Const.vue';

export default {
    data() {
        return {
            isThem: false,
            maso: '',
            ngay_dau: new Date(),
            thoi_gian: '',
            dia_diem: '',
            doi_nhaID: '',
            doi_khachID: '',
            ty_so: [0, 0],
            caulacbos: Const.instance.caulacbos,
            thongtinSua: {
                isSua: false,
                data: new CapDau(),
                index: 0,
            }
        }
    },
    props: {
        capdaus: Array<CapDau>
    },
    methods: {
        deleteData(index: number) {
            this.capdaus?.splice(index, 1);
        },
        addData() {
            console.log(this.doi_nhaID);
            let capdau: CapDau = new CapDau(
                this.maso,
                this.ngay_dau,
                this.thoi_gian,
                this.dia_diem,
                Const.instance.caulacbos.find((c: CauLacBo) => c.maso == this.doi_nhaID),
                Const.instance.caulacbos.find((c: CauLacBo) => c.maso == this.doi_khachID),
            );
            capdau.ty_so = this.ty_so;
            this.capdaus?.push(capdau);
            this.isThem = false;
        },
        sua(index: number) {
            this.thongtinSua.isSua = true;
            this.thongtinSua.index = index;
            this.capdaus && (this.thongtinSua.data = this.capdaus[index]);
        },
        suaData() {
            if (this.capdaus) {
                this.capdaus[this.thongtinSua.index] = this.thongtinSua.data;
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
}

.capdau-card {
    display: flex;
    flex-direction: row;
    width: 60%;
    padding: 8px 8px 8px 8px;
    background-color: lightgray;
    margin: 4px 0px 0px 0px;
    border: none;
    border-radius: 4px;
}

.capdau-card .head {
    width: 70%;
    display: flex;
    flex-direction: column;
}

.capdau-card .head .item-club {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.capdau-card .head .item-club .club-name {
    width: 80%;

}

.capdau-card .head .item-club .club-score {
    width: 20%;
    text-align: center;
}

.capdau-card .line {
    height: 100%;
    width: 1px;
    background-color: gray;
}

.capdau-card .capdau-time {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0px 12px 0px 12px;
    background-color: lightgray;
}</style>