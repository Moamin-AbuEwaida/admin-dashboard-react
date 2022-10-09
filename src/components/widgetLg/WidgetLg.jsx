import React from "react";
import "./WidgetLg.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762020.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jan. 2022</td>
          <td className="widgetLgAmount">€34,34</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?cs=srgb&dl=pexels-jc-laurio-1288171.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Lisa Castro</span>
          </td>
          <td className="widgetLgDate">22 May 2022</td>
          <td className="widgetLgAmount">€21,45</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?cs=srgb&dl=pexels-thyrone-paas-1722198.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Idris Salah</span>
          </td>
          <td className="widgetLgDate">13 Sept 2022</td>
          <td className="widgetLgAmount">€14,37</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?cs=srgb&dl=pexels-doug-bolton-1445527.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Bastian lopo</span>
          </td>
          <td className="widgetLgDate">22 Feb. 2022</td>
          <td className="widgetLgAmount">€4,53</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/12078589/pexels-photo-12078589.jpeg?cs=srgb&dl=pexels-ajidox-12078589.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Lily Mo</span>
          </td>
          <td className="widgetLgDate">22 July 2022</td>
          <td className="widgetLgAmount">€2,53</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
