import React, {PropsWithChildren} from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

export type PageLayoutProps = {
    children: React.ReactNode;
};

export const PageLayout: React.FC = (props: PageLayoutProps) => {
    const { children } = props;
    return (
        <div className="flex-grow min-h-full relative">
            <Header />
            <div className="py-8 sm:py-12 container">
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default PageLayout;
