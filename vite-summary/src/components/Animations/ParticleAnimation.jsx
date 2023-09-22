import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';



const ParticleAnimation = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // Do something when particles are loaded
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
				background: {
                    color: {
                        value: "#3a5e7f",
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
                            enable: true,
                            area: 2200,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'image',
                        image: [
                            {
                                src: '../../../src/assets/img/vite.svg',
                                height: 20,
                                width: 20,
                            },
                            {
                                src: '../../../src/assets/img/reactico.svg',
                                height: 20,
                                width: 20,
                            },
                            {
                                src: '../../../src/assets/img/firebase.svg',
                                height: 20,
                                width: 20,
                            },
                            {
                                src: '../../../src/assets/img/nodejsico.svg',
                                height: 20,
                                width: 20,
                            },
                        ],
                    },
                    size: {
                        value: { min: 10, max: 25 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleAnimation;