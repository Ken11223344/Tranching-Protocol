import "./style.css";
export default function FooterBar() {
  const data = [
    {
      id:1,
      title:'fill',
      path:'',
      img:require('../static/images/ri_instagram-fill.png')
    },
    {
      id:2,
      title:'tiktok',
      path:'',
      img:require('../static/images/ic_baseline-tiktok.png')
    },
    {
      id:3,
      title:'twitter',
      path:'',
      img:require('../static/images/mdi_twitter.png')
    },
    {
      id:4,
      title:'youtube',
      path:'',
      img:require('../static/images/mdi_youtube.png')
    },
    {
      id:5,
      title:'facebook',
      path:'',
      img:require('../static/images/ic_baseline-facebook.png')
    },
  ]
  return (
    <footer style={{ marginTop: "20px" }} className="container">
      <p>© Tranching Protocols 2023.  All right reserved.</p>
      <div>
        {
          data.map((item,index)=>{
            return(
              <a href={item.path} key={index + 'foooter'}>
                <img src={item.img} alt={item.text} title={item.text}/>
              </a>
            )
          })
        }
      </div>
    </footer>
  );
}
