import { useContext } from 'react';

import { Generator, Footer, ProgressBar } from '@/components';
import { Layout } from '@/styled-components';
import { UIContext } from '@/context';

const Container = () => {

    const { isLoading } = useContext( UIContext );

    if ( isLoading )
        return (
            <Layout>
                <ProgressBar />
                <Footer />
            </Layout>
        )

    return (
        <Layout>
            <Generator />
            <Footer />
        </Layout>
    )
}

export default Container;
