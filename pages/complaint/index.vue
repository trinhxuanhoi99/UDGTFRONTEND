<template>
  <div class="container">
    <h6 class="d-flex justify-content-left mt-3">
      <select id="kntc" name="Lập Đơn Khiếu Nại">
        <option value="dkn">Lập Đơn Khiếu Nại</option>
        <option value="dtc">Lập Đơn Tố Cáo</option>
      </select>
    </h6>
    <p>Vui lòng nhập thông tin bên dưới</p>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <label for="inputName"><b>Họ tên đầy đủ</b></label>
        <input
          id="inputName"
          type="text"
          class="form-control"
          placeholder="Họ và tên"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCMND"><b>CMND</b></label>
        <input
          id="inputCMND"
          type="text"
          class="form-control"
          placeholder="CMND"
        />
      </div>
      <div class="col-md-6">
        <label for="inputAddress"><b>Địa chỉ ở Hiện tại</b></label>
        <input
          id="inputAddress"
          type="text"
          class="form-control"
          placeholder="Địa chỉ ở Hiện tại"
        />
      </div>
      <div class="col-md-6">
        <label for="inputSDT"><b>Số Điện thoại</b></label>
        <input
          id="inputSDT"
          type="number"
          class="form-control"
          placeholder="Số Điện Thoại"
        />
      </div>
      <div class="col-md-6">
        <label for="inputDate"><b>Ngày diễn ra sự việc</b></label>
        <input
          id="inputDate"
          type="date"
          class="form-control"
          placeholder="Ngày diễn ra sự việc"
        />
      </div>
      <div class="col-md-6">
        <label for="inputNumBB"><b>Số Biên Bản</b></label>
        <input
          id="inputNumBB"
          type="number"
          class="form-control"
          placeholder="Số Biên Bản"
        />
      </div>

      <div class="col-md-12">
        <div>
          <label for="inputTo">Gởi đến</label>
          <select id="to" name="to">
            <option value="CA1">Công an quận 1</option>
            <option value="CA2">Công an quận 2</option>
            <option value="CA3">Công an quận 3</option>
            <option value="CA4">Công an quận 4</option>
            <option value="CA5">Công an quận 5</option>
            <option value="CA6">Công an quận 6</option>
            <option value="CA7">Công an quận 7</option>
          </select>
        </div>
      </div>
      <div class="col-md-12">
        <div>
          <label for="inputAddress2"><b>Trình bày sự việc</b></label
          ><br />
          <textarea
            class="textarea resize-ta"
            style="height: 100px; width: 1000px"
          ></textarea>
        </div>
      </div>
      <button type="button" class="btn btn-primary" style="margin-top: 10px">
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Complaint',
};
</script>
<style scoped src="./index.css"></style>
