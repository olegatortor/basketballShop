import React from "react";
import './Map.scss';

function Map() {
    return (
        <div className="map">
            <div className="container">
                <div className="map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2033629369525!2d24.0168427757961!3d49.83863628122765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add742eacc84d%3A0x4ce35ef1ad4456b7!2z0JPRltGA0LrQsCDQtNC70Y8g0YHQsNC90L7QuiDRliDQsNC60YLQuNCy0L3QvtCz0L4g0LLRltC00L_QvtGH0LjQvdC60YM!5e0!3m2!1suk!2sua!4v1697306936945!5m2!1suk!2sua" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" className="map-img"></iframe>

                    <div className="map-address">
                        <div className="map-address-item map-mail">
                            <div className="map-address-title">Пошта</div>
                            <a  href="mailto:hoops-haven@gmail.com" className='map-address-link'>hoops-haven@gmail.com</a>
                        </div>
                        <div className="map-address-item map-phone">
                            <div className="map-address-title">Телефон</div>
                            <a href="tel:+380 000 00 00 00" className='map-address-link'>+380 000 00 00 00</a>
                        </div>
                        <div className="map-address-item map-place">
                            <div className="map-address-title">Адреса</div>
                            <span className='map-address-link'>Луцьк</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;