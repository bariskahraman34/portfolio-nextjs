import Header from "@/components/Header";
import ListProjects from "@/components/ListProjects";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Tools />
      <ListProjects />
    </main>
  );
}
