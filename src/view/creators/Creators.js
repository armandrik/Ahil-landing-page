import React from 'react'
import Slider from "react-slick";
import person1 from '../../creatorIcons/undraw_female_avatar_efig.svg'
import person2 from '../../creatorIcons/undraw_male_avatar_g98d.svg'
import person3 from '../../creatorIcons/undraw_pic_profile_re_7g2h.svg'
import person4 from '../../creatorIcons/undraw_profile_pic_re_iwgo.svg'

export const Creators = () => {

    const content = [
        { id: 1, img: person1, name: 'محدثه رضایی', title: 'Backend developer' },
        { id: 2, img: person2, name: 'سهیل خاکی', title: 'Ui/Ux designer' },
        { id: 3, img: person3, name: 'علی راستگو', title: 'Frontend developer' },
        { id: 4, img: person4, name: 'مبینا لشکری', title: 'Maneger' },
    ]

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        rtl: true,
        swipeToSlide: true,
        arrows: false,
        className: 'slider',
        pauseOnHover: false
    };

    return (
        <article className='creator-slider-wrapper' id='creators'>
            <h1>سازندگان</h1>
            <Slider {...settings}>
                {content.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt='creators'/>
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
                    </div>
                ))}
            </Slider>
        </article>
    )
}
