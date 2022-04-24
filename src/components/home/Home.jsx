import { useNavigate } from "react-router-dom";
import { setItem } from "../../utils/localstorage";
import { ClothSection } from "./ClothSection";
import { ShoeSection } from "./ShoeSection";

export const Home = () => {

    const navigate = useNavigate();

    const handleSection = (gender) => {
        setItem("path", gender);
        navigate(`/${gender}`)
    }

    let shoeData = [
        {
            heading: "MEN'S SHOES COLLECTION",
            description: "The Nike men's shoes collection have lot of varieties where you can find your perfect shoes for running, basketball, football, sneakers etc",
            gender: "men",
            img: [
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/49fe6801-4b04-4d0a-85a6-4603309a4759/air-zoom-maxfly-more-uptempo-athletics-sprinting-spikes-rJlb4d.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5a0a2260-a7b3-495a-b48c-1202eb9aab05/wio-8-road-running-shoes-S6jPM3.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1622d34a-b828-4483-a974-74ca66bfb8b5/zoomx-vaporfly-next-2-road-racing-shoes-D4ntS0.png"
            ]
        },
        {
            heading: "WOMEN'S SHOES COLLECTION",
            description: "The Nike women's shoes collection have lot of varieties where you can find your perfect shoes for running, basketball, football, sneakers etc",
            gender: "women",
            img: [
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e04a03c2-d7b0-4505-9e63-0625a6a0b52b/air-zoom-terra-kiger-7-trail-running-shoes-qPmVtm.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c8f774ac-da90-47b0-92b0-2e6faa8dd5a3/go-flyease-shoe-5nWPkx.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/60f05e0f-25a1-46c8-8a05-8a13ba8f5e05/sb-shane-skate-shoes-mQcf7z.png"
            ]
        }, {
            heading: "KID'S SHOES COLLECTION",
            description: "The Nike kids's shoes collection have lot of varieties where you can find your perfect shoes for running, basketball, football, sneakers etc",
            gender: "kids",
            img: [
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/60b481c7-6d94-4ff1-9136-1ab90d66680f/flex-runner-2-older-road-running-shoes-RJPdh4.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5af5e694-013c-4c19-9d9e-bb9e4556d650/revolution-5-older-road-running-shoes-mhfgMP.png",
                "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/76e43df8-281b-429d-b40a-f732af1e8ed6/md-valiant-older-shoe-9b4q3K.png"
            ]
        }
    ]

    let clothData = [
        {
            heading: "MEN'S CLOTHS COLLECTION",
            description: "The Nike men's cloths collection have lot of varieties where you can find your perfect cloths for running, exercise, yoga, sportswear etc",
            gender: "men",
            img: [
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f2d1862d-ebb5-49c4-b803-f2d7ad446604/jordan-jumpman-85-t-shirt-5f2vG1.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4c5b556f-8ec6-4c04-9115-6faf42a032c0/jordan-air-jordan-t-shirt-7xvk6R.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/20556d0e-47a1-4a49-9c2b-739881ed586f/jordan-air-jordan-t-shirt-7xvk6R.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/baf08ec2-755f-4023-be87-85846e5e6f16/sportswear-french-terry-pullover-hoodie-kRDQGK.png"

            ]
        },
        {
            heading: "WOMEN'S CLOTHS COLLECTION",
            description: "The Nike women's cloths collection have lot of varieties where you can find your perfect cloths for running, exercise, yoga, sportswear etc",
            gender: "women",
            img: [
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/825e793f-0b15-48e2-9af6-e8f453dc537d/air-dri-fit-short-sleeve-running-top-BD9wqC.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/234e822c-df0a-4935-9fad-1de71b1f4f01/air-jordan-crew-sweatshirt-bltvmR.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/95ccdf7e-c6e2-4292-9915-a96a59838687/jordan-itage-gold-chain-t-shirt-WRkJ57.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c7dab3c1-56fc-4ddc-aa4d-6375741afde0/jordan-itage-oversized-graphic-t-shirt-CNl2GR.png"

            ]
        },
        {
            heading: "KID'S CLOTHS COLLECTION",
            description: "The Nike kid's cloths collection have lot of varieties where you can find your perfect cloths for running, exercise, yoga, sportswear etc",
            gender: "kids",
            img: [
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/730d06cf-a872-407f-ad3d-f27c7e0aea2b/air-older-t-shirt-sM0qSS.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c43007f-d255-41ae-9410-60b5e887c514/sportswear-older-t-shirt-rX0hCd.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3558cdb9-a999-4c4c-850e-8430522aaac6/liverpool-fc-2021-22-stadium-goalkeeper-older-football-jersey-b42TcH.png",
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea97c705-c156-474b-b983-cfbf5b84491a/air-older-pullover-hoodie-rH84mH.png"

            ]
        }
    ]

    return (
        <>
            {shoeData.map((e, i) => (
                <ShoeSection handleSection={handleSection} key={i} data={e} />
            ))}

            {clothData.map((e, i) => (
                <ClothSection handleSection={handleSection} key={i} data={e} />
            ))}
        </>
    );
};

