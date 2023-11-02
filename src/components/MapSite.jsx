export const MapSite = ({mapClassName}) => {
    return (

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.85421163141!2d-80.15277430418733!3d26.024039397493077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abaf6651c773%3A0xe3176946e51c4819!2s1416%20N%20Dixie%20Hwy%2C%20Hollywood%2C%20FL%2033020%2C%20EE.%20UU.!5e0!3m2!1ses!2sni!4v1683326567922!5m2!1ses!2sni"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={mapClassName}
        >
        </iframe>
    )
}