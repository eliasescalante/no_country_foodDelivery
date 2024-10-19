import React, { useEffect, useState } from "react";
import jsonData from '../../services/prueba.json'


const Footer = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    setData(jsonData);
  }, []);


  //console.log(data)



  return (
    <footer className="footer bg-bgTerceary text-neutral-content grid-rows-2 p-10">
      <nav>
        <h6 className="footer-title text-bgPrimary">Categories</h6>
        {data?.categorias?.map(x=>
            (
                <a className="link link-hover" key={x.id}>{x.name}</a> 
            )
        )}
       
        
      </nav>
      <nav>
        <h6 className="footer-title">Restaurants</h6>
        {data?.restaurants?.map(x=>
            (
                <a className="link link-hover" key={x.id}>{x.name}</a> 
            )
        )}
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Github</a>
      </nav>
      <nav>
        <h6 className="footer-title">Explore</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Apps</h6>
        <a className="link link-hover">Mac</a>
        <a className="link link-hover">Windows</a>
        <a className="link link-hover">iPhone</a>
        <a className="link link-hover">Android</a>
      </nav>
    </footer>
  );
};

export default Footer;
