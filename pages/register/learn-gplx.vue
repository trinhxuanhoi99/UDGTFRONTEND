<template>
  <div class="container">
    <h3 class="d-flex justify-content-left mt-3">
      Đơn Đề Nghị Học Sát Hạch Để Cấp Giấy Phép Lái Xe
    </h3>
    <p>Vui lòng nhập thông tin bên dưới</p>
    <hr />
    <div class="row">
      <div class="col-md-4">
        <label for="inputHangDK"
          ><b>Loại hạng đăng kí giấy phép lái xe</b></label
        >
        <select
          id="inputHangDK"
          (change)="onKey($event)"
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option selected>Loại Hạng Đăng Kí</option>
          <option value="1">A1</option>
          <option value="2">A2</option>
          <option value="3">B1</option>
          <option value="3">B2</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <label for="inputName"><b>Tên người đăng kí</b></label>
        <input
          id="inputName"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          placeholder="Tên người đăng kí"
        />
      </div>
      <div class="col-md-3">
        <label for="inputCMND"><b>Số CMND/Hộ Chiếu</b></label>
        <input
          id="inputCMND"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          placeholder="Số CMND/Hộ chiếu"
        />
      </div>
      <div class="col-md-3">
        <label for="NgayCap"><b>Ngày Cấp</b></label>
        <input
          id="NgayCap"
          (change)="onKey($event)"
          type="date"
          class="form-control"
          placeholder="Ngày Cấp"
        />
      </div>
      <div class="col-md-3">
        <label for="NoiCap"><b>Nơi Cấp</b></label>
        <input
          id="NoiCap"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          placeholder="Nơi Cấp"
        />
      </div>
      <div class="col-md-6">
        <label for="DiaChiThuongTru"><b>Địa Chỉ Thường Trú</b></label>
        <input
          id="DiaChiThuongTru"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          placeholder="Địa Chỉ thường trú"
        />
      </div>
      <div class="col-md-6">
        <label for="NoiCuTru"><b>Nơi Cư Trú</b></label>
        <input
          id="NoiCuTru"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          placeholder="Nơi Cư Trú"
        />
      </div>
      <div class="col-md-4">
        <label for="SoGPLX"><b>Số GPLX đã có</b></label>
        <input
          id="SoGPLX"
          (keyup)="onKey($event)"
          type="number"
          class="form-control"
          placeholder="Số GPLX đã có"
        />
      </div>
      <div class="col-md-4">
        <label for="Hang"><b>Hạng</b></label>
        <input
          id="Hang"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          placeholder="Hạng"
        />
      </div>
      <div class="col-md-4">
        <label for="NgayCapGPLX"><b>Ngày Cấp Giấy Phép</b></label>
        <input
          id="NgayCapGPLX"
          (change)="onKey($event)"
          type="date"
          class="form-control"
          placeholder="Ngày Cấp Giấy Phép"
        />
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      style="margin-top: 10px"
      (click)="onSave()"
    >
      Gửi
    </button>
  </div>
</template>
<script>
export default {
  name: 'LearnGplx',
  layout: 'register',
};
</script>
<style scoped src="./styles/learn-gplx.css"></style>
