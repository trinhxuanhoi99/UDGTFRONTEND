<template>
  <div class="container">
    <h3 class="d-flex justify-content-left mt-3">THU HỒI GIẤY ĐĂNG KÍ XE</h3>
    <div class="header mt-5">
      <p>Vui lòng nhập thông tin biển số</p>
    </div>
    <hr />
    <div class="content">
      <div class="row">
        <div class="col-md-2">
          <p style="margin-top: 7px"><b>Biển số xe</b></p>
        </div>
        <div class="col-md-3">
          <input
            id="inputName"
            type="text"
            class="form-control"
            placeholder="Biển số xe"
          />
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-primary">Search</button>
        </div>
      </div>
      <hr />
      <div class="form-group">
        <p><b>Biển Số Xe: </b></p>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-4">
            <p><b>Loại Xe:</b></p>
          </div>
          <div class="col-md-4">
            <p><b>Kích Thước:</b></p>
          </div>
          <div class="col-md-4">
            <p><b>Số Chỗ:</b></p>
          </div>
          <div class="col-md-4">
            <p><b>Số Khung:</b></p>
          </div>
          <div class="col-md-4">
            <p><b>Số Máy:</b></p>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-md-6">
              <p style="color: brown"><b>Chủ sỡ hữu :</b></p>
            </div>
            <div class="col-md-6">
              <button
                type="submit"
                class="btn btn-primary"
                style="margin-left: 180px"
              >
                Thu Hồi
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Retract',
};
</script>
<style scoped src="./index.css"></style>
