import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';
import routes from '../../routes';
import './index.css';

class Layout extends React.Component {
    state = {
        scrollPosition: 0,
    }

    componentDidMount() {
        this.target = window;
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    onScroll = () => {
        if (this.target instanceof window.Window) {
            this.setState({ scrollPosition: Math.floor(this.target.scrollY) });
            return;
        }
        this.setState({ scrollPosition: Math.floor(this.target.scrollTop) });
    }

    render() {
        const { children } = this.props;
        const { scrollPosition } = this.state;
        console.log(scrollPosition)
        return (
            <div className="appLayout-root">
                <div className="appBar">
                    <div className="appBar-logoSection u-flex u-alignItemsCenter u-height50 u-paddingVertical16">
                        <div className="logo u-backgroundNoRepeat u-backgroundSizeCover u-sizeFull u-marginCentering" />
                    </div>
                    <nav className={cls('navBar u-backgroundGreyscale u-height50 u-alignItemsCenter', {
                        'u-fixed u-top0 u-fullWidth': scrollPosition >= 82,
                    })}>
                        <div className="u-fontSize14 u-fullHeight u-paddingHorizontal16 u-flex u-flexJustifyContentSpaceBetween u-alignItemsCenter">
                            {
                                routes.map(item => (
                                    <div key={item.name} className="u-relative u-margin0 u-cursorPointer">
                                        <NavLink className="navBarLink u-colorBlack40 u-fontWeight400 u-textDecorationNone" to={item.path} exact>{item.name}</NavLink>
                                    </div>
                                ))
                            }
                        </div>
                    </nav>
                </div>

                <main className="u-padding16">
                    {children}
                </main>
            </div>
        )
    }
}

export default Layout;
