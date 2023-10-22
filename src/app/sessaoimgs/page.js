import React from 'react';
import styles from '@/app/sessaoimgs/sessaoimg.module.css';
import zoomableImages from '@/app/sessaoimgs/page';


const SessaoImg = () => {
  // const zoomableImages = document.querySelectorAll('.Zoomable');

  // zoomableImages.forEach((img) => {
  //   img.addEventListener('click', () => {
  //     img.classList.toggle('zoomed');
  //   });
  // });

  return (
    <div className={styles.SessaoImgs}>
      <div className={styles.SessaoImgsCaixa}>
        <ul>
          <li className={styles.PageZoom}>
            <img className={styles.Zoomable} src="./img/kits/1.jpg" />
          </li>
          <li>
            <img src="./img/kits/2.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/3.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/4.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/5.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/6.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/7.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/8.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/9.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/10.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/11.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/12.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/13.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/14.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/15.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/16.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/17.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/18.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/19.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/21.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/22.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/23.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/24.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/25.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/26.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/27.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/28.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/29.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/30.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/31.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/32.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/33.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/34.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/35.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/36.jpg" alt="" />
          </li>
          <li>
            <img src="./img/kits/37.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SessaoImg;
