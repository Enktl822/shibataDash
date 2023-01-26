import { Table } from "react-bootstrap";
import ProductRow from "../components/subComp/ProductRow";
import { KebabIcon } from "../icons/kebabIcon";
import "./../styles/products.css";

export function Products(props) {
  const { products } = props;
  return (
    <div className="products">
      <Table size="sm" bgcolor="white">
        <thead>
          <tr>
            <th>Зураг</th>
            <th>Барааны нэр</th>
            <th>Үнэ</th>
            <th>Үлдэгдэл</th>
            <th>Категори</th>
            <th className="d-flex justify-content-center">
              <KebabIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow data={product} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
