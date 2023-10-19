import styles from "@/app/page.module.css";
import Banner from "@/sections/banner/Banner";
import Decoracao from "@/sections/decoracao/Decoracao";
import Div from "@/sections/div/Div";
import Map from "@/sections/map/Map";
import Kits from "@/sections/kits/Kits";
// import Parceiros from "@/sections/parceiros/Parceiros";

export default function Home() {
  return (
    <main className={styles.Page}>
      <Banner />
      <Decoracao />
      <Kits />
      <Div />
      <Map />
      {/* <Parceiros /> */}
    </main>
  );
}
