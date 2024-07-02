import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './features.module.css';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    DarkSvg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Around the world',
        Svg: require('@site/static/img/home/world.svg').default,
        DarkSvg: require('@site/static/img/home/world-dark.svg').default,
        description: (
            <>
                We generate a variety of countries, and can generate custom maps if our selection does not meet your requirements.
            </>
        ),
    },
    {
        title: 'Community',
        Svg: require('@site/static/img/home/community.svg').default,
        DarkSvg: require('@site/static/img/home/community-dark.svg').default,
        description: (
            <>
                Have you created something with our maps? Don't hesitate to share it on our Discord! And don't hesitate to share your feedback on our maps, so that we can improve them!
            </>
        ),
    },
    {
        title: 'Sustainable',
        Svg: require('@site/static/img/home/sustainable.svg').default,
        DarkSvg: require('@site/static/img/home/sustainable-dark.svg').default,
        description: (
            <>
                Our maps are hosted on servers powered exclusively by renewable electricity.
            </>
        ),
    },
];

function Feature({ title, Svg, DarkSvg, description }: FeatureItem) {
    const { colorMode } = useColorMode();
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {colorMode === "light" && <Svg className={styles.featureSvg} role="img" />}
                {colorMode === "dark" && <DarkSvg className={styles.featureSvg} role="img" />}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomeFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}