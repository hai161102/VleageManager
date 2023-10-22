<script lang='ts'>
import type { Nguoi } from './Nguoi.vue';

    export default class Cauthu {
        soAo: string;
        tenCauthu : string;
        ngaySinh : Date | string;
        viTri : string;
        constructor(nguoi : Nguoi = {
            maso : '',
            ten : '',
            ngaySinh : new Date()
        } , vitri : string = '') {
            this.soAo = nguoi.maso;
            this.tenCauthu = nguoi.ten;
            this.ngaySinh = nguoi.ngaySinh;
            this.viTri = vitri;
        }

    }
</script>