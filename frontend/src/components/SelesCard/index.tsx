import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import './style.css';
import axios from "axios";
function SalesCars() {
    
    /* Estabelecendo uma data minima e uma data maxima */
    const min = new Date(new Date().setDate(new Date().getDate() - 365)); /* Chamando uma data de 1 ano atras da data atual */
    const max = new Date();
     
    const [minDate, setMinDate] = useState(min); 
    const [maxDate, setMaxDate] = useState(max);

    useEffect(()=>{
        axios.get("http://localhost:8080/sales")
            .then(response=> {
                console.log(response.data);
            });
    },[]);
    return (
        <div className="dsmeta-card">
            <h2 className="demeta-saler-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date(minDate)}
                        onChange={(date: Date) => setMinDate(date)} /* Pedindo para que capturem a nova data e alterem no visual */
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date(maxDate)}
                        onChange={(date: Date) => setMaxDate(date)} 
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Datas</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">12/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">12/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">12/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SalesCars