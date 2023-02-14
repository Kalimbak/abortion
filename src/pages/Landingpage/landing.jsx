import React from "react";
import "./landing.css";
import Pic from "../../image.png";
import { useState } from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import { Footer } from "../../components/Footer/footer";
import routes from "../../utils/routes";
import { motion } from "framer-motion";
import useInView from "../../helpers/useInView";

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <p className="text">
//       {isReadMore ? text.slice(0, 200) : text}
//       <span onClick={toggleReadMore} className="read-or-hide display-inline">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };

// const myFunction = () =>{
//   console.log("hello")
//   const dots = document.getElementById("dots");
//   const moreText = document.getElementById("more");
//   const btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     // dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     // moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     // moreText.style.display = "inline";
//   }
// }

export const Landing = ({ direction = "up", offset = 100 }) => {
  const [selected, setSelected] = useState()

  const handleClick = (id) => {
    setSelected(id)
  }
  const y = { target: 0 };

  if (direction === "up") y.initial = "200%";
  else y.initial = "hidden";

  const [ref, inView] = useInView({ margin: `${offset}px 0px 0px 10px` });

  // const router = useRouter()
  const [navbar, setNavbar] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }


  window.addEventListener('scroll', onScroll)
  return (
    <div id="home" data-new-gr-c-s-check-loaded="14.1096.0" data-gr-ext-installed="">
      <div id="_next"data-reactroot="">
        <header id="home" className={navbar ? 'fixed top-0 w-full z-30 bg-white transition-all shadow-md pt-0' : "fixed top-0 w-full z-30 bg-white transition-all pt-3"}>
          <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
            <div className="col-start-1 col-end-2 flex items-center">
              <strong>LOGO HERE</strong>
            </div>
            <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
              {routes.map((route) => {
                return (
                  <a onClick={() => handleClick(route.id)} key={route.id} href={route.url} className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-green-500  hover:border-b-2 hover:border-green-500 ${route.isActive ? 'border-b-2 border-green-500' : ""} ${selected === route.id ? 'border-b-2 border-green-500' : ""}`}>{route.name}</a>
                )
              })}
            </ul>
            <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
              <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-green-800 text-green-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-800 hover:text-white transition-all hover:shadow-green">
                Get involved
              </button>
            </div>
          </nav>
        </header>
        <div className="max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto" id="about">
          <AnimationRevealPage>
            <div>
              <div className="grid grid-flow-row opacity-1 transform-none sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
                <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                  <h2 className="text-3xl font-bold text-left text-green-800">
                    Abortion
                  </h2>
                  <p className="text-black-500 mt-5">
                    Having a baby is one the most enjoyable moment. Friends come
                    with gifts and some people held parties to welcome the
                    newborn. However, nowadays some of the pregnancies are not
                    wanted so that having that bay is no longer something to
                    enjoy.
                  </p>
                  <p className="text-black-500 mt-5">
                    In all corners of the world, people use different ways to
                    avoid pregnancy. In Rwanda, there are some old culture
                    traditions that people use to perform in order to avoid
                    pregnancy. Some of women would bath in dump water to avoid
                    being pregnant in old age. Some of the families used to do
                    some ceremonies to protect their young girls to be pregnant.
                  </p>
                  <p className="text-black-500 mt-5">
                    This shows that the issue of avoiding pregnancy is not recent
                    as you may think. It was done even the introduction of
                    different contraceptive methods. But with the modern medicine,
                    preventing pregnant was made easy. However, still, a great
                    number of girls and women have unwanted pregnancies. Some of
                    them may wish to abort at any cost. In the country like ours
                    where abortion is illegal, a considerable number of women and
                    girls opt unsafe abortion.
                  </p>
                </div>
                <div className="flex w-full">
                  <div className="h-full w-full opacity-1 transform-none">
                    <span className="one">
                      <span className="two"></span>
                      <img
                        alt="VPN Illustrasi"
                        src={Pic}
                        decoding="async"
                        data-nimg="responsive"
                        className="img"
                        sizes="100vw"
                      />
                      <noscript>
                        <img
                          alt="VPN Illustrasi"
                          sizes="100vw"
                          src={Pic}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimationRevealPage>
          <div id="abortion">
            <div className="container">
              <h1 className="text-2xl text-center mb-8 font-bold text-green-800">
                What is abortion? What’s the status of it in Rwanda?
              </h1>
              {/* <ReadMore> */}
              
              <p className="text-black-500 mt-5 text-left">
                Abortion is defined as the termination of pregnancy before 20
                weeks of pregnancy. Some of the countries even go up to 28 weeks
                of pregnancy
              </p>
              <span  style={{ display: showMore ? 'block' : 'none' }} >
              <p className="text-black-500 mt-5 text-left">
                Although, abortion in Rwanda is illegal, in 2009 about 60,000
                women and girls had abortion, according to the research of
                University of Rwanda, School of Public health. On average it’s 25
                women in 1000 aged between 14 and 44.
              </p>
            
              <p className="text-black-500 mt-5 text-left mb-5">
                The number of illegal abortion is low compared to other neighbors’
                countries and other countries in sub Saharan Africa. The capital
                city of Rwanda, Kigali, counts one third of all abortions in
                Rwanda.
              </p>
              {/* </ReadMore> */}
              </span>
              <button onClick={() => setShowMore(!showMore)} className="font-medium mt-2 tracking-wide py-1 px-5 sm:px-8 border border-green-800 text-green-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-800 hover:text-white transition-all hover:shadow-green">
        {showMore ? 'Read Less' : 'Read More'}
      </button>
            </div>
            <div>
              <h1 className="text-2xl text-center mb-8 font-bold text-green-800">
                Why access to abortion matters ?
              </h1>
              <AnimationRevealPage>
                <div className="relative w-full flex">
                  <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    <div className="flex opacity-1 transform-noneitems-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 mb-5">
                      <div className="flex flex-col mx-auto w-40 sm:w-auto">
                        <div className="flex items-center justify-center bg-green-100 w-12 h-12 mr-6 rounded-full">
                          <div className="rounded-full">1</div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-lg text-black-500">
                            Abortion is a common health intervention. It is safe
                            when carried out using a method recommended by WHO,
                            appropriate to the pregnancy duration and by someone
                            with the necessary skills.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex opacity-1 transform-none items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 mb-5">
                      <div className="flex flex-col mx-auto w-40 sm:w-auto">
                        <div className="flex items-center justify-center bg-green-100 w-12 h-12 mr-6 rounded-full">
                          <div className="rounded-full">2</div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-lg text-black-500">
                            Six out of 10 of all unintended pregnancies end in an
                            induced abortion
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex opacity-1 transform-none items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 mb-5">
                      <div className="flex flex-col mx-auto w-40 sm:w-auto">
                        <div className="flex items-center justify-center bg-green-100 w-12 h-12 mr-6 rounded-full">
                          <div className="rounded-full">3</div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-lg text-black-500">
                            Around 45% of all abortions are unsafe, of which 97%
                            take place in developing countries
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex opacity-1 transform-none items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 mb-5">
                      <div className="flex flex-col mx-auto w-40 sm:w-auto">
                        <div className="flex items-center justify-center bg-green-100 w-12 h-12 mr-6 rounded-full">
                          <div className="rounded-full">4</div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-lg text-black-500">
                            Unsafe abortion is a leading – but preventable – cause
                            of maternal deaths and morbidities. It can lead to
                            physical and mental health complications and social and
                            financial burdens for women, communities and health
                            systems.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex opacity-1 transform-none items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 mb-5">
                      <div className="flex flex-col mx-auto w-40 sm:w-auto">
                        <div className="flex items-center justify-center bg-green-100 w-12 h-12 mr-6 rounded-full">
                          <div className="rounded-full">5</div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-lg text-black-500">
                            Lack of access to safe, timely, affordable and
                            respectful abortion care is a critical public health and
                            human rights issue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute filter: blur(114px) bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"></div>
                </div>
              </AnimationRevealPage>


            </div>
          </div>
          <div
            className="max-w-screen-xl mt-4 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="impact"
          >
            <AnimationRevealPage>
              <div className="grid grid-flow-row mt-2 sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p y-8 my-12">
                <div className="flex w-full justify-end">
                  <div className="h-full w-full p-4 opacity-1 transform-none">
                    <h4 className="text-2xl mb-5 font-bold text-green-800">
                      The situation of clandestine abortion in Rwanda.
                    </h4>
                    <p className="text-left text-sm mb-4">
                      The health risk of an abortion is directly related to how
                      and by whom the procedure is performed. Because of legal
                      restrictions and stigma, women seeking abortions often
                      resort to clandestine procedures, where safety cannot be
                      assured.
                    </p>
                    <span  style={{ display: showMore ? 'block' : 'none' }} >

                    <p className="text-left text-sm mb-4">
                      Overall, half of all abortions in Rwanda are performed by
                      untrained individuals and are considered to be very high
                      risk, an estimated 34% are provided by traditional healers
                      and 17% are induced by the women themselves.
                    </p>
                    <p className="text-left text-sm mb-4">
                      About half of all abortions are provided by trained health
                      professionals physicians (19%), nurses or medical assistants
                      (16%) and trained midwives (14%). But many procedures do not
                      take place in health facilities and result in complications.
                    </p>
                    <p className="text-left text-sm mb-4">
                      Poor rural women are the most likely to go to untrained
                      providers or to self-induce: Seventy-four percent of their
                      abortions are from these sources, compared with 15% of those
                      for non-poor women
                    </p>
                    </span>
                    <button onClick={() => setShowMore(!showMore)} className="font-medium mt-2 tracking-wide py-1 px-5 sm:px-8 border border-green-800 text-green-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-800 hover:text-white transition-all hover:shadow-green">
        {showMore ? 'Read Less' : 'Read More'}
      </button>
                  </div>
                </div>
                <div>
                  <div className="relative mb-1 flex opacity-1 transform-none flex-col items-end justify-center ml-auto w-full lg:w-9/12">
                    <h3 className="text-3xl lg:text-2xl font-medium leading-relaxed text-green-800">
                      Some of reasons that may lead someone to illegal abortion
                    </h3>
                    <p className="my-2 text-black-500">
                      There are many reasons that may prompt someone to do
                      abortion at any cost. Here are some:
                    </p>
                    <div ref={ref} >
                      <motion.ul initial={{ y: y.initial }} animate={{
                        y: inView && y.target,
                        transitionEnd: {
                          y: inView && 10,
                        },
                      }}
                        transition={{ duration: 2 }} className="flex flex-col gap-1 text-black-500 absolute right-0 left-0">
                        <li className="flex gap-3 items-center">
                          <svg className="" width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                          </svg>
                          Her age.
                        </li>
                        <li className="flex gap-3 circle-check custom-list opacity-1 transform-none items-center">
                          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                          </svg>
                          Her occupation
                        </li>
                        <span  style={{ display: showMore ? 'block' : 'none' }} >

                        <li className="flex gap-3 circle-check custom-list opacity-1 transform-none items-center">
                          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                          </svg>
                          Some medical conditions
                        </li>
                        <li className="flex gap-3 circle-check custom-list opacity-1 transform-none items-center">
                          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                          </svg>
                          Unintended pregnancy
                        </li>
                        <li className="flex gap-3 circle-check custom-list opacity-1 transform-none items-center">
                          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                          </svg>
                          <p className=""> Pregnancy remotion from rape</p>
                        </li>
                        <li className="flex gap-3 circle-check custom-list opacity-1 transform-none items-center">
                          <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                          </svg>
                          Feeling not ready to be a parent
                        </li>
                        </span>
                        {/* <button onClick={() => setShowMore(!showMore)} className="font-medium mt-2 mb-8 tracking-wide py-1 px-5 sm:px-8 border border-green-800 text-green-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-800 hover:text-white transition-all hover:shadow-green">
        {showMore ? 'Read Less' : 'Read More'}
      </button> */}
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationRevealPage>
            <AnimationRevealPage>
              <div
                className="bg-gradient-to-b  mb-8 mt-8 from-white-300 to-white-500 w-full py-14"
                id="pricing"
              >
                <div className="max-w-screen-xl mt-8 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                  <div className="flex flex-col w-full">
                    <div>
                      <h3 className="text-2xl opacity-1 transform-none sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 mt-5 text-green-800">
                        Health consequences of unsafe/illegal abortion
                      </h3>
                      <p className="leading-normal opacity-1 transform-none text-left mx-auto my-2 mb-4">
                        Forty percent of Rwandan women having an abortion are
                        subject to complications that require medical attention.
                        Yet women are likely to experience complications at
                        different rates based on where they obtain the abortion
                        and who performed it. The complication rate is as high as
                        54–55% among poor women in both rural and urban areas.
                      </p>
                      <span  style={{ display: showMore ? 'block' : 'none' }} >

                      <p className="leading-normal opacity-1 transform-none text-left mx-auto my-2 mb-4">
                        Complication rates are highest for procedures that are
                        induced by women themselves (67%) or are performed by
                        traditional healers (61%), the kinds of procedures that
                        poor rural women are more likely than other women to have.
                      </p>
                      <p className="leading-normal opacity-1 transform-none text-left mx-auto my-2 mb-4">
                        Thirty percent of all women who develop complications do
                        not receive the medical attention they need. This
                        proportion is especially high among poor women, 38–43% of
                        these women do not get care in facilities, compared with
                        15–16% of non-poor women.
                      </p>
                      <p className="leading-normal opacity-1 transform-none text-left mx-auto my-2 mb-4 mt-10">
                        Only in 2009, healthcare facility in Rwanda treated
                        abortion complications on 17000 women who had illegal
                        abortion. Briefly, here are some of the health related
                        consequences of unsafe abortion:
                      </p>

                      <div className=" more w-1/2">
                        <ul className="text-black-500 self-start list-inside ml-8">
                          <li className="relative flex circle-check custom-list text-left hover:scale-110 hover:-translate-x-10 duration-300 hover:tracking-wide">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                            Post abortion infections
                          </li>
                          <li
                            className="relative flex opacity-1 transform-none circle-check custom-list text-left hover:scale-110 hover:-translate-x-10 duration-300 hover:tracking-wide"

                          ><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                            Post abortion infections
                          </li>
                          <li
                            className="relative flex opacity-1 transform-none circle-check custom-list text-left hover:scale-110 hover:-translate-x-10 duration-300 hover:tracking-wide"

                          ><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                            Post abortion bleeding which can lead to death
                          </li>
                          <li
                            className="relative flex opacity-1 transform-none circle-check custom-list text-left hover:scale-110 hover:-translate-x-10 duration-300 hover:tracking-wide"

                          ><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                            Sterility
                          </li>
                          <li
                            className="relative flex opacity-1 transform-none circle-check custom-list text-left hover:scale-110 hover:-translate-x-10 duration-300 hover:tracking-wide"

                          ><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                            Post abortion mental illnesses
                          </li>
                          <li
                            className="relative  flex opacity-1 transform-none circle-check custom-list text-left hover:scale-110 hover:-translate-x-10 duration-300 hover:tracking-wide"

                          ><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z" fill="#2FAB73" />
                            </svg>
                            Post abortion hormonal imbalances
                          </li>
                        </ul>
                      </div>
                      </span>
                      <button onClick={() => setShowMore(!showMore)} className="font-medium mt-2 tracking-wide py-1 px-5 sm:px-8 border border-green-800 text-green-800 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-800 hover:text-white transition-all hover:shadow-green">
        {showMore ? 'Read Less' : 'Read More'}
      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationRevealPage>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
