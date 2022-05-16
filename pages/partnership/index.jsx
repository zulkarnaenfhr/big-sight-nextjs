import Head from "next/head";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import PartnershipPageSection1 from "../../containers/PartnershipPage/PartnershipPage-Section1/PartnershipPage-Section1";
import PartnershipPageSection2 from "../../containers/PartnershipPage/PartnershipPage-Section2/PartnershipPage-Section2";
import BeforeFooterBighSight from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <PartnershipPageSection1 />
                <PartnershipPageSection2 />
                <BeforeFooterBighSight />
                <FooterBigSight />
            </div>
        </div>
    );
};

export default Index;
