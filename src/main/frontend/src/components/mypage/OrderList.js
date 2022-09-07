import {useState} from "react";
import "../../css/userupdate.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Form from "react-bootstrap/Form";



function Orderlist() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container">
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>주문내역 조회</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>반품내역 조회</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>교환내역 조회</div>
            </div>


            {/* CONTENT 부분 */}
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>

                <div className="Date">
                    <p className="DataP">조회기간 선택</p>
                    <Form.Control type="date"></Form.Control>
                    <Form.Control type="date"></Form.Control>
                </div>
                  
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 105, marginBottom: 5}}>
                    {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                      <MenuIcon />
                    </IconButton> */}
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="주문내역 검색"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                      <DirectionsIcon />
                    </IconButton> */}
                </Paper>
                    <table class="table">
                    <thead>
                        <tr>
                          <th scope="col">No</th>
                        </tr>
                        
                    </thead>
                <table class="table table-hover">
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                </table>
                </table>              
                </div>
                    

                <div className={toggleState === 2 ? "content active-content" : "content"}>

                <div className="Date">
                    <p className="DataP">조회기간 선택</p>
                    <Form.Control type="date"></Form.Control>
                    <Form.Control type="date"></Form.Control>
                </div>

                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 105, marginBottom: 5}}>
                    {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                      <MenuIcon />
                    </IconButton> */}
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="반품내역 검색"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                      <DirectionsIcon />
                    </IconButton> */}
                </Paper>
                    <table class="table">
                    <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                    </thead>
                <table class="table table-hover">
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                </table>
                </table> 
                </div>

                <div className={toggleState === 3 ? "content active-content" : "content"}>

                <div className="Date">
                    <p className="DataP">조회기간 선택</p>
                    <Form.Control type="date"></Form.Control>
                    <Form.Control type="date"></Form.Control>
                </div>

                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 105, marginBottom: 5}}>
                    {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                      <MenuIcon />
                    </IconButton> */}
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="교환내역 검색"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                      <DirectionsIcon />
                    </IconButton> */}
                </Paper>
                    <table class="table">
                    <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                    </thead>
                <table class="table table-hover">
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                </table>
                </table> 
                </div>

            </div>

        </div>
    )
}

export default Orderlist;