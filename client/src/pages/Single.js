import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="gambar"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="gambar"
          />
          <div className="info">
            <span>Skyes</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="edit link" to="/write?edit=2">
              Edit
            </Link>{" "}
            <Link className="link">Delete</Link>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ipsam?
        </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad
            deleniti dolor ea at voluptatibus deserunt consequuntur nobis
            perferendis. Obcaecati nisi porro, saepe iste unde cupiditate
            accusantium laudantium qui beatae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea alias
            deleniti velit esse possimus, distinctio provident fuga, facere quos
            libero eum a iste minus magni optio doloremque debitis nobis,
            eligendi corrupti quam voluptates. Neque cupiditate, ex asperiores
            quisquam fugit deleniti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione
            eius reprehenderit harum veritatis quidem enim perferendis debitis
            culpa totam itaque perspiciatis corrupti, quam error quae quibusdam.
            Labore quidem culpa iste ducimus tempora laboriosam porro quia, ea
            consequatur, similique quo.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            mollitia vel, debitis aut doloribus maiores error sed ratione, vitae
            eligendi quas omnis officia reprehenderit eius.
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
