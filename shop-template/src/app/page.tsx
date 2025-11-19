import Slider from "@/components/slider";
import Baner from "@/components/ui/Baner";
import Header from "@/components/ui/header";
import SearchBar from "@/components/ui/SearchBar";

const Home = () => {
  return (
    <section> 
      <Baner/>
      <SearchBar/>
      <Header />
      <Slider />
    </section>
  );
};
export default Home;
