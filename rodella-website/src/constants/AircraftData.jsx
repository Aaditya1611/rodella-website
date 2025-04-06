import droneImage1 from "./../assets/images/design.jpg";
import droneImage2 from "./../assets/images/2.png";
import droneImage3 from "./../assets/images/aircraftsBG.jpg";
import droneImage4 from "./../assets/images/fixed-wing1.png";
import droneImage5 from "./../assets/images/fixed-wing2.jpg";
import mq650 from "./../assets/images/MQ6501.jpeg";
import mq750 from "./../assets/images/MQ7501.jpeg";
import Rfixedwing from "./../assets/images/Rfixedwing.png";

const AircraftData = [

    {
        id: 1,
        name: "MQ650",
        tagline: "COMPACT | SWIFT | UTILITARIAN",
        description: "MQ650LV is a light weight micro-category variant borrowing its structural toughness ffrom MQ750+  Developed for quick deployment and versatile operations in the coldest and the windiest of the weathers,  the MQ650LV delivers 40 mins of operational endurance with a 10x optical zoom equipped HD electro-optic sensor. Swappable battery options make re-deployment swift enhancing the system's efficiency in real time survielance missions. Rapid survielance and reconnaisance in the tactile levels of warfare are most easily and effectively achieved with MQ650LV.",
        AircraftPageImg: mq650,
        img1: mq650,
        img2: mq650,
        img3: mq650,
        FlightTime: "40 minutes",
        Range: "10 KM",
        LiveFeed: "4K, 10x, Optical zoom",
        Payload: "300 gms",

        keyHighlights: [
            "Quick Deployment",
            "Tool-Less Assembly",
            "Swappable Battery",
            "Hot Swappable Payloads",
        ],

        TechnicalDetails: [
            "Advanced Hybrid Composite Material",
            "650mm wheel base",
            "Empty Weight - 1KG",
            "Wind Resistance Index - 30Knots",
            "Communication Links - 2.4Ghz,900Mhz(encrypted)",
            "Range Control&Telemetry - 10kms LOS",
            "Cruise Speed - 8ms",
            "Dash Speed - 10m/s",
            "Service Ceiling - 4000m AMSL",
            "Operational Altitude - 500mAGL",
            "Propulsion - Brushless Electric",
        ],

        Features: [
            "HD Resolution Cam -4k, 10x,Optical Zoom",
            "Active Obstacle Avoidance - Upto 10m",
            "Gimbal Stabilization - 3 axis stabilized",
            "Aural Signature - 40dB@300m AGL",
            "Portability - Back Packable",
            "Operational Temperature - -10 to 50c",
            "Operating Environment - Multi Terrain",

        ],

        UseCases: [
            "For rapid surveillance, MQ650lv drone is the ideal solution",
            "The MQ650lv drone is ideally suited for rapid mapping use cases, delivering precise and efficient geospatial data",
            "The MQ650lv drone's capabilities make it a vital asset for tactical-level reconnaissance, enabling commanders to make informed decisions with timely and accurate intelligence",
            "For tactical law enforcement, the MQ650lv drone offers invaluable aerial perspective,during high-risk operations,  aiding in suspect apprehension and ensuring officer safety.",
            "The MQ650lv drone is exceptionally well-suited for the use case of tactical traffic monitoring",
        ]
    },
    {
        id: 2,
        name: "MQ750+",
        tagline: "COMPACT | SWIFT | UTILITARIAN",
        description: "MQ650LV is a light weight micro-category variant borrowing its structural toughness ffrom MQ750+  Developed for quick deployment and versatile operations in the coldest and the windiest of the weathers,  the MQ650LV delivers 40 mins of operational endurance with a 10x optical zoom equipped HD electro-optic sensor. Swappable battery options make re-deployment swift enhancing the system's efficiency in real time survielance missions. Rapid survielance and reconnaisance in the tactile levels of warfare are most easily and effectively achieved with MQ650LV.",
        AircraftPageImg: mq750,
        img1: droneImage2,
        img2: droneImage2,
        img3: droneImage2,
        FlightTime: "40 minutes",
        Range: "20 KM",
        LiveFeed: "4K, 30x, Optical zoom",
        Payload: "1.2 Kgs",

        keyHighlights: [
            "Quick Deployment",
            "Tool-Less Assembly",
            "Swappable Battery",
            "Hot Swappable Payloads",
        ],

        TechnicalDetails: [
            "Advanced Hybrid Composite Material",
            "650mm wheel base",
            "Empty Weight - 1KG",
            "Wind Resistance Index - 30Knots",
            "Communication Links - 2.4Ghz,900Mhz(encrypted)",
            "Range Control&Telemetry - 10kms LOS",
            "Cruise Speed - 8ms",
            "Dash Speed - 10m/s",
            "Service Ceiling - 4000m AMSL",
            "Operational Altitude - 500mAGL",
            "Propulsion - Brushless Electric",
        ],

        Features: [
            "HD Resolution Cam -4k, 10x,Optical Zoom",
            "Active Obstacle Avoidance - Upto 10m",
            "Gimbal Stabilization - 3 axis stabilized",
            "Aural Signature - 40dB@300m AGL",
            "Portability - Back Packable",
            "Operational Temperature - -10 to 50c",
            "Operating Environment - Multi Terrain",

        ],

        UseCases: [
            "For rapid surveillance, MQ650lv drone is the ideal solution",
            "The MQ650lv drone is ideally suited for rapid mapping use cases, delivering precise and efficient geospatial data",
            "The MQ650lv drone's capabilities make it a vital asset for tactical-level reconnaissance, enabling commanders to make informed decisions with timely and accurate intelligence",
            "For tactical law enforcement, the MQ650lv drone offers invaluable aerial perspective,during high-risk operations,  aiding in suspect apprehension and ensuring officer safety.",
            "The MQ650lv drone is exceptionally well-suited for the use case of tactical traffic monitoring",
        ]
    },

    {
        id: 3,
        name: "Aero Phantom",
        tagline: "COMPACT | SWIFT | UTILITARIAN",
        description: "MQ650LV is a light weight micro-category variant borrowing its structural toughness ffrom MQ750+  Developed for quick deployment and versatile operations in the coldest and the windiest of the weathers,  the MQ650LV delivers 40 mins of operational endurance with a 10x optical zoom equipped HD electro-optic sensor. Swappable battery options make re-deployment swift enhancing the system's efficiency in real time survielance missions. Rapid survielance and reconnaisance in the tactile levels of warfare are most easily and effectively achieved with MQ650LV.",
        AircraftPageImg: Rfixedwing,
        img1: droneImage3,
        img2: droneImage3,
        img3: droneImage3,
        FlightTime: "45 Hours",
        Range: "95 KM",
        LiveFeed: "8k/60fps",
        Payload: "2 Kg",

        keyHighlights: [
            "Quick Deployment",
            "Tool-Less Assembly",
            "Swappable Battery",
            "Hot Swappable Payloads",
        ],

        TechnicalDetails: [
            "Advanced Hybrid Composite Material",
            "650mm wheel base",
            "Empty Weight - 1KG",
            "Wind Resistance Index - 30Knots",
            "Communication Links - 2.4Ghz,900Mhz(encrypted)",
            "Range Control&Telemetry - 10kms LOS",
            "Cruise Speed - 8ms",
            "Dash Speed - 10m/s",
            "Service Ceiling - 4000m AMSL",
            "Operational Altitude - 500mAGL",
            "Propulsion - Brushless Electric",
        ],

        Features: [
            "HD Resolution Cam -4k, 10x,Optical Zoom",
            "Active Obstacle Avoidance - Upto 10m",
            "Gimbal Stabilization - 3 axis stabilized",
            "Aural Signature - 40dB@300m AGL",
            "Portability - Back Packable",
            "Operational Temperature - -10 to 50c",
            "Operating Environment - Multi Terrain",

        ],

        UseCases: [
            "For rapid surveillance, MQ650lv drone is the ideal solution",
            "The MQ650lv drone is ideally suited for rapid mapping use cases, delivering precise and efficient geospatial data",
            "The MQ650lv drone's capabilities make it a vital asset for tactical-level reconnaissance, enabling commanders to make informed decisions with timely and accurate intelligence",
            "For tactical law enforcement, the MQ650lv drone offers invaluable aerial perspective,during high-risk operations,  aiding in suspect apprehension and ensuring officer safety.",
            "The MQ650lv drone is exceptionally well-suited for the use case of tactical traffic monitoring",
        ]
    },

    // {
    //     id: 4,
    //     name: "Sky Weaver",
    //     tagline: "COMPACT | SWIFT | UTILITARIAN",
    //     description: "MQ650LV is a light weight micro-category variant borrowing its structural toughness ffrom MQ750+  Developed for quick deployment and versatile operations in the coldest and the windiest of the weathers,  the MQ650LV delivers 40 mins of operational endurance with a 10x optical zoom equipped HD electro-optic sensor. Swappable battery options make re-deployment swift enhancing the system's efficiency in real time survielance missions. Rapid survielance and reconnaisance in the tactile levels of warfare are most easily and effectively achieved with MQ650LV.",
    //     AircraftPageImg: droneImage4,
    //     img1: droneImage4,
    //     img2: droneImage4,
    //     img3: droneImage4,
    //     title: "Vector Glide",
    //     flightTime: "15 Minutes",
    //     TransmissionRange: "10 KM",
    //     LiveFeed: "1k/60fps",
    //     Positioning: "Environmental Awareness",

    //     keyHighlights: [
    //         "Quick Deployment",
    //         "Tool-Less Assembly",
    //         "Swappable Battery",
    //         "Hot Swappable Payloads",
    //     ],

    //     TechnicalDetails: [
    //         "Advanced Hybrid Composite Material",
    //         "650mm wheel base",
    //         "Empty Weight - 1KG",
    //         "Wind Resistance Index - 30Knots",
    //         "Communication Links - 2.4Ghz,900Mhz(encrypted)",
    //         "Range Control&Telemetry - 10kms LOS",
    //         "Cruise Speed - 8ms",
    //         "Dash Speed - 10m/s",
    //         "Service Ceiling - 4000m AMSL",
    //         "Operational Altitude - 500mAGL",
    //         "Propulsion - Brushless Electric",
    //     ],

    //     Features: [
    //         "HD Resolution Cam -4k, 10x,Optical Zoom",
    //         "Active Obstacle Avoidance - Upto 10m",
    //         "Gimbal Stabilization - 3 axis stabilized",
    //         "Aural Signature - 40dB@300m AGL",
    //         "Portability - Back Packable",
    //         "Operational Temperature - -10 to 50c",
    //         "Operating Environment - Multi Terrain",

    //     ],

    //     UseCases: [
    //         "For rapid surveillance, MQ650lv drone is the ideal solution",
    //         "The MQ650lv drone is ideally suited for rapid mapping use cases, delivering precise and efficient geospatial data",
    //         "The MQ650lv drone's capabilities make it a vital asset for tactical-level reconnaissance, enabling commanders to make informed decisions with timely and accurate intelligence",
    //         "For tactical law enforcement, the MQ650lv drone offers invaluable aerial perspective,during high-risk operations,  aiding in suspect apprehension and ensuring officer safety.",
    //         "The MQ650lv drone is exceptionally well-suited for the use case of tactical traffic monitoring",
    //     ]
    // },

    // {
    //     id: 5,
    //     name: "Sky Weaver",
    //     tagline: "COMPACT | SWIFT | UTILITARIAN",
    //     description: "MQ650LV is a light weight micro-category variant borrowing its structural toughness ffrom MQ750+  Developed for quick deployment and versatile operations in the coldest and the windiest of the weathers,  the MQ650LV delivers 40 mins of operational endurance with a 10x optical zoom equipped HD electro-optic sensor. Swappable battery options make re-deployment swift enhancing the system's efficiency in real time survielance missions. Rapid survielance and reconnaisance in the tactile levels of warfare are most easily and effectively achieved with MQ650LV.",
    //     AircraftPageImg: droneImage5,
    //     img1: droneImage5,
    //     img2: droneImage5,
    //     img3: droneImage5,
    //     flightTime: "125 Minutes",
    //     TransmissionRange: "30 KM",
    //     LiveFeed: "4k/30fps",
    //     Positioning: "Underwater Detection",

    //     keyHighlights: [
    //         "Quick Deployment",
    //         "Tool-Less Assembly",
    //         "Swappable Battery",
    //         "Hot Swappable Payloads",
    //     ],

    //     TechnicalDetails: [
    //         "Advanced Hybrid Composite Material",
    //         "650mm wheel base",
    //         "Empty Weight - 1KG",
    //         "Wind Resistance Index - 30Knots",
    //         "Communication Links - 2.4Ghz,900Mhz(encrypted)",
    //         "Range Control&Telemetry - 10kms LOS",
    //         "Cruise Speed - 8ms",
    //         "Dash Speed - 10m/s",
    //         "Service Ceiling - 4000m AMSL",
    //         "Operational Altitude - 500mAGL",
    //         "Propulsion - Brushless Electric",
    //     ],

    //     Features: [
    //         "HD Resolution Cam -4k, 10x,Optical Zoom",
    //         "Active Obstacle Avoidance - Upto 10m",
    //         "Gimbal Stabilization - 3 axis stabilized",
    //         "Aural Signature - 40dB@300m AGL",
    //         "Portability - Back Packable",
    //         "Operational Temperature - -10 to 50c",
    //         "Operating Environment - Multi Terrain",

    //     ],

    //     UseCases: [
    //         "For rapid surveillance, MQ650lv drone is the ideal solution",
    //         "The MQ650lv drone is ideally suited for rapid mapping use cases, delivering precise and efficient geospatial data",
    //         "The MQ650lv drone's capabilities make it a vital asset for tactical-level reconnaissance, enabling commanders to make informed decisions with timely and accurate intelligence",
    //         "For tactical law enforcement, the MQ650lv drone offers invaluable aerial perspective,during high-risk operations,  aiding in suspect apprehension and ensuring officer safety.",
    //         "The MQ650lv drone is exceptionally well-suited for the use case of tactical traffic monitoring",
    //     ]
    // },

];

export default AircraftData;