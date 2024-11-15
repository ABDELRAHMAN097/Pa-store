import  { useEffect } from 'react';
import { gsap, Linear } from 'gsap';
import './styles/notfound.css'; // Ensure you create this CSS file for your styles
import OutlineButton from '../components/helpers/buttons/OutlineButton';

const NotFound = () => {
  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    t1.to(".cog1", {
      transformOrigin: "50% 50%",
      rotation: "+=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });

    t2.to(".cog2", {
      transformOrigin: "50% 50%",
      rotation: "-=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });

    t3.fromTo(".error-message", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      stagger: {
        repeat: -1,
        yoyo: true,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden max-w-[100vw] ">
    <div className="notfound-container h-[80vh]">
      <h1 className="first-number">4</h1>
      <div className="cog-wheel cog-wheel1">
        <div className="cog cog1">
          <div className="top"></div>
          <div className="down"></div>
          <div className="left-top"></div>
          <div className="left-down"></div>
          <div className="right-top"></div>
          <div className="right-down"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
      
      <div className="cog-wheel cog-wheel2"> 
        <div className="cog cog2">
          <div className="top"></div>
          <div className="down"></div>
          <div className="left-top"></div>
          <div className="left-down"></div>
          <div className="right-top"></div>
          <div className="right-down"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
      
      <h1 className="second-number">4</h1>
      

    </div>
      <OutlineButton isLink={true} link="/" LinkclassNames='flex justify-center' text={"الرجوع للصفحة الرئيسية"}  />
</div>
  );
};

export default NotFound;
