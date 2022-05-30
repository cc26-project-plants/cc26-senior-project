import { Modal,Container,Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function FeedPlant(props: any) {


    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Feed Plant</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="container">
                    <div className="row row-cols-2">
                        <div className="col">water</div>
                        <div className="col">light</div>
                        <div className="col">something</div>
                        <div className="col">something</div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                {/* <Button variant="secondary">Close</Button> */}
                <Link href={"/main"}>
                    <Button variant="primary">Go back to Main</Button>
                </Link>
            
            </Modal.Footer>
        </Modal.Dialog>
    );
  }
  
//   function App() {
//     const [modalShow, setModalShow] = useState(false);
  
//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch modal with grid
//         </Button>
  
//         <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//       </>
//     );
//   }
  
//   render(<App />);