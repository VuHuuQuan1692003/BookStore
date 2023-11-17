import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-end-banner',
  templateUrl: './end-banner.component.html',
  styleUrls: ['./end-banner.component.css']
})
export class EndBannerComponent {
  slides = [
    { title: "_ Tháng ngày ngất ngưởng, Huyền Lê_", content: "Không phải cứ bạn thân thì mới là tri kỷ. Tri kỷ đôi khi chỉ là một người cả năm không gặp lấy một lần, nhưng trong những buồn vui của cuộc đời, bạn luôn tin cậy chia sẻ với người đó đầu tiên." },
    { title: "_ Người lớn cô đơn, Phan Ý Yên_", content: "Gặp gỡ và nảy sinh cảm xúc có thể là định mệnh. Nhưng ở lại hay ra đi hoàn toàn nằm ở sự lựa chọn của mỗi người" },

  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    arrows: false,
  };
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSlideConfig();
  }

  ngOnInit() {
    this.updateSlideConfig();
  }

  updateSlideConfig() {
    if (window.innerWidth < 640) { // For tablet and below
      this.slideConfig.arrows = false;
    }
    else if (window.innerWidth < 1024) {
      this.slideConfig.arrows = true;
    }
    else {
      this.slideConfig.arrows = true;
    }
  }
}
