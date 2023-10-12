import { Component } from '@angular/core';

@Component({
  selector: 'app-end-banner',
  templateUrl: './end-banner.component.html',
  styleUrls: ['./end-banner.component.css']
})
export class EndBannerComponent {
  slides = [
    { title: "_ Người lớn cô đơn, Phan Ý Yên_", content: "Gặp gỡ và nảy sinh cảm xúc có thể là định mệnh. Nhưng ở lại hay ra đi hoàn toàn nằm ở sự lựa chọn của mỗi người" },
    { title: "_ Tháng ngày ngất ngưởng, Huyền Lê_", content: "Không phải cứ bạn thân thì mới là tri kỷ. Tri kỷ đôi khi chỉ là một người cả năm không gặp lấy một lần, nhưng trong những buồn vui của cuộc đời, bạn luôn tin cậy chia sẻ với người đó đầu tiên." }
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
  };
}
