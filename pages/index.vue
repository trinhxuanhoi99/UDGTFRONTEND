<template>
  <div>
    <section id="Title" class="wrapTitle">
      <div>
        <div class="traffic-home-contain">
          <div class="col-sm-4">
            <h4 class="titlePages">
              Cổng thông tin Giao thông <br />
              Thành phố Hồ Chí Minh
            </h4>
          </div>
          <div class="col-sm-3 counter">
            <div id="timeanddate-date" class="counter-title">
              <!-- {{ dateObj | date }} -->
            </div>

            <div id="timeanddate-time" class="counter-time">
              <!-- {{ time | date: 'hh:mm:ss a' }} -->
            </div>
          </div>
          <div class="col-sm-5 traffic-home-contain">
            <div class="col-sm-8 col-xs-6 counter">
              <div class="row">
                <div class="col-sm-6">
                  <div id="" class="counter-title">Lượt truy cập</div>
                  <div id="counter-access" class="counter-access">
                    2,295,300
                  </div>
                </div>
                <div class="col-sm-6">
                  <div id="" class="counter-title">Lượt truy cập tháng</div>
                  <div id="counter-access-month" class="counter-access">
                    8,583
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-6 counter">
              <div id="" class="counter-title">Online</div>
              <div id="counter-online" class="counter-online">4</div>
            </div>
          </div>
        </div>
      </div>
      <div style="clear: both"></div>
    </section>
    <div class="container row">
      <div class="slide col-7">
        <div id="slide" class="carousel slide myslide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#slide" data-slide-to="0" class="active"></li>
            <li data-target="#slide" data-slide-to="1"></li>
            <li data-target="#slide" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner carinner" role="listbox">
            <div class="carousel-item active caritem">
              <img src="~@/assets/image/1.jpg" alt="" />
            </div>
            <div class="carousel-item caritem">
              <img src="~@/assets/image/2.jpg" alt="" />
            </div>
            <div class="carousel-item caritem">
              <img src="~@/assets/image/3.jpg" alt="" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#slide"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#slide"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="news col-5">
        <div class="item d-flex row">
          <div class="items-img col-5">
            <a
              href="/tin-tuc/tphcm-kien-nghi-thong-nhat-quy-mo-du-an-xay-dung-duong-noi-duong-tran-quoc-hoan-cong-hoa-1491865659"
            >
              <img
                src="https://images.hcmcpv.org.vn/res/news/2021/01/12-01-2021-van-phong-chinh-phu-va-toa-an-nhan-dan-toi-cao-phoi-hop-xay-dung-chinh-phu-dien-tu-toa-an-dien-tu-A2405D0B.jpg?w=217&h=139&mode=pad&vs=12012021014207"
                alt=""
              />
            </a>
          </div>
          <div class="items-title d-flex align-items-end col-6">
            <a
              href="/tin-tuc/tphcm-kien-nghi-thong-nhat-quy-mo-du-an-xay-dung-duong-noi-duong-tran-quoc-hoan-cong-hoa-1491865659"
            >
              Văn phòng Chính phủ và Tòa án Nhân dân tối cao phối hợp xây dựng
              Chính phủ điện tử, Tòa án điện tử</a
            >
          </div>
        </div>
        <div class="item d-flex row">
          <div class="items-img col-5">
            <a
              href="/tin-tuc/tphcm-kien-nghi-thong-nhat-quy-mo-du-an-xay-dung-duong-noi-duong-tran-quoc-hoan-cong-hoa-1491865659"
            >
              <img
                src="https://images.hcmcpv.org.vn/res/news/2020/05/28-05-2020-tphcm-kien-nghi-thong-nhat-quy-mo-du-an-xay-dung-duong-noi-duong-tran-quoc-hoan-cong-hoa-8DB3800A.jpg?w=217&amp;h=139&amp;mode=pad&amp;vs=28052020092000"
                alt=""
              />
            </a>
          </div>
          <div class="items-title d-flex align-items-end col-6">
            <a
              href="/tin-tuc/tphcm-kien-nghi-thong-nhat-quy-mo-du-an-xay-dung-duong-noi-duong-tran-quoc-hoan-cong-hoa-1491865659"
            >
              Mặt trận giám sát việc bầu cử đại biểu Quốc hội và đại biểu HĐND
              các cấp</a
            >
          </div>
        </div>
        <div class="item d-flex row">
          <div class="items-img col-5">
            <a
              href="/tin-tuc/tphcm-kien-nghi-thong-nhat-quy-mo-du-an-xay-dung-duong-noi-duong-tran-quoc-hoan-cong-hoa-1491865659"
            >
              <img
                src="https://images.hcmcpv.org.vn/res/news/2021/01/13-01-2021-mat-tran-giam-sat-viec-bau-cu-dai-bieu-quoc-hoi-va-dai-bieu-hdnd-cac-cap-D6DBB4A9.jpg?w=217&h=139&mode=pad&vs=13012021014722"
                alt=""
              />
            </a>
          </div>
          <div class="items-title d-flex align-items-end col-6">
            <a
              href="/tin-tuc/tphcm-kien-nghi-thong-nhat-quy-mo-du-an-xay-dung-duong-noi-duong-tran-quoc-hoan-cong-hoa-1491865659"
              >TPHCM kiến nghị thống nhất quy mô dự án xây dựng đường nối đường
              Trần Quốc Hoàn - Cộng Hòa</a
            >
          </div>
        </div>
      </div>
    </div>

    <section id="divTraCuu" class="bgGray">
      <div class="container testimonial-group">
        <div
          class="row divTraCuu text-center wow fadeInUp animated d-flex justify-content-center"
          data-wow-delay="0.4s"
        >
          <a [routerLink]="['/search/1']">
            <div class="col-sm-4">
              <div class="wrapWhiteBox tracuuPHUHIEU">
                <h4>Tra cứu phương tiện</h4>
              </div>
            </div>
          </a>
          <a [routerLink]="['/search/2']">
            <div class="col-sm-4">
              <div class="wrapWhiteBox tracuuGIAYPHEPLAIXE">
                <h4>Tra cứu giấy phép lái xe</h4>
              </div>
            </div>
          </a>
          <a [routerLink]="['/search/3']">
            <div class="col-sm-4">
              <div class="wrapWhiteBox tracuuVIPHAM">
                <h4>Tra cứu vi phạm</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section id="divDashboard" class="bgGray">
      <img src="~@/assets/image/thongke.jpg" alt="" />
    </section>
    <section id="Partners">
      <div class="footer">
        <div
          class="wow fadeInUp animated"
          data-wow-delay="0.4s"
          style="
            visibility: visible;
            animation-delay: 0.4s;
            animation-name: fadeInUp;
          "
        >
          <ul class="client-list">
            <li>
              <a
                target="_blank"
                href="http://buyttphcm.com.vn/"
                class="client-link"
              >
                <span class="logo-hover" style="opacity: 0">
                  <img src="~@/assets/image/footer/buyttphcm-hover.png" alt=""
                /></span>
                <img
                  src="~@/assets/image/footer/buyttphcm.png"
                  class="client-logo"
                  alt=""
                  style="opacity: 1"
                />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="http://www.hanelsoft.vn/"
                class="client-link"
              >
                <span class="logo-hover" style="opacity: 0">
                  <img src="~@/assets/image/footer/hanelsoft-hover.png" alt=""
                /></span>
                <img
                  src="~@/assets/image/footer/hanelsoft.png"
                  class="client-logo"
                  alt=""
                  style="opacity: 1"
                />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="http://vietbando.com"
                class="client-link"
              >
                <span class="logo-hover" style="opacity: 0">
                  <img src="~@/assets/image/footer/logoVBD-hover.png" alt=""
                /></span>
                <img
                  src="~@/assets/image/footer/logoVBD.png"
                  class="client-logo"
                  alt=""
                  style="opacity: 1"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.fpt.com.vn"
                class="client-link"
              >
                <span class="logo-hover" style="opacity: 0">
                  <img src="~@/assets/image/footer/fptlogo-hover.png" alt=""
                /></span>
                <img
                  src="~@/assets/image/footer/fptlogo.png"
                  class="client-logo"
                  alt=""
                  style="opacity: 1"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.hamsongsaigon.com.vn/"
                class="client-link"
              >
                <span class="logo-hover" style="opacity: 0">
                  <img
                    src="~@/assets/image/footer/hamthuthiem-hover.png"
                    alt=""
                /></span>
                <img
                  src="~@/assets/image/footer/hamthuthiem.png"
                  class="client-logo"
                  alt=""
                  style="opacity: 1"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="http://drvn.gov.vn/" class="client-link">
                <span class="logo-hover" style="opacity: 0">
                  <img src="~@/assets/image/footer/tcdb-hover.png" alt=""
                /></span>
                <img
                  src="~@/assets/image/footer/tcdb.png"
                  class="client-logo"
                  alt=""
                  style="opacity: 1"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://sgtvt.hochiminhcity.gov.vn/"
                class="client-link"
              >
                <span class="logo-hover" style="opacity: 0">
                  <img src="~@/assets/image/footer/sogtvt-hover.png" alt=""
                /></span>
                <img
                  src="~@/assets/image/footer/sogtvt.png"
                  class="client-logo"
                  alt=""
                  style="opacity: 1"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <span><b>Liên hệ:</b> 037616650 (Mr.Cong)</span> <br />
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <i class="fab fa-twitter" aria-hidden="true"></i>
          <i class="fab fa-google" aria-hidden="true"></i>
          <i
            ><img
              class="email"
              src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63"
          /></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
<style scoped src="./index.css"></style>
