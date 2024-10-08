import CustomFooter from "@/components/footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div style={{ marginLeft: '5%', marginRight: '5%', marginBottom:'15%' }}>
        <Hero />
      </div>
      <div>
        <CustomFooter />
      </div>

    </div>
  );
}
