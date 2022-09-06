import {useState} from "react";
import "../../css/wish.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function Wishlist() {

    
  
    return (
      

      <div className="wish">

        <div>
          <h2>나의 위시리스트</h2>
        </div>

      <div class="row row-cols-1 row-cols-md-5 g-4" >
        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/e8/53/d1/e853d1abdce5f872a0341e625b0f6c77.jpg" class="card-img-top" alt="..." className="cardImg"/>
            <button type="button" className="close" class="btn-close btn-close-white" aria-label="Close"></button>
            <div class="card-body">
              <h5 class="card-title">1 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite"><img className="cartButton" src="../images/mypage_icons/cart.png"/></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/1a/02/5f/1a025f47930393d78117321d6d4c148d.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">2 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/03/0f/69/030f692e5a7ef4998056045a4732618f.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">3 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/09/c5/41/09c541ec335f3f6ca9b4dd1d67d2b580.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">4 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/17/4f/b9/174fb99f70c56548a292c34732ee4796.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">5 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/e4/e3/58/e4e358fe8aa32ba6cb4134b1865b0f47.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">6 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/35/e2/e2/35e2e27591a4f7f9c1354dca9aab66be.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">7 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/c5/9a/ff/c59aff9c739f0a92eb70933f72fe14c8.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">8 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/de/35/4b/de354b4414e59f2b5242e0feb5c58cfb.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">9 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/474x/e4/e3/58/e4e358fe8aa32ba6cb4134b1865b0f47.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">10 제품명 입니다</h5>
              <div className="wishBtnGroup">
              <button type="button" class="btn btn-light" className="wishBtnBlack">삭제</button>
              <button type="button" class="btn btn-dark" className="wishBtnWhite">장바구니담기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>



    )
}

export default Wishlist;