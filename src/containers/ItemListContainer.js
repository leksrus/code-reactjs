import Container from "react-bootstrap/Container";
import ItemCount from "../components/item-count/ItemCount";

function ItemListContainer({title}) {
 return(
     <Container>
         <div className="row align-items-start m-3">
             <div className="col-12">
                 <h2 className="text-center">
                     <em>{title}</em>
                 </h2>
             </div>

         </div>
         <ItemCount/>
     </Container>
 );
}

export default ItemListContainer;