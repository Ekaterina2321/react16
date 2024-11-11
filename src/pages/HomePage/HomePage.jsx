
import AllCollapseExample from '../../components/Accordeon/Accordeon';
import AlwaysOpenExample from '../../components/Accordeon/Accordeon';
import DarkVariantExample from '../../components/Banner/Banner';
import { Header } from '../../components/Header/Header';
import s from './HomePage.module.css';

export function HomePage() {
    return (
        <div className="section">
            <div className="home-block">
                <h2>«CANNO». Он такой один</h2>

                <div className="carucel">
                    <DarkVariantExample />
                </div>

                <div className="accordeon">
                    <AllCollapseExample/>
                </div>
            </div>
        </div>
    )
}