<template>
  <div>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Nhập biển số xe"
        aria-label="Search"
      />
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        type="button"
        (click)="search()"
      >
        Search
      </button>
    </form>
    <div class="contain">
      <div class="card">
        <div class="images">
          <h2>Wave Alpha</h2>
          <div class="slider">
            <img
              id="big-image"
              src="https://img.tinxe.vn/resize/1000x-/2019/01/16/XForF7yt/white-550x400-acf-cropped-ce7f.png"
              alt=""
            />
          </div>
          <div id="img-slider" class="img-slider">
            <div class="imgs">
              <img
                id="Nomos1"
                src="https://img.tinxe.vn/resize/1000x-/2019/01/16/XForF7yt/white-550x400-acf-cropped-ce7f.png"
                alt=""
              />
            </div>
            <div class="imgs">
              <img
                id="Nomos2"
                src="https://kuongngan.com/wp-content/uploads/2020/07/honda-wave-alpha-1.jpg"
                alt=""
              />
            </div>
            <div class="imgs">
              <img
                id="Nomos3"
                src="https://media.thethao247.vn/upload/hiep95/2019/12/07/Honda-WaveAlpha-2020_1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="infos">
          <h1>Thông Tin Phương Tiện</h1>
          <div class="vehicle-specification">
            <b>Chủ sở hữu: </b><br />
            <b>Dung tích: </b><br />
            <b>Màu xe: </b><br />
            <b>Ngày mua: </b><br />
            <b>Hãng: </b><br />
            <b>Sô khung: </b><br />
          </div>
          <div id="more-infos">
            <h5 class="choose">Miêu Tả</h5>
          </div>
          <div id="info-content">
            <p class="paragraph" style="display: block">
              The watch comes with the original Nomos black Cordovan Shell strap
              and with the original Nomos 18kt white gold tang buckle. This
              timepiece is sourced directly from Nomos, hence please allow one
              week delivery time (often within days).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vehicle',
  layout: 'search',
};
</script>
<style scoped src="./styles/vehicle.css"></style>
