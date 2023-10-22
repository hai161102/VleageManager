<script lang="ts">
import TrangChu from './components/TrangChu.vue';
import FormCauThu from './components/FormCauThu.vue';
import FormHLV from './components/FormHLV.vue';
import FormCLB from './components/FormCLB.vue';
import CauLacBo from './components/CauLacBo.vue';
import Cauthu from './components/Cauthu.vue';
import HuanLuyenVien from './components/HuanLuyenVien.vue';
import DangNhapView from './components/DangNhapView.vue';
import Const from './components/Const.vue';
import { HTTPS } from './components/utils/Const';

export default {
  components: {
    TrangChu,
    FormCauThu,
    FormHLV,
    FormCLB,
    DangNhapView,
  },
  created() {

  },
  data() {
    return {
      isShowHome: true,
      isAddCauthu: false,
      isAddHuanLuyenVien: false,
      isAddCauLacBo: false,
    }
  },
  methods: {
    onAddCauthu(ct: Cauthu) {
      if (ct) {
        Const.instance.cauthus.push(ct);
      }
      this.isAddCauthu = false;
      this.isShowHome = true;
    },
    onAddHLV(hlv: HuanLuyenVien) {
      if (hlv) {
        Const.instance.hlvs.push(hlv);
      }
      this.isAddHuanLuyenVien = false;
      this.isShowHome = true;
    },
    onAddCLB(clb: CauLacBo) {
      if (clb) {
        Const.instance.caulacbos.push(clb);
      }
      this.isAddCauLacBo = false;
      this.isShowHome = true;
    },

    addCLB() {
      this.isAddCauLacBo = true;
      this.isShowHome = false;
    },
    addHLV() {
      this.isAddHuanLuyenVien = true;
      this.isShowHome = false;
    },
    addCT() {
      this.isAddCauthu = true;
      this.isShowHome = false;
    },
  },
}

</script>

<template>
  <div class="body">
    <!-- <DangNhapView/> -->
    <TrangChu v-if="isShowHome == true" @addCLB="addCLB" @addHLV="addHLV" @addCT="addCT" />

    <FormCauThu @onAddCauthu="onAddCauthu" v-if="isAddCauthu == true" />
    <FormHLV @onAddHLV="onAddHLV" v-if="isAddHuanLuyenVien == true" />
    <FormCLB @onAddCLB="onAddCLB" v-if="isAddCauLacBo == true" />
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
.body {
  margin: 0 auto;
  width: 80%;
}
</style>
