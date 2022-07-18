import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import './style.css';
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";
function SalesCars() {

    /* Estabelecendo uma data minima e uma data maxima */
    const min = new Date(new Date().setDate(new Date().getDate() - 365)); /* Chamando uma data de 1 ano atras da data atual */
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);
    useEffect(() => {
        const dmin = minDate.toISOString().slice(0, 10); /* a funcao toISOString(), serve para limpar as informacoes capturada(como local e tal) e deixar apenas data e hora */
        /*  A funcao slice(0, 10), serve para recortar a string, neste caso seria do caractere 0 ate o caractere 10 */
        const dmax = maxDate.toISOString().slice(0, 10);
        console.log(dmin + ' - ' + dmax) ;
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content);
            });
    }, [minDate, maxDate]); /* passando esses valores, nos pedimos que a funcao seja refeita sempre que um dos dois valores forem alterados */
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
                        {
                            sales.map(
                                sale => {
                                    return (
                                        <tr key={sale.id}>
                                            <td className="show992">{sale.id}</td>
                                            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td> {/* a funcao toLocaleDateString() serve ´para que a data seja escrita no padrao brasileiro, dia, mes e ano*/}
                                            <td>{sale.seller_name}</td>
                                            <td className="show992">{sale.visited}</td>
                                            <td className="show992">{sale.deals}</td>
                                            <td>R$ {sale.amount.toFixed(2)}</td> {/* A funcao toFixed(2), serve para adicionar as duas casas decimais */}
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <NotificationButton saleId={sale.id} />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SalesCars