import React from 'react';
import './Home.css';
import Product from '../components/Product.js';

export function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.discordapp.com/attachments/426104825806323712/972160561792057394/0o6yoo-treeevbwq0byykg.jpeg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="Acer Nitro 5 Gaming Laptop AMD Ryzen 5-5600H - (8GB/512GB SSD/Nvidia GTX 1650 - 4 GB GDDR6/ Windows 10 Home/144hz) AN515-45 with 39.6 cm (15.6 Inches) FHD Display / 2.4 Kgs"
            price={69990}
            rating={5}
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
          />
          <Product
            id={2}
            title="LEGO 60219 City Great Vehicles Construction Loader Building Truck Toy with Road Worker Minifigure,Multicolor,Pack of 88 Pieces"
            price={1499}
            rating={4}
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/LEGO/DesktopGateway_CategoryCard_758X608-1-1x-LEGO._SY304_CB666764715_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set"
            price={699}
            rating={4}
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/062021/1x_758x608_Desktop-QC_books-homepage._SY304_CB667750558_.jpg"
          />

          <Product
            id={4}
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={72500}
            rating={5}
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Shutterbug/Fest/August/GW/379x304_Shutterbug_fest_Home_studio_photography._SY304_CB407732303_.jpg"
          />

          <Product
            id={5}
            title="SISO Unisex ISI Mark/BIS Certified N95 5 Layer Face Mask FFP2 (White, Pack of 10)"
            price={499}
            rating={4}
            img="https://m.media-amazon.com/images/I/41k9ZijkPHS._AC_SY200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="Odyssey G9 130 cm Gaming Monitorwith 32.9 aspect ratio display and 240Hz refresh rate"
            price={165000}
            rating={4}
            img="https://cdn.discordapp.com/attachments/426104825806323712/975306225652744212/image.jpg"
          />
        </div>
      </div>
    </div>
  );
}

