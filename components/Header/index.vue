<template>
  <header>
    <div class="headerbackgroud">
      <img src="~@/assets/image/header.jpg" alt="" />
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">
              <i class="fas fa-home"></i> Trang chủ
              <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Tra cứu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a id="1" class="dropdown-item" [routerLink]="['/search/1']"
                >Tra cứu phương tiện</a
              >
              <a id="2" class="dropdown-item" [routerLink]="['/search/2']"
                >Tra cứu GPLX</a
              >
              <a id="3" class="dropdown-item" [routerLink]="['/search/3']"
                >Tra cứu vi phạm</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/complaint']"
              >Tố cáo/Khiếu nại</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Đăng kí
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" [routerLink]="['/register/1']"
                >Giấy phép lái xe</a
              >
              <a class="dropdown-item" [routerLink]="['/register/2']"
                >Lấy biển số xe</a
              >
              <a class="dropdown-item" [routerLink]="['/register/3']"
                >Sang tên xe</a
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Nộp phạt/Đóng phí
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Nộp phạt vi phạm giao thông</a>
              <a class="dropdown-item" href="#">Đóng phí làm GPLX</a>
              <a class="dropdown-item" href="#">Đóng phí trước bạ</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/retract']"
              >Thu Hồi Giấy Đăng Kí Xe</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Giới thiệu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Điều khoản</a>
              <a class="dropdown-item" href="#">Hướng dẫn</a>
              <a class="dropdown-item" href="#">Góp ý</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header',
};
</script>
<style scoped src="./index.css"></style>
