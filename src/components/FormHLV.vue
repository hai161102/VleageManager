<template>
    <div class="view-form">
        <h2>Thêm mới huấn luyện viên</h2>
        <form @submit.prevent = "addData">
            <div class="mb-4">
                <label for="maso">Mã số: </label>
                <input type="text" id="maso" v-model="huanluyenvien.maso" :class="{ 'border-red-500': !huanluyenvien.maso && addData }" required/>
                <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
            </div>
            <div class="mb-4">
                <label for="ten">Tên huấn luyện viên: </label>
                <input type="text" id="ten" v-model="huanluyenvien.ten" :class="{ 'border-red-500': !huanluyenvien.ten && addData }" required/>
                <!-- <div v-if="!maso" class="text-red-500">Mã số không được để trống.</div> -->
            </div>
            <div class="mb-4">
                <label for="ngaysinh">Ngày sinh: </label>
                <input type="date" id="ngaysinh" v-model="huanluyenvien.ngaysinh" :class="{ 'border-red-500': !huanluyenvien.ngaysinh && addData }" required/>
                <!-- <div v-if="!ngay_dau" class="text-red-500">Ngày đấu không được để trống.</div> -->
            </div>
            
            <div class="mb-4">
                <label for="dia_diem">Vị trí: </label>
                <input type="text" id="dia_diem" v-model="huanluyenvien.chucvu" :class="{ 'border-red-500': !huanluyenvien.chucvu && addData }" required/>
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
import HuanLuyenVien from './HuanLuyenVien.vue';

export default {
    data() {
        return {
            huanluyenvien : {
                maso : '',
                ten : '',
                ngaysinh : new Date(),
                chucvu : '',
            }
        }
    },
    methods : {
        addData() {
            let hlv : HuanLuyenVien = new HuanLuyenVien(
                {
                    maso : this.huanluyenvien.maso,
                    ten : this.huanluyenvien.ten,
                    ngaySinh : this.huanluyenvien.ngaysinh,
                },
                this.huanluyenvien.chucvu
            );
            this.$emit('onAddHLV', hlv);
        },
        thoat() {
            this.$emit('onAddHLV', null);
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