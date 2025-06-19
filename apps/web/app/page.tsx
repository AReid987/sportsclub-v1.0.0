import Image, { type ImageProps } from 'next/image';
import { Button } from '@sportsclub/ui/button';
import styles from './page.module.css';

type Props = Omit<ImageProps, 'src'> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#2563eb',
            textAlign: 'center',
          }}
        >
          Sportsclub
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            color: '#ea580c',
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          Play Smart. Win Big.
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button
            style={{
              background: 'linear-gradient(to right, #2563eb, #ea580c)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '2rem',
              fontWeight: '600',
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
