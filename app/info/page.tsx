"use client";
import PhotoSlider from "../components/Slider";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 300, height: 200 });
    const [smallImageSize, setSmallImageSize] = useState({
        width: 200,
        height: 150,
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 1024);
            if (window.innerWidth <= 768) {
                setImageSize({ width: 200, height: 150 });
                setSmallImageSize({ width: 150, height: 100 });
            } else if (window.innerWidth <= 1024) {
                setImageSize({ width: 300, height: 200 });
                setSmallImageSize({ width: 200, height: 150 });
            } else {
                setImageSize({ width: 400, height: 300 });
                setSmallImageSize({ width: 300, height: 200 });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const photos1 = [
        "/images/jardin.jpg",
        "/images/facade.jpg",
        "/images/jardin2.jpg",
    ];

    const photos2 = [
        "/images/salle-de-jeu-entree.jpg",
        "/images/chambre-rose.jpg",
        "/images/chambre-blanche.jpg",
    ];

    const photos3 = [
        "/images/jardin-neige.jpg",
        "/images/jardin-jeux.jpg",
        "/images/jardin-noir-et-blanc.jpg",
        "/images/tomate.jpg",
        "/images/potager.jpg",
    ];

    return (
        <div>
            <div className="flex justify-center mt-7">
                <h1 className="flex items-center text-3xl">
                    Mam Les Cro Mignon&apos;s
                </h1>
            </div>
            <div className="flex flex-col justify-center mt-7 w-4/5 mx-auto">
                <div className="flex justify-center">
                    <p className="text-justify text-xl">
                        La MAM "Les cro mignons" est ouverte depuis mars 2015,
                        au 68 rue Thibaut de Carvin.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    {isMobileOrTablet ? (
                        <PhotoSlider photos={photos1} />
                    ) : (
                        <div className="flex space-x-4">
                            {photos1.map((photo, index) => (
                                <Image
                                    key={index}
                                    src={photo}
                                    alt={`Image ${index + 1}`}
                                    width={imageSize.width}
                                    height={imageSize.height}
                                    className="rounded-lg"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-center mt-7 w-4/5 mx-auto">
                <div className="flex justify-center">
                    <p className="text-justify text-xl">
                        Les assistantes maternelles accueillent jusqu'à 16
                        enfants dans un local de 140m2. La salle de vie comporte
                        2 pièces et les enfants ont également accès au côté
                        repas de la cuisine, à la salle d'eau, ainsi qu'aux
                        chambres de l'étage. Ils n'ont pas accès à la cave, ni
                        au grenier; ainsi qu'au coté préparation des repas de la
                        cuisine et la salle des machines.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    {isMobileOrTablet ? (
                        <PhotoSlider photos={photos2} />
                    ) : (
                        <div className="flex space-x-4">
                            {photos2.map((photo, index) => (
                                <Image
                                    key={index}
                                    src={photo}
                                    alt={`Image ${index + 1}`}
                                    width={imageSize.width}
                                    height={imageSize.height}
                                    className="rounded-lg"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-center mt-7 w-4/5 mx-auto">
                <div className="flex justify-center">
                    <p className="text-justify text-xl">
                        Ils peuvent profiter d'un extérieur de 200m2 avec jardin
                        potager. Un carré potager est mis en place durant la
                        saison plus chaude afin d'éduquer les enfants à
                        l'environnement en cultivant des légumes, fruits et
                        herbes. On espère en faire un lieu d&apos;apprentissage,
                        de détentes et d'activités ludiques.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    {isMobileOrTablet ? (
                        <PhotoSlider photos={photos3} />
                    ) : (
                        <div className="flex space-x-4">
                            {photos3.map((photo, index) => (
                                <Image
                                    key={index}
                                    src={photo}
                                    alt={`Image ${index + 1}`}
                                    width={smallImageSize.width}
                                    height={smallImageSize.height}
                                    className="rounded-lg"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-center mt-7 w-4/5 mx-auto">
                <div className="flex justify-center">
                    <p className="text-justify text-xl">
                        A la MAM &quot;les cro mignons&quot;, nous sommes en
                        constante évolution pour le bien-être des enfants. De ce
                        fait, nous faisons des formations pour évoluer. Les
                        bébés auront la chance de pouvoir &quot;parler un mot et
                        un signe&quot; et les plus grands de chanter les
                        comptines avec les signes. Des intervenants extérieurs
                        viendront divertir les enfants, avec une éventuelle
                        participation financière des parents.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    {isMobileOrTablet ? (
                        <PhotoSlider photos={photos2} />
                    ) : (
                        <div className="flex space-x-4">
                            {photos3.map((photo, index) => (
                                <Image
                                    key={index}
                                    src={photo}
                                    alt={`Image ${index + 1}`}
                                    width={imageSize.width}
                                    height={imageSize.height}
                                    className="rounded-lg"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-center mt-7 w-4/5 mx-auto">
                <div className="flex justify-center">
                    <p className="text-justify text-xl">
                        Les parents sont les premiers éducateurs des enfants
                        accueillis à la MAM. Nous accompagnons donc cette
                        éducation. C'est un partenariat de confiance et respect
                        mutuel partagés entre la famille des enfants et l'équipe
                        des assistantes maternelles afin d'assurer au maximum
                        une continuité entre la vie de l'enfant à domicile et à
                        la MAM.
                        <br />
                        
                        Les parents sont sollicités lors d&apos;événements ou
                        de différentes ventes au profit de l'association afin
                        d'améliorer le quotidien des enfants accueillis. Les
                        parents participent aux fêtes essentielles de la
                        structure, comme par exemple un apéritif de départ pour
                        l'école, un goûter au moment de Noël…
                    </p>
                </div>
            </div>
        </div>
    );
}
