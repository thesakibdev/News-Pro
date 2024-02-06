// css component 
import Container from "@/components/Container";
// home component 
import HomeTop from "@/components/Home/HomeTop";
import TopNews from "@/components/Home/TopNews";

export default function Home() {
  return (
    <>
      <section className="pt-[70px]">
        <main>
          <Container>
            <HomeTop />
            <TopNews/>
          </Container>
        </main>
      </section>
    </>
  );
}
