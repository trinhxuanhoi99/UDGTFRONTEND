<template>
  <div class="container">
    <h3 class="d-flex justify-content-left mt-3">Tra cứu biên bản vi phạm</h3>
    <p>Vui lòng nhập thông tin bên dưới</p>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <label for="inputSoBienBan"><b>Số biên bản</b></label>
        <input
          id="inputSoBienBan"
          type="text"
          class="form-control"
          placeholder="Số Biên bản"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCMND"><b>Số CMND</b></label>
        <input
          id="inputCMND"
          type="text"
          class="form-control"
          placeholder="Số CMND"
        />
      </div>
    </div>
    <div class="row">
      <div>
        <button type="button" class="btn btn-primary">Search</button>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-12">
          <p><b>Số Biên Bản:</b></p>
        </div>
        <div class="col-md-6">
          <p><b>Người Vi Phạm:</b></p>
        </div>
        <div class="col-md-6">
          <p><b>Ngày Vi Phạm: </b></p>
        </div>
        <div class="col-md-6">
          <p><b>Lỗi Vi Phạm: </b></p>
        </div>
        <div class="col-md-6">
          <p><b>Số tiền phạt: </b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Violation',
  layout: 'search',
};
</script>
<style scoped src="./styles/violation.css"></style>
