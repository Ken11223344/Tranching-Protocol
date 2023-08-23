import "./style.css";
export default function FooterBar() {
  const data = [
    {
      id:3,
      title:'twitter',
      text:"Connect me",
      path:'',
      img:require('../static/images/mdi_twitter.png')
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
                <img src={item.img} alt={item.text} title={item.title}/>
              </a>
            )
          })
        }
      </div>
    </footer>
  );
}
