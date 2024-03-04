import { appRoutes } from "./utils/routes";

export const MenuLinks = [
    {
      name: "Accueil",
      href: appRoutes.home,
      active:"home"
    },
    {
      name: "Investir/Epargner",
      href: appRoutes.investir,
      active:"invest"
    },
    {
      name: "Blog",
      href: "#",
      active:"blog"
    },
  ];


export const SocialsNetworks = [
    {
      name: "Instagram",
      href: "#",
      icon:"/img/socials/IG.png"
    },
    {
      name: "Twitter",
      href: "#",
      icon:"/img/socials/Twitter.png"
    },
    {
      name: "Youtube",
      href: "#",
      icon:"/img/socials/Youtube.png"
    },
    {
      name: "LinkedIn",
      href: "#",
      icon:"/img/socials/LinkedIn.png"
    },
  ];

export const InvestItems = [
    {
      title: "Acheter votre bot de trading automatique",
      gbImage:"/img/home/invest1.png"
    },
    {
      title: "Rejoignez la chaîne de fast-food KWI",
      gbImage:"/img/home/invest2.png"
    },
    {
      title: "Une vidéo corporate offerte à 150$",
      gbImage:"/img/home/invest3.png"
    },
    {
      title: "Acheter vos Token Pay",
      gbImage:"/img/home/invest4.png"
    },
    {
      title: "Vous cherchez à lever des fonds",
      gbImage:"/img/home/invest5.png"
    },
  ];

export const ProductsItems = [
    {
      title: "Bot de trading automatique",
      imageUrl:"/img/product/bot.jpg",
      slug:"bot-trading-automatique",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia accusamus temporibus alias earum.",
      hrefLink: "/product/bot-trading-automatique"
    },
    {
      title: "Fast-food KWI",
      imageUrl:"/img/product/food.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia accusamus temporibus alias earum.",
      slug:"fast-food-kwi",
      hrefLink: "/product/fast-food-kwi"
    },
    {
      title: "Une vidéo corporate",
      imageUrl:"/img/product/video.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia accusamus temporibus alias earum.",
      slug:"video-corporate-offerte",
      hrefLink: "/product/video-corporate-offerte"
    },
    {
      title: "Token Pay",
      imageUrl:"/img/product/token.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia accusamus temporibus alias earum.",
      slug:"token-pay",
      hrefLink: "/product/token-pay"
    },
    {
      title: "Levée des fonds",
      imageUrl:"/img/product/levee.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia accusamus temporibus alias earum.",
      slug:"levee-fonds",
      hrefLink: "/product/levee-fonds"
    },
  ];


export default function screenW() {
      const screeWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    return (
      screeWidth
    )
  }

export const PartnairsItems = [
    {
      text: "Amazon",
      logo: "/img/partnairs/amazon.png",
    },
    {
      text: "facebook",
      logo: "/img/partnairs/facebook.png",
    },
    {
      text: "vodacom",
      logo: "/img/partnairs/vodacom.png",
    },
    {
      text: "rawbank",
      logo: "/img/partnairs/rawbank.png",
    },
    {
      text: "internews",
      logo: "/img/partnairs/internews.png",
    },
    {
      text: "rawbank",
      logo: "/img/partnairs/rawbank.png",
    },
    {
      text: "internews",
      logo: "/img/partnairs/internews.png",
    },
  ];

export const TestimoniesElement = [
    {
      text: "« Notre club réunit des dirigeants passionnés qui souhaitent échanger autour des thématiques du numérique (mais pas que) et générer des leads qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion du groupe en partageant sur les expériences de chacun et en organisant des activités hors du groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »",
      imgSrc: "/img/kt.jpg",
      name: "Kristen Tshika",
      company: "KTC"
    },
    {
      text: "« Notre club réunit des dirigeants passionnés qui souhaitent échanger autour des thématiques du numérique (mais pas que) et générer des leads qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion du groupe en partageant sur les expériences de chacun et en organisant des activités hors du groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »",
      imgSrc: "/img/kristen.jpg",
      name: "Sylvain Lys",
      company: "LycGroup"
    },
    {
      text: "« Notre club réunit des dirigeants passionnés qui souhaitent échanger autour des thématiques du numérique (mais pas que) et générer des leads qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion du groupe en partageant sur les expériences de chacun et en organisant des activités hors du groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »",
      imgSrc: "/img/blog.png",
      name: "Beaudrick K.",
      company: "CEO Djodici"
    },
    {
      text: "« Notre club réunit des dirigeants passionnés qui souhaitent échanger autour des thématiques du numérique (mais pas que) et générer des leads qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion du groupe en partageant sur les expériences de chacun et en organisant des activités hors du groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »",
      imgSrc: "/img/kristen.jpg",
      name: "Sylvain Lys",
      company: "LycGroup"
    },
    {
      text: "« Notre club réunit des dirigeants passionnés qui souhaitent échanger autour des thématiques du numérique (mais pas que) et générer des leads qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion du groupe en partageant sur les expériences de chacun et en organisant des activités hors du groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »",
      imgSrc: "/img/kristen.jpg",
      name: "Sylvain Lys",
      company: "LycGroup"
    },
    {
      text: "« Notre club réunit des dirigeants passionnés qui souhaitent échanger autour des thématiques du numérique (mais pas que) et générer des leads qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion du groupe en partageant sur les expériences de chacun et en organisant des activités hors du groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »",
      imgSrc: "/img/kristen.jpg",
      name: "Sylvain Lys",
      company: "LycGroup"
    },
    {
      text: "« Notre club réunit des dirigeants passionnés qui souhaitent échanger autour des thématiques du numérique (mais pas que) et générer des leads qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion du groupe en partageant sur les expériences de chacun et en organisant des activités hors du groupe (rendez-vous croisés, visites d’entreprise, ateliers…) »",
      imgSrc: "/img/kristen.jpg",
      name: "Sylvain Lys",
      company: "LycGroup"
    },
    
    
  ];


  
