
import styles from "../../styles/homepage-comps/workflow-card.module.css";

const WorkFlowCard = ({heading, content, image}) => {


  return (

  <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={image} />
                    <h3>{heading}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{content}</p>
                        <a href="#">Click Here</a>
                </div>
            </div>
        </div>
        <style jsx>
          {`
            .container{
              width: 310px;
              position: relative;
              display: flex;
              justify-content: space-between;
          }
          
          .container .card{
              position: relative;
              cursor: pointer;
          }
          
          .container .card .face{
              width: 300px;
              height: 200px;
              transition: 0.5s;
          }
          
          .container .card .face.face1{
              position: relative;
              background: #006666;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1;
              transform: translateY(100px);
          }
          
          .container .card:hover .face.face1{
              background: #004747;
              transform: translateY(0);
          }
          
          .container .card .face.face1 .content{
              opacity: 0.2;
              transition: 0.5s;
          }
          
          .container .card:hover .face.face1 .content{
              opacity: 1;
          }
          
          .container .card .face.face1 .content img{
              max-width: 100px;
              margin:auto auto;
          }
          
          .container .card .face.face1 .content h3{
              margin: 10px 0 0;
              padding: 0;
              color: #fff;
              text-align: center;
              font-size: 1.5em;
          }
          
          .container .card .face.face2{
              position: relative;
              background: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
              box-sizing: border-box;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;
              transform: translateY(-100px);
          }
          
          .container .card:hover .face.face2{
              transform: translateY(0);
          }
          
          .container .card .face.face2 .content p{
              margin: 0;
              padding: 0;
          }
          
          .container .card .face.face2 .content a{
              margin: 15px 0 0;
              display:  inline-block;
              text-decoration: none;
              font-weight: 900;
              color: #333;
              padding: 5px;
              border: 1px solid #333;
          }
          
          .container .card .face.face2 .content a:hover{
              background: #333;
              color: #fff;
          }
        `}
        </style>
  </div>
  );
};

export default WorkFlowCard;
