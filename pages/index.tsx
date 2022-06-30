import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

type ArrayProps = {
    arr: string[]
}

const Home: NextPage<ArrayProps> = ({arr}:ArrayProps) => {

    // Changing variables by reference (array, object etc.) in props caused React Hydration Error!
    const head = arr.shift();

    // The right way:
    // const [head,...rest] = arr;

    return (
        <div className={styles.container}>
            <Head>
                <title>Hydration Fail Example</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Arrs:
                </h1>
                <h2>
                    Head: {head}
                </h2>
                {
                  arr.map((str,i)=>(
                      <p key={i}>{str}</p>
                  ))
                }
                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

            </main>


        </div>
    )
}

export const getStaticProps: GetStaticProps<ArrayProps> = async () => {
    return {
        props: {
            arr: ['First', 'Second', 'Third']
        },
    }
}

export default Home
