<template>
  <div class="container-fluid">
    <div style="padding-bottom: 50px">
      <h3 class="d-flex justify-content-left mt-3">Chọn Biển số xe</h3>
      <p>Vui lòng nhập thông tin bên dưới</p>
      <hr />
      <h5 class="d-flex justify-content-center mt-3">Chọn Biển Số</h5>
      <div class="row">
        <div class="col-md-6">
          <p style="float: right">Mã vùng</p>
        </div>
        <div class="col-md-3">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Chọn Mã Vùng</option>
            <option value="1">Đăk Lăk</option>
            <option value="2">Sài Gòn</option>
            <option value="3">Hà Nội</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p style="float: right">Số Xe</p>
        </div>
        <div class="col-md-3">
          <input
            id="inputSoxe"
            type="text"
            class="form-control"
            placeholder="Số Xe"
          />
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        style="margin-top: 10px; margin-left: 516px"
      >
        Xác nhận
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GivePalteVehicle',
  layout: 'register',
};
</script>
<style scoped src="./styles/give-plate-vehicle.css"></style>
