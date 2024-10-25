import {
  Featured,
  FeaturedProperties,
  Header,
  MailList,
  PropertyList,
} from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-10 mt-12">
        <Featured />
        <h1 className="w-[1024px] font-bold text-lg">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="w-[1024px] font-bold text-lg">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </>
  );
};

export default Home;
