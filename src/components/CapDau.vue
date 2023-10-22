<script lang="ts">
import CauLacBo from './CauLacBo.vue';

export default class CapDau {
    maso : string;
    ngay_dau : string | Date;
    thoi_gian : string | Date;
    dia_diem : string;
    doi_nha : CauLacBo;
    doi_khach : CauLacBo;
    ty_so : number[] = [0, 0];

    constructor(maso : string = '', 
        ngay_dau : string | Date = new Date(), 
        thoi_gian : string | Date  = new Date(), 
        dia_diem : string = '', 
        doi_nha : CauLacBo = new CauLacBo(),
        doi_khach : CauLacBo = new CauLacBo()
    ) {
        this.maso = maso;
        this.ngay_dau = ngay_dau;
        this.thoi_gian = thoi_gian;
        this.dia_diem = dia_diem;
        this.doi_nha = doi_nha;
        this.doi_khach = doi_khach;
    }
}
</script>