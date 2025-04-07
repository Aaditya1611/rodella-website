import MQ6501 from "./../assets/images/MQ6505.png";
import MQ6502 from "./../assets/images/rendertransparent.PNG";
import S6Isofront from "./../assets/images/front.svg";
import S6Isoside from "./../assets/images/side.svg";
import S6Isometric from "./../assets/images/isometric.svg";
import S9Isofront from "./../assets/images/S9front.svg";
import S9Isoside from "./../assets/images/S9side.svg";
import S9Isometric from "./../assets/images/S9isometric.svg";
import sap900 from "./../assets/images/Sap9.png";

const Products = [

    {
        id: 1,
        name: "SAP-6",
        description: "SAP-6 is a light weight micro-category variant borrowing its structural toughness ffrom MQ750+  Developed for quick deployment and versatile operations in the coldest and the windiest of the weathers,  the MQ650LV delivers 40 mins of operational endurance with a 10x optical zoom equipped HD electro-optic sensor. Swappable battery options make re-deployment swift enhancing the system's efficiency in real time survielance missions. Rapid survielance and reconnaisance in the tactile levels of warfare are most easily and effectively achieved with MQ650LV.",

        FlightTime: "40 mins",
        TransmissionRange: "10km",
        Camera: "4k, 10x Optical zoom",
        Payload: "300 gms",

        TechnicalDetail1: "Cruise Speed",
        TechnicalDetail2: "Wind resistence index",
        TechnicalDetail3: "Gimbal Stabilization",
        TechnicalDetail4: "Dash Speed",
        TechnicalDetail5: "Operational Altitude",
        TechnicalDetail6: "Wheel Base",
        TechnicalDetail7: "Empty Weight",

        TechnicalDetailsValue1: "8 m/s",
        TechnicalDetailsValue2: "30 knots",
        TechnicalDetailsValue3: "3 aixs stabilized",
        TechnicalDetailsValue4: "10 m/s",
        TechnicalDetailsValue5: "500mAGL",
        TechnicalDetailsValue6: "650 mm",
        TechnicalDetailsValue7: "1kg",

        MainBGImg: MQ6501,
        OtherImg: MQ6502,
        IsoFront: S6Isofront,
        IsoTop: S6Isoside,
        Isometric: S6Isometric
    },

    {
        id: 2,
        name: "SAP-9",
        description: "SAP-9 is a light weight micro-category variant borrowing its structural toughness from MQ750+  Developed for quick deployment and versatile operations in the coldest and the windiest of the weathers,  the MQ650LV delivers 40 mins of operational endurance with a 10x optical zoom equipped HD electro-optic sensor. Swappable battery options make re-deployment swift enhancing the system's efficiency in real time survielance missions. Rapid survielance and reconnaisance in the tactile levels of warfare are most easily and effectively achieved with MQ650LV.",

        TechnicalDetail1: "Cruise Speed",
        TechnicalDetail2: "Wind resistence index",
        TechnicalDetail3: "Camera",
        TechnicalDetail4: "Dash Speed",
        TechnicalDetail5: "Operational Altitude",
        TechnicalDetail6: "Wheel Base",
        TechnicalDetail7: "Empty Weight",

        TechnicalDetailsValue1: "8 m/s",
        TechnicalDetailsValue2: "30 knots",
        TechnicalDetailsValue3: "4k, 10x Zoom",
        TechnicalDetailsValue4: "10 m/s",
        TechnicalDetailsValue5: "500mAGL",
        TechnicalDetailsValue6: "650 mm",
        TechnicalDetailsValue7: "1kg",
        
        FlightTime: "2 Hours",
        TransmissionRange: "10km",
        Camera: "4k@60fps",
        Payload: "2KG",

        MainBGImg: sap900,
        OtherImg: sap900,
        IsoFront: S9Isofront,
        IsoTop: S9Isoside,
        Isometric: S9Isometric
       
    },

]

export default Products;