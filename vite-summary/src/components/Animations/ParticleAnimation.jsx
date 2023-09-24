import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

import viteimg from '../../assets/img/vite.svg';
import reactimg from '../../assets/img/reactico.svg';
import firebaseimg from '../../assets/img/firebase.svg';
import nodejsimg from '../../assets/img/nodejsico.svg';

const ParticleAnimation = () => {
    const [particleCount, setParticleCount] = useState(60);

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // Do something when particles are loaded
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 512) {
                setParticleCount(8); 
            } else if(screenWidth < 768) {
                setParticleCount(20);
            } else {
                setParticleCount(45);
            }
        };

        // Добавьте слушатель события изменения размера окна
        window.addEventListener('resize', handleResize);

        // Вызывайте handleResize при монтировании компонента
        handleResize();

        // Удалите слушатель события изменения размера окна при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#26547f",
                    },
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    fpsLimit: 90,
                    color: {
                        value: '#ffffff',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.8,
                        width: 1,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 2000,
                        },
                        value: particleCount, // Используйте текущее значение particleCount
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'image',
                        image: [
                            {
                                src: viteimg,
                                height: 10,
                                width: 10,
                            },
                            {
                                src: reactimg,
                                height: 10,
                                width: 10,
                            },
                            {
                                src: firebaseimg,
                                height: 10,
                                width: 10,
                            },
                            {
                                src: nodejsimg,
                                height: 10,
                                width: 10,
                            },
                        ],
                    },
                    size: {
                        value: { min: 10, max: 25 },
                    },
                },
                detectRetina: false,
            }}
        />
    );
};

export default ParticleAnimation;