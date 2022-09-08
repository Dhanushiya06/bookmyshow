import React from "react";
import App from "../App";
import AppBar from "../Components/AppBar";

const HistoryPage = () => {
  return <div>
    <AppBar/>
    <div class="container mt-5">
        <div class="table-responsive">
            <table class="table table-striped table-dark text-white table-hover">
                <thead>
                    <tr>
                        <th class="text-center"><input type="checkbox"/></th>
                        <th colspan="2">Movie</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Updated</th>
                    
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center"><input type="checkbox"/></td>
                        <td colspan="2">
                            <h6>Bachelor</h6>
                        </td>
                        <td>18 Mar, 2022</td>
                        <td class="font-weight-bold">Sri</td>
                        <td>Completed</td>
                        <td><i class="fa fa-external-link external-link"></i></td>
                    </tr>
                    <tr>
                        <td class="text-center"><input type="checkbox"/></td>
                        <td colspan="2">
                            <h6>Vikram</h6>
                        </td>
                        <td>17 Sep, 2022</td>
                        <td class="font-weight-bold">Sri</td>
                        <td>Upcomping</td>
                        <td><i class="fa fa-external-link external-link"></i></td>
                    </tr>
                    <tr>
                        <td class="text-center"><input type="checkbox"/></td>
                        <td colspan="2">
                            <h6>Ponnian selvan</h6>
                        </td>
                        <td>31 Sep, 2022</td>
                        <td class="font-weight-bold">Sachin</td>
                        <td>Upcomping</td>
                        <td><i class="fa fa-external-link external-link"></i></td>
                    </tr>
                   
                    
                </tbody>
            </table>
        </div>
    </div>

    </div>
}
export default HistoryPage;
