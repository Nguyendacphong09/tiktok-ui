import Header from '~/components/layouts/layout_components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header long />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
