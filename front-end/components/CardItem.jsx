import { urlFor } from "lib/api";
import Link from "next/link";
import { Card } from "react-bootstrap";

const CardItem = ({ title, subtitle, date, image, author, link }) => {
  return (
    <Card className={`fj-card`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img
            src={
              author?.avatar ||
              "https://aja-marketplace.com/wp-content/uploads/yith-wcmv-uploads/vendor-avatar-placeholder.png"
            }
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          <div>
            <Card.Title className='font-weight-bold mb-1'>
              {author?.name || "Guest"}
            </Card.Title>
            <Card.Text className='card-date'>{date}</Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          <Card.Img
            src={image ? urlFor(image).height(300).crop('center').fit('clip').url() : `https://picsum.photos/200/300?id=${Math.floor(Math.random() * 100)}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/200/300?id=${Math.floor(Math.random() * 100)}`;
            }}
            alt='Card image cap'
          />
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
