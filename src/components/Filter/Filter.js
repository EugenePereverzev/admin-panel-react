// import '../../index.css';
// import '../../font.css';
import './Filter.css';

export default function Filter () {
    return (
        <div className="filter">
            <div className="filter-main">
                <div className="filter-lev2 color-style-main-reverse">Описание фильтра</div>
                <div className="filter-lev2 active-box color-style-main-reverse"></div>   
            </div>
            <div className="filter-detail"></div>
        </div>
    )
};