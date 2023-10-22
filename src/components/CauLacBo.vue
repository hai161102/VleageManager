<script lang="ts">
import type Cauthu from './Cauthu.vue';
import type HuanLuyenVien from './HuanLuyenVien.vue';

export default class CauLacBo {
    maso : string;
    ten : string;
    tru_so : string;
    san_nha : string;
    cauthus : Cauthu[] = [];
    hlvs : HuanLuyenVien[] = [];

    constructor(maso : string = '',ten : string = '',tru_so : string = '', san_nha : string = '') {
        this.maso = maso;
        this.ten = ten;
        this.tru_so = tru_so;
        this.san_nha = san_nha;
    }
}
</script>