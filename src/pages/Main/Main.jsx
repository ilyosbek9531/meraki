import Main_ from "Components/Pages/Main/Main";
import SEO from "../../SEO";
const data = {
  root1: [
    {
      text: "Website",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "Design",
      color: "#fff",
    },
    {
      text: "Performance",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "Strategy",
      color: "#fff",
    },
    {
      text: "Complex",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "Communication",
      color: "#fff",
    },
  ],
  root2: [
    {
      text: "digital-marketing",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "meraki",
      color: "#fff",
    },
    {
      text: "digital-marketing",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "meraki",
      color: "#fff",
    },
    {
      text: "digital-marketing",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "meraki",
      color: "#fff",
    },
  ],
};

const Main = () => {
  // const { t, i18n } = useTranslation("common");
  // const {
  //   palette: { mode },
  // } = useTheme();
  return (
    // <div className={styles.main}>
    //   <Home data={data} />

    //   <Services />

    //   <div
    //     className={styles.projects_wrapper}
    //     style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}
    //   >
    //     <CountUpComp data={data} />
        
    //     <Projects />
    //   </div>

    //   <ChooseUs />

    //   <Reviews />

    //   <div style={{ backgroundColor: mode === "dark" ? "#535353" : "" }}>
    //     <Partners />
    //   </div>

    //   <Articles/>

    //   <div style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}>
    //     <Contact data = {data} isActive={true}/>
    //   </div>
    // </div>
    <>
    <SEO title={"Home"} description={"created by Digitals_group"}/>
    <Main_/>
    </>

  );
};

export default Main;
